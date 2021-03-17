// express, path, fs and shortId dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const { readFile, writeFile } = require("fs");
// const nanoid = require("nanoid");  ask a TA how nanoid works...
const shortId = require('shortid');

// define router
const router = express.Router();

// database in a json file
let dataBase = require("../db/db.json");

router.get("/api/notes", (req, res) => {
    // console.log(dataBase);
    res.json(dataBase);

    // readFile("./db/db.json", "utf8", (err, data) => {
    //     if (err) throw err
    //     console.log(data);
    //     res.send(data)
    // })
});

router.post("/api/notes", (req, res) => {
    // console.log(req.body);
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
    // readFile("./db/db.json", "utf8", (err, data) => {
    //     console.log(data);
    // })
});

router.delete("/api/notes/:id", (req, res) => {
    let allNotes = dataBase;
    let notesUpdated = allNotes.filter(item => item.id != req.params.id);
    dataBase = notesUpdated;
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notesUpdated), err => {
        if (err) throw err;
        console.log("Note deleted");
        res.json(dataBase)
    })
    // index = dataBase.map(function (item) {
    //     return item.Id
    // }).indexOf(req.params.id);

    // dataBase.splice(index, 1);
    // console.log(dataBase);
    // res.json(dataBase);
})

module.exports = router;