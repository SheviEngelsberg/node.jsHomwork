// const jwt = require('jsonwebtoken');
// const TOKEN_SECRET="sE6ret0gfknf";
// const verifyToken = (req, res, next) => {
//     const token = req.header('auth-token');
//     if (!token) {
//       return res.status(401).send('Access denied. Token not provided.');
//     }
  
//     try {
//       if (token.startsWith('Bearer ')) {
//           token = token.slice(7, token.length).trimLeft();}
//       const verified = jwt.verify(token, TOKEN_SECRET); 
//       console.log(verified);
//       req.user = verified;
//       next();
//   }
//   catch (err) {
//       res.status(400).send("Invalid Token");
//   }  };
//   module.exports = {
//     verifyToken
//   };
// authMiddleware.js

const jwt = require('jsonwebtoken');
const TOKEN_SECRET = "sE6ret0gfknf";

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["auth-token"];
    //req.header('postman-token');
    console.log(req.headers)
    console.log("token" + token);
    if (!token) {
      
        return res.status(403).send("A token is required for authentication");
      
        
    }

    try {
        const verified = jwt.verify(token, TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send(`Invalid token.`,error);
    }
};

module.exports = verifyToken ;

// const jwt = require('jsonwebtoken');
// const TOKEN_SECRET= "sE6ret0gfknf";

// const loggedIn = function (req, res, next) {
    
//     const token = req.body.token || req.query.token || req.headers["auth-token"];

//     if (!token) {
//         return res.status(403).send("A token is required for authentication");
//     }

//     try {
//         const decoded = jwt.verify(token, TOKEN_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.status(401).send("Invalid Token");
//     }
// }
// module.exports = loggedIn;
