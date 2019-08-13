var express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restful_blog_app", {
    useNewUrlParser: true
});
app.set('view engne', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        defualt: Date.now
    }
});

// title 
// Image
// body
// created
app.listen(PORT = 3000, function (req, res) {
    console.log("server is running");
});