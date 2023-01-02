const fs = require('fs');
const path = require('path');

function removeDirectory(directory) {
    fs.readdir(directory, (err, files) => {

        // check if directory exists
        if (fs.existsSync(directory)) {
            for (const file of files) {
                if (file != '.keep') {
                    fs.unlink(path.join(directory, file), err => {
                        if (err) throw err;
                    });
                }
            }
        } else {
            console.log('Directory: %s not found. Nothing to remove.', directory)
            // if (err) throw err;
        }
        
    });
}

removeDirectory('./reports/allure/')
removeDirectory('./reports/html/')
removeDirectory('./reports/json/')