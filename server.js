// dependencies
const express = require("express");
const path = require("path");
//  routes we import
const htmlSourceRoute = require("./routes/htmlSourceRoute");
const apiSourceRoute = require("./routes/apiSourceRoute");

// express and server Port
const app = express();
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// use route files we imported
app.use(apiSourceRoute);
app.use(htmlSourceRoute);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));