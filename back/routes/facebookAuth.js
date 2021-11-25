const express = require('express');
const passport = require('passport');

const router = express.Router();

const clientUrl = process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL_PROD : process.env.CLIENT_URL_DEV;

router.get('/facebook', passport.authenticate('facebook', {
  authType: 'rerequest', scope: ['public_profile', 'email']
}));

router.get('/facebook/callback', passport.authenticate('facebook', { 
    successRedirect: clientUrl,
    failureRedirect: clientUrl + "/login",
  })
);

module.exports = router;