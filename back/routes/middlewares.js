exports.needLogin = (req, res, next) => {
  if (req.isAuthenticated()){
    next();
  } else{
    res.status(401).send('로그인이 필요합니다.');
  }
}

exports.needNotLogin = (req, res, next) => {
  if (!req.isAuthenticated()){
    next();
  } else{
    res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
  }
}