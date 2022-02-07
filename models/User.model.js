const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    // Имя пользвателя
    name: {
        required: true,
        type: String,
    },
    // Фамилия пользователя
    lastName: {
        type: String,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;