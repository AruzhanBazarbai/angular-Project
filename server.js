
const express = require('express'); 
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(bodyParser.json());
// app.use(cookieParser());

const RSA_PRIVATE_KEY = fs.readFileSync('./dev.key', 'utf-8');
const findUserIdForEmail = require('./users.js').findUserIdForEmail;
const addUser = require('./users.js').addUser;
  
// handling CORS 
app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin",  
               "http://localhost:4200"); 
    res.header("Access-Control-Allow-Headers",  
               "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
}); 
  
app.post('/api/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email && password) {
    const userId = findUserIdForEmail(email, password);

    if (userId!=="-1") {
      const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
        algorithm: 'RS256',
        expiresIn: 120,
        subject: (userId).toString(),
      });

      res.json({ token: jwtBearerToken, success: true, message: "success authorization" });
    } else {
      res.json({success: false, message: "Authorization error" });
    }
  } else {
    res.status(401).json({ message: 'Authorization error' });
  }
});
app.post('/api/register', (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const email = req.body.email;
  const password = req.body.password;

  if (email && password && name && address) {
    const userId = findUserIdForEmail(email, password);
    
    if (userId === "-1") {
      const userId = addUser(name, address, email, password);
      if (userId === "-1") {
        res.json({ success: false, message: "registration error" });
      }


    } 
    const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
      algorithm: 'RS256',
      expiresIn: 10000,
      subject: (userId).toString(),
    });
    res.json({ token: jwtBearerToken, success: true, message: "success registration" });
  } else {
    res.status(401).json({ message: 'Authorization error 2222' });
  }
});

app.get('/api/message', (req, res) => { 
    res.json({ message:  
        'Hello GEEKS FOR GEEKS Folks from the Express server!' }); 
}); 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
  