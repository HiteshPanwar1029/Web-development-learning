const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use("/static", express.static("static"));

// Set the template engie as pug
app.set("view engine", "pug");

// Set the views directory  
app.set("views", path.join(__dirname, "views"))

// Our pug demo endpoint
app.get("/demo", (req, res)=> {
res.status(200).render('demo', {title : "hi", message : "hello ji"})
});

app.get("/", (req, res)=> {
res.send("This is my first express app");
});

app.get("/about", (req, res)=> {
res.send("This is the about page of my first express app");
});

app.post("/about", (req, res)=> {
    res.send("This is the post request of about page of my first express app");
});

app.get("/contact", (req, res)=> {
res.status(404).send("The contact page of my first express app is not found");
});

app.listen(port, ()=>{
console.log(`"The application started successfully on port ${port}"`);
});

//postman mai localhost:80 daalne se res.send wala show hoga