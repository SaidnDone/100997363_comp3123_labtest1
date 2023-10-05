const fs = require('fs');
const path = require('path');

const logsDirectory = 'Logs';

function removeLogFiles() {
  try {
    if (fs.existsSync(logsDirectory)) {
      const logFiles = fs.readdirSync(logsDirectory);
      
      console.log('Files to delete:');
      logFiles.forEach((file) => {
        console.log(file);
        fs.unlinkSync(path.join(logsDirectory, file)); 
      });

      fs.rmdirSync(logsDirectory);
      console.log('Removed directory: ' + logsDirectory);
    } else {
      console.log('Directory ' + logsDirectory + 'does not exist');
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

removeLogFiles();
