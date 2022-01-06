const fs = require('fs');

const rootDir = `${__dirname}/..`;

function copyPackageJSON(path, to) {
    fs.readFile(path, (err, data) => {
        if (err) throw err;

        let package = JSON.parse(data);

        console.log(package);

        delete package.private;

        let write = JSON.stringify(package, null, 2);

        fs.writeFile(to, write, (err) => {
            if (err) throw err;

            console.log('Data written to file');
        });
    });
}

copyPackageJSON(`${rootDir}/packages/drawbridge/package.json`, `${rootDir}/packages/drawbridge/dist/package.json`);
copyPackageJSON(`${rootDir}/packages/oxygen/package.json`, `${rootDir}/packages/oxygen/dist/package.json`);
copyPackageJSON(`${rootDir}/packages/merit/package.json`, `${rootDir}/packages/merit/dist/package.json`);