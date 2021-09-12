const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const userSchema = new Schema({
    googleId: String
})

Mongoose.model('users', userSchema);