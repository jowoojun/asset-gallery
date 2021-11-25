const passport = require('passport');

const google = require('./google');
const { User } = require('../models');
const facebook = require('./facebook');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  });

  passport.deserializeUser(async (id, done) => {
    try{
      const user = await User.findOne({ where: { id } })
      done(null, user)
    } catch(err) {
      console.error(err);
      done(err)
    }
  });

  google();
  facebook();
}