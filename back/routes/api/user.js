const express = require('express')
const router = express.Router();

const User = require('../../models/user');
const { needLogin, needNotLogin } = require('../middlewares')

router.get('/', async (req, res, next) => {
  try{
    if(req.user){
      const safeUser = await User.findOne({
        where: { id: req.user.id },
      })
      res.status(200).json(safeUser);
    } else {
      res.status(200).json(null);
    }
  } catch(err) {
    console.error(err)
    next(err);
  }
})

router.post('/logout', needLogin, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok!');
})

module.exports = router;