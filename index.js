const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { User } = require('./models/User');
const config = require('./config/key');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;

// application/x-www-form-urlendcoded
app.use(bodyParser.urlencoded({extended: true}));
// application /json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// app.get('/', (req, res) => res.send('Hello World!'));

app.post('/register', function (req, res) {
    const user = new User(req.body);

    // save는 몽고디비 함수
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        });
    });
});

app.post('/login', function (req, res) {
    User.findOne({ email: req.body.email}, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." });
            }

            user.generateToken((err, user) => {
                if (err) {
                    return res.status(400).send(err);
                }

                // 쿠키에 토큰을 저장한다.
                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id });
            });
        });
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

