const dateFns = require('date-fns');

// Formatting without using a library

function formatDateVanilla(date) {

  const dd = date.getDate().toString().padStart(2, '0');
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const yyyy = date.getFullYear();

  const HH = date.getHours().toString().padStart(2, '0');
  const mm = date.getMinutes().toString().padStart(2, '0');
  const ss = date.getSeconds().toString().padStart(2, '0');

  return `${dd}-${MM}-${yyyy} ${HH}:${mm}:${ss}`;
}

// Formatting using date-fns

function formatDateFns(date) {

  return dateFns.format(date, 'dd-MM-yyyy HH:mm:ss');
}

console.log('__filename', __filename);
console.log('__dirname', __dirname);

module.exports = {
  format: formatDateFns
};
