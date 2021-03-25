# Notes Taker using express

## Table of contents
- [Description](#Description)
- [User Story](#User/Story)
- [Installation](#Installation)
- [Usage](#Usage)
- [Framework HTML/JS](#Framework)
- [Credits](#Credits)
- [Contributors](#Contributing)

## Description

Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.
   
## User/Story  
```md
AS A small business owner
You'll be able to write and save notes
SO THAT You can organize your to do's and keep track of tasks that needs to be completed
```

## Installation
```md
git clone <https://github.com/VictorCodrean/Note_Taker_Express.git> (to get the code)
npm i              (to install dependencies (express and shortid...)) 
node <server.js>       (to run the program on localhost:3000)
```
An option is to deploy on Heroku...
```md
$ git add .
$ git commit -m "Your comment here"
$ heroku login
Enter your Heroku credentials.
...
$ heroku create
Creating arcane-lowlands-8408... done, stack is cedar
http://arcane-lowlands-8408.herokuapp.com/ | git@heroku.com:arcane-lowlands-8408.git
Git remote heroku added
$ git push heroku main
...
-----> Node.js app detected
...
-----> Launching... done
       http://salty-fortress.herokuapp.com deployed to Heroku

```

## Usage
![sampleReadme](/public/assets/illustration/illustration.gif)
```md
* Open the Note Taker
  Landing page with a link to a notes page will appear
* Click on the link to the notes page
  Then You are presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
* Enter a new note title and the note’s text
  THEN a Save icon appears in the navigation at the top of the page
* Click on the Save icon
  Then the new note You have entered is saved and appears in the left-hand column with the other existing notes
* Click on an existing note in the list in the left-hand column
  That note appears in the right-hand column
```
## Framework
* HTML- Data & CSS - (build with Bootstrap and own CSS style)
* JS - code:
    * modules imported...
        ```
        const express = require("express");
        const fs = require("fs");
        const path = require("path");
        const shortId = require('shortid');
        ...
        ```
    * express
         ```
         const app = express();
         const router = express.Router();
        ```
     * shortid
         ```
        shortId.generate()
        ```
## Credits
 * - [StackOverFlow](https://stackoverflow.com/)
 * - [Npm-express](https://www.npmjs.com/package/express)
 * - [Npm-shortid](https://www.npmjs.com/package/shortid)

## Directory
* [GitHub Source](https://github.com/VictorCodrean/Note_Taker_Express)
* [Heroku Link](https://fast-garden-30201.herokuapp.com/)

## Contributing
Victor Codrean    
*  [Repository link:](https://github.com/VictorCodrean/Note_Taker_Express)

Asking me any questions:

<a href="mailto:codreanvictor@gmail.com" style="text-decoration:none"><img height="20" src = "https://img.shields.io/badge/Gmail-c14438?&style=for-the-badge&logo=gmail&logoColor=white&style=plastic"></a>

[<img height="20" src="https://img.shields.io/badge/-GitHub-black.svg?&style=for-the-badge&logo=github&logoColor=white&style=plastic"/>](https://github.com/VictorCodrean)
