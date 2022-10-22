const parser = require("simple-excel-to-json");
const json2xls = require("json2xls");
const fs = require("fs");

const ourExcelDocument = parser.parseXls2Json("./Example.xlsx");

// console.log(ourExcelDocument[0]);

const totalCGPA = ourExcelDocument[0].reduce((previousValue, currentValue) => {
    previousValue += currentValue.CGPA;
    // console.log(previousValue);
    return previousValue;
}, 0);

const averageCGPA = totalCGPA / ourExcelDocument[0].length;

const gradedDocument = ourExcelDocument[0].map((student) => {
    if (student.CGPA >= 9.5) {
        student.GRADE = "A+";
    } else if (student.CGPA < 9.5 && student.CGPA >= 9) {
        student.GRADE = "A";
    } else if (student.CGPA < 9 && student.CGPA >= 8.5) {
        student.GRADE = "B";
    } else if (student.CGPA < 8.5 && student.CGPA >= 8) {
        student.GRADE = "C";
    } else {
        student.GRADE = "D";
    }
    return student;
});

console.log(gradedDocument);

const gradedExcelData = json2xls(gradedDocument);
fs.writeFileSync("Graded.xlsx", gradedExcelData, "binary");

// ourExcelDocument[0].push({ CGPA: averageCGPA, NAME: "Average" });

// const xlsData = json2xls(ourExcelDocument[0]);

// A+ = 9.5, A = less than 9.5 and greater than 9
// B = less than 9 and greater than 8.5
// C = less than 8.5 and greater than 8
// D = less than 8

// fs.writeFileSync("Data.xlsx", xlsData, "binary");

// console.log(averageCGPA);