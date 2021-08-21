const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use("/static", express.static("static"));

// Set the template engie as pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Our pug demo endpoint
app.get("/", (req, res) => {
    const parameters = {"title" : "Hitesh is making this", "content" : "This is the content is the"};
    res.status(200).render("index.pug", parameters)
});

app.listen(port, () => {
    console.log(`"The application started successfully on port ${port}"`);
});