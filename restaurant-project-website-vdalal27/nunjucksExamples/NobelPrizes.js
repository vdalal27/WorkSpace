/* A file to rendering Nobel Prize information from JSON into 
HTML with *nunjucks*. 

Student edition for use in homework assignments.

*/

const nunjucks = require('nunjucks');
// The next line imports the prize.json file into JavaScript
// as a JavaScript object which contains arrays and more objects...
const prizesJSON = require('./prize.json');
const fs = require('fs'); // The file system module

// You will pick different topics and date ranges based on your
// interests and the contents of the prize.json file
let catDates = [{
        topic: "peace",
        start: 1990,
        end: 2017,
        title: "Peace",
        fname: "peace.html"
    },
    {
        topic: "medicine",
        start: 1912,
        end: 1969,
        title: "Medicine",
        fname: "medicine.html"
    },
    {
        topic: "literature",
        start: 1980,
        end: 2017,
        title: "Literature",
        fname: "literature.html"
    }];


nunjucks.configure({
    autoescape: true
});
nunjucks.configure('views', {
    autoescape: true
});


// Process prizes.json to get only information of interest
let prizeArray = prizesJSON.prizes;
let type = [];
for (let catDate of catDates) {

            
            let finalArray=prizeArray.filter((a,i,arr) =>{
                return (arr[i].category===catDate.topic) && (arr[i].year>=catDate.start) && (arr[i].year<=catDate.end);
                 

            });

           let finaldata=finalArray.map((a,i,arr)=> {
            return {yea:arr[i].year, lau:arr[i].laureates, cat:arr[i].category};
           });
           finaldata.sort(function sorting(y1,y2){
                if(y1.yea < y2.yea){
                    return -1;
                }
                else{
                    return 1;
                }
           });
          
            prizeInfo = {beg: catDate.start,
            topic: catDate.topic, end : catDate.end, catDates: catDates, data: finaldata};

            // const prizeInfo = catDates.filter(catDate.topic);
            // console.log(prizeInfo);
         
        // Create filtered versions of the prize array for rendering.
        // Recommend using JavaScript array methods like *filter*, etc...

        // Combine needed information for the template into a single
        // JavaScript object, suppose it is called prizeInfo and
        // pass it over to nunjucks
            let outString = nunjucks.render('prizes.njk', prizeInfo);
            
            // Write the file
            fs.writeFileSync('./output/' + catDate.fname, outString);
            console.log("Wrote file " + catDate.fname); // For debugging
    
}
