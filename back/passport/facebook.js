const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy; // 이 부분 추가
const { User } = require('../models');

const serverURL = process.env.NODE_ENV === 'production' ? process.env.SERVER_URL_PROD : process.env.SERVER_URL_DEV;

module.exports = () => {
  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${serverURL}/auth/google/callback`,
    passReqToCallback: true,
  }, async (req, accessToken, refreshToken, profile, done) => {
    try {
      const currentUser = await User.findOne({
        provider: 'facebook',
        facebookId: profile.id,
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          provider: profile.provider,
          email: profile._json.email,
          facebookId: profile.id,
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
  })
)};