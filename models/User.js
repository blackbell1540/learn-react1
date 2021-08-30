const mongoose = require('mongoose');

// 스키마를 정의한다.
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    passsword: {
        type: String,
        maxlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

// 스키마를 모델로 감싼다.
const User = mongoose.model('User', userSchema);
// 이 모델을 외부에서 사용할 수 있도록 export
module.exports = { User };