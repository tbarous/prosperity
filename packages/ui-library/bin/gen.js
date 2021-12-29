const fs = require('fs');
let file = require(__dirname + '/../package.json');

file = {...file, private: false};

let result = JSON.stringify(file);

fs.writeFile(__dirname+'/../dist/package.json', result, function (err) {
  if (err) return console.log(err);
});