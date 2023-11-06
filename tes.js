var fs = require('fs');
var path = require('path');
var archiver = require('archiver');
const format = require('date-format');
// create a file to stream archive data to.
var output = fs.createWriteStream(__dirname + '/backup/backup'+format("dd", new Date())+'.zip');
var archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

// listen for all archive data to be written
output.on('close', function() {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});

output.on('end', function() {
    console.log('Data has been drained');
});

archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
        console.warn(err);
    } else {
        throw err;
    }
});

archive.on('error', function(err) {
    throw err;
});

// track progress
archive.on('entry', function(data) {
    console.log(`Zipping file: ${data.name}`);
});

// pipe archive data to the file
archive.pipe(output);

// append files from a directory
archive.directory('data_json/', false);

// finalize the archive
archive.finalize();
