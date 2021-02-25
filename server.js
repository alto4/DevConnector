const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to the database
connectDB();

// ROUTES
app.get("/", (req, res) => res.send("API running successfuly."));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Listen on port specified in env file, otherwise list on port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
