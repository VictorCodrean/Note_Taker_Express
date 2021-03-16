// dependencies
const express = require("express");
const { error } = require("console");
const { readFile, writeFile } = require("fs");

//  routes we import
const htmlSourceRoute = require("./routes/htmlSourceRoute");
const apiSourceRoute = require("./routes/apiSourceRoute");

// express server
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// use route files we imported
app.use(htmlSourceRoute);
app.use(apiSourceRoute);

// app.get("/api/notes", (req, res) => {
//     readFile("./db/db.json", "utf8", (err, data) => {
//         if (err) {
//             throw err
//         }
//         console.log(data);
//         res.send(data)
//     })
// });

// app.post("/api/notes", (req, res) => {
//     req.body.id = 2;
//     console.log(req.body);

//     readFile("./db/db.json", "utf8", (err, data) => {
//         if (err) {
//             throw err
//         }

//         const notesArr = JSON.parse(data)
//         notesArr.push(req.body);

//         const noteArrReady = JSON.stringify(notesArr);
//         writeFile("./db/db.json", noteArrReady, "utf8", () => {
//             res.send(noteArrReady)
//         })
//         console.log(notesArr);

//     })
// })

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));