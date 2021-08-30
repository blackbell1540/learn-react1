const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { User } = require('./models/User');
const config = require('./config/key');

const app = express();
const port = 5000;

// application/x-www-form-urlendcoded
app.use(bodyParser.urlencoded({extended: true}));
// application /json
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// app.get('/', (req, res) => res.send('Hello World!'));

app.post('/register', (req, res) => {
    const user = new User(req.body);

    // save는 몽고디비 함수
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        });
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

