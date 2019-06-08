const fs = require('fs-extra');

const indexFile = `./environments/index.${process.argv[2]}.html`;

fs.pathExists(indexFile, (err, exists) => {
  if (exists) {
    fs.copySync(indexFile, './src/index.html');
  }
});