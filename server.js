//Install express server
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PATH = path.join(__dirname,'./dist/ailyeWebSite/');
// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, './dist/ailyeWebsite')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/ailyeWebsite', 'index.html'));
});
// /home/ailye/Documents/ailyeWebSite/dist/ailyeWebSite

function showFiles(file) {
  console.log(file)
  fs.readdir(file, (err, files) => {
    if (!err) {
      files.forEach(e => {
        console.log(e);
        if (fs.lstatSync(e).isDirectory()) {
          showFiles(e);
        }
      });
    }
  })
}

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log('Serveur up');
  // showFiles(PATH)
});
