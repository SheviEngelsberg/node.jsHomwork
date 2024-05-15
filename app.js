const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
  
const mongoDB = "mongodb://localhost:27017/myYad2DB";
  
main().catch((err) => console.log(err));
  
async function main() {
  await mongoose.connect(mongoDB);
  console.log("mongoDB connected");
}

const categories = require('./routers/categoriesRouter'); 
const products = require('./routers/productsRouter');
const authRoute= require('./routers/authRouter')
const logTime= require('./middlewares/logTime');
const checkBody= require('./middlewares/checkBody');
const verifyToken  = require('./middlewares/authMiddleware');
const middlewares = [verifyToken,logTime,checkBody];

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(authRoute);
app.use(middlewares);
app.use(products); 
app.use(categories);

app.use((err, res) =>{
  res.status(500).send("There is a problem with the server, we will try again later" + err.message);
})

app.listen(3000, () => { 
  console.log("listening on http://localhost:3000"); 
});
