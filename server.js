require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
const app = express()
const PORT = process.env.PORT || 5000
const compression = require('compression');

//INSTANTIATE MIDDLEWARE

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(pino);
app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  database: 'soundclout',
}, (err) =>{
  if(err){
    console.log(err)
  } else{
    console.log("database is connected")
  }
})

const router = require('./routes/apiRoutes');

app.use('/api' , router)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// LAUNCH SERVER
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})
