
const checkBody=function (req, res, next){
    if ((req.method === 'POST' || req.method === 'PUT') && Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Empty body data not allowed for POST/PUT requests' });
    }
    next();
  };
  module.exports = checkBody;