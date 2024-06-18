const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRoute);


// Greeting Message
app.get('/', (req, res) => {
    res.send("Hello World from Node API Server Updated");
});

// Connect to MongoDB database
mongoose.connect("mongodb+srv://say:Bn1Z32Inbw7VUfzu@simpedb.6mc52sz.mongodb.net/SimpeCRUD?retryWrites=true&w=majority&appName=simpeDB")
    .then(() => {
        console.log("Connected to database!");

        // Start the Express server
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.log("Connection failed: " + error.message);
    });
