let express = require("express");
let path = require("path");
let fs = require("fs");

let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/notes", function(req, res){

    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", function(req, res){

    res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });