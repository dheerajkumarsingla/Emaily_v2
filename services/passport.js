const Passport          = require('passport');
const GoogleStrategy    = require('passport-google-oauth20').Strategy;
const keys              = require('../config/keys');
const Mongoose          = require('mongoose');
const User              = Mongoose.model('users');
const _                 = require('lodash');


Passport.serializeUser((user, done) => {
    done(null, user.id);
})

Passport.deserializeUser(async (userId, done) => {
    const user = await User.findById(userId);
    done(null, user);
})

Passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const exisitingUser = await User.findOne({googleId: _.get(profile, 'id', '')});
        if(!exisitingUser) {
            const newUser = await new User({googleId: _.get(profile, 'id', '')}).save();
            done(null, newUser);
            return;
        }
        done(null, exisitingUser);
        return;
    }
));