const express        = require('express');
const app            = express();
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
// const methodOverride = require('method-override');
// const session        = require('express-session');
// require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static('public'));
// app.use(methodOverride('_method'));
// app.use(bodyParser.urlencoded({extended:false}));


// app.use(session({
//     secret: "this is a random string secret", //a random string do not copy this value or your stuff will get hacked
//     resave: false,
//     saveUninitialized: false
//
// }));

// app.get('/', (req, res)=>{
// 	res.send("Hello!");
// });

const carsController = require('./controllers/usedCar.js');
app.use('/usedCars', carsController);
const seedController= require('./controllers/seedController.js');
app.use('/seed', seedController);
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/carscrud');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

app.listen(3000, ()=>{
	console.log('listening....');
});
