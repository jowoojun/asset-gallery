const express = require('express');
const passport = require('passport');

const router = express.Router();

const clientUrl = process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL_PROD : process.env.CLIENT_URL_DEV;

// google login 화면
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] })
);

// google login 성공과 실패 리다이렉트
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: clientUrl,
    failureRedirect: clientUrl + "/login",
  })
);

module.exports = router;