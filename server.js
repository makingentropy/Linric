const express        = require('express');
const app            = express();
// const mongoose       = require('mongoose');
// const bodyParser     = require('body-parser');
// const methodOverride = require('method-override');
// const session        = require('express-session');
// require('dotenv').config();

// app.use(methodOverride('_method'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.static('public'));

// app.use(session({
//     secret: "this is a random string secret", //a random string do not copy this value or your stuff will get hacked
//     resave: false,
//     saveUninitialized: false
//
// }));


app.get('/', (req, res)=>{
	res.send("Hello!");
});



app.listen(3000, ()=>{
	console.log('listening....');
});
