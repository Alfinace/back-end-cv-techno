const {mongoose} = require('../db');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: Array,
        required: false,
        default: null,
    },
    createdAt: { 
        type: Date,
        required: true,
        default: Date.now(),
    }
});

const User = mongoose.model("User", userSchema);

module.exports = {User};
