const express = require('express');
const app = express();
const mongoose=require('mongoose');
const User = require('./models/User');

const Schema = mongoose.Schema;

const db = 'mongodb+srv://admin1:OmSai@Ram1@cluster0-ru7ta.mongodb.net/test?retryWrites=true';

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// Body parser middleware
app.use(express.urlencoded({ extended: false }));

/* GET home page. */
app.get('/', (req,res) => res.json({
	msg: "Hello! Welcome to BAWN(Backend API with NodeJS)"
}));

// create register Route
app.post('/register', (req, res) => {

	const newUser = new User({
	    username: req.body.name,
	    email: req.body.email,
        password: req.body.password,
        phone:req.body.phone
	});

	newUser
	    .save()
	    .then(user => res.json(user))
	    .catch(err => res.json(err));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));