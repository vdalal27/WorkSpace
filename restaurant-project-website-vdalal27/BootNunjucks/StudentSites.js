/* A file to rendering Nobel Prize information from JSON into HTML
with *nunjucks*. 
*/

const nunjucks = require('nunjucks');
const students = require('./StudentNameID.json');
const fs = require('fs'); // The file system module

nunjucks.configure('views', {
    autoescape: true
});
students.sort(function compare(a, b){
    if (a.Username < b.Username) {
        return -1;
    } else {
        return 1;
    }
});
let outString = nunjucks.render('studentSites.njk', {students: students});
fs.writeFileSync('./output/' + "StudentSites.html", outString);
console.log("Wrote StudentSites.html");
