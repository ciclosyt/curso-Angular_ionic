const fs = require('fs/promises');

function logFileContentES5(filePath) {

  fs.readFile(filePath, 'utf8')
    .then(function(fileContents) {
      console.log(fileContents);
    })
    .catch(function(error) {
      console.error(error);
    })
}

async function logFileContentES8(filePath) {

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    console.log(fileContents);
  } catch(error) {
    console.error(error);
  }
}

function getPromise(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0) {
        resolve(n);
      } else {
        reject('Oops...');
      }
    }, 1000);
  });
}

(async function() {

  await logFileContentES8('../explanation-3-base/file.txt');

  try {
    const n = await getPromise(1);
    console.log('Success:', n);
  } catch(e) {
    console.error('Error:', e);
  }

})();
