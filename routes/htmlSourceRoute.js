// express and path dependencies
const express = require("express");
const path = require("path");

// define router
const router = express.Router();
const app = express();

// paths to home page and notes..
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// router.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });
module.exports = router;