const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('c:/Users/Keshav/Desktop/madhav/resunme/portfolio/public/Madhav Semwal Resume.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('c:/Users/Keshav/Desktop/madhav/resunme/portfolio/parsed_resume.txt', data.text);
    console.log("PDF parsed successfully.");
}).catch(function(err) {
    console.log("Error parsing PDF:", err);
});
