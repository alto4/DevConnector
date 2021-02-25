const express = require("express");

const app = express();

// ROUTES

app.get("/", (req, res) => res.send("API running successfuly."));

// Listen on port specified in env file, otherwise list on port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
