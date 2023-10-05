const fs = require('fs');
const path = require('path');

const logsDirectory = 'Logs';

function createLogFiles() {
  try {
    if (!fs.existsSync(logsDirectory)) {
      fs.mkdirSync(logsDirectory); 
    }

    process.chdir(logsDirectory); 

    for (let i = 1; i <= 10; i++) {
      const fileName = `log${i}.txt`;
      const filePath = path.join(process.cwd(), fileName);
      const text = `This is log file ${i}.`;

      fs.writeFileSync(filePath, text);
      console.log(`Created file: ${fileName}`);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

createLogFiles();
