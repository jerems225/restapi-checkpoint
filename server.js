require('dotenv').config({ path : './config/.env'})
const { MONGO_URI, HOST, PORT } = process.env
let mongoose = require('mongoose')
let bodyParser = require('body-parser');
var express = require('express');

const app = express();

//Routes
var userRouter = require('./routes/user-routes');

//Json Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Connect database
mongoose.connect(MONGO_URI, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('db connection failed...', err);
    }
    else {
        console.log('db connection success...');
    }
});


app.use('/api/', userRouter)

app.listen(PORT, () => {
    console.log(`\n\n\n *****  Server is listening on http://${HOST}:${PORT}/api/ \n`)
});

module.exports = app;