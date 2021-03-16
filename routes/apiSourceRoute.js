// express, path, fs and shortId dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const { readFile, writeFile } = require("fs");
// const nanoid = require("nanoid");
const shortId = require('shortid');

// define router
const router = express.Router();

// database in a json file
const dataBase = require("../db/db.json");

router.get("/api/notes", (req, res) => {
    res.json(dataBase);
    console.log(dataBase);
    // readFile("./db/db.json", "utf8", (err, data) => {
    //     if (err) throw err
    //     console.log(data);
    //     res.send(data)
    // })
});

router.post("/api/notes", (req, res) => {
    console.log(req.body);
    // req.body.id = nanoid();

    var addNote = {
        title: req.body.title,
        text: req.body.text,
        id: shortId.generate()
    };
    dataBase.push(addNote);
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(dataBase), err => {
        if (err) throw err;
        console.log("note added");
        res.json(dataBase);
    });
    readFile("./db/db.json", "utf8", (err, data) => {
        console.log(data);
    })
    // readFile("./db/db.json", "utf8", (err, data) => {
    //     if (err) throw err;
    //     const notesArr = JSON.parse(data)
    //     notesArr.push(req.body);

    //     const noteArrReady = JSON.stringify(notesArr);
    //     writeFile("./db/db.json", noteArrReady, "utf8", () => {
    //         res.send(noteArrReady)
    //     })
    //     console.log(notesArr);

    // })
});

module.exports = router;