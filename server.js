
const express = require("express");
const path = require("path");
const fs = require("fs");

// set up Express

const app = express();
const PORT = process.env.PORT || 3000;
let data = JSON.parse(fs.readFileSync("/db/db.json", "utf8"));
