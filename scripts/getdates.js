
let date = new Date();
let year =date.getFullYear();

document.getElementById('date').innerHTML = '&copy;' + year;

let currentdate = document.lastModified;

document.getElementById('date').textContent +=  ` Last Updated: ${currentdate}`;

console.log(year);
