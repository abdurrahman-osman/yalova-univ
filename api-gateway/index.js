const express = require('express');
const axios = require('axios');
const multer = require('multer');
const path = require('path');

var app = express();
//TCP PORT 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
// Test based: json, xml, text,
// File based: pdf, xml, excel
// status code

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Replace 'index.html' with your actual HTML file path
});

app.get("/login", (req, res, next) => {
    axios.get('http://127.0.0.1:3001')
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
  });
   });

   app.get("/sepet", (req, res, next) => {
    axios.get('http://127.0.0.1:3002')
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
  });
   });
  app.get("/product", (req, res, next) => {
    axios.get('http://127.0.0.1:5000')
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
  });
   });


   const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  });
  const upload = multer({ storage: storage });
  
  // Route for uploading a single file
  app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No files were uploaded.');
    }
    
    res.send('File uploaded successfully.');
  });

