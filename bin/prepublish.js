const rootDir = `${__dirname}/..`;

console.log(rootDir)
const {exec} = require("child_process");

function copyPackageJSON(path, to) {
    dir = exec(`cp ${path} ${to}`, function(err, stdout, stderr) {
      if (err) {
        // should have err.code here?
      }
      console.log(stdout);
    });

    dir.on('exit', function (code) {
      // exit code is code
    });
}

copyPackageJSON(`${rootDir}/packages/drawbridge/package.json`, `${rootDir}/packages/drawbridge/dist/package.json`);
copyPackageJSON(`${rootDir}/packages/oxygen/package.json`, `${rootDir}/packages/oxygen/dist/package.json`);
copyPackageJSON(`${rootDir}/packages/merit/package.json`, `${rootDir}/packages/merit/dist/package.json`);