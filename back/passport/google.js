const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models');

const serverURL = process.env.NODE_ENV === 'production' ? process.env.SERVER_URL_PROD : process.env.SERVER_URL_DEV;

module.exports = () => {
  passport.use('google', new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${serverURL}/auth/google/callback`,
        passReqToCallback: true,
    },async (req, accessToken, refreshToken, profile, done) => {
      try {
        const currentUser = await User.findOne({
          provider: 'google',
          googleId: profile.id,
        });
        // create new user if the database doesn't have this user
        if (!currentUser) {
          const newUser = await new User({
            provider: profile.provider,
            email: profile._json.email,
            googleId: profile.id,
            name: profile._json.name,
            locale: profile._json.locale,
          }).save();
          if (newUser) {
            return done(null, newUser);
          }
        }
        done(null, currentUser);
      } catch (error) {
        console.log(error)
        return done(error);
      }
    }
  )
)};