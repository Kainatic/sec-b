// Sort the document based on CGPA
// Each elective will have only 50 seats
// Assign elective based on options
// Option 1 will have highest priority

const parser = require("simple-excel-to-json");
const json2xls = require("json2xls");
const fs = require("fs");

const assignmentDocument = parser.parseXls2Json("./Assignment.xlsx");

const sortedDocument = assignmentDocument[0].sort(function(a, b) {
    return b.CGPA - a.CGPA;
});

let countFWT = 0,
    countITS = 0,
    countERP = 0,
    countUI = 0;

let isAssigned = false;

const assignedDocument = assignmentDocument[0].map((student) => {
    isAssigned = false;

    if (!isAssigned) {
        switch (student.OPTION_1) {
            case "Fundamentals of Web Technologies":
                if (countFWT < 50) {
                    student.ELECTIVE = "Fundamentals of Web Technologies";
                    countFWT++;
                    isAssigned = true;
                }
                break;

            case "Internet, Technology and Society":
                if (countITS < 50) {
                    student.ELECTIVE = "Internet, Technology and Society";
                    countITS++;
                    isAssigned = true;
                }
                break;

            case "Enterprise Resource Planning":
                if (countERP < 50) {
                    student.ELECTIVE = "Enterprise Resource Planning";
                    countERP++;
                    isAssigned = true;
                }
                break;

            case "User Interface/User Experience (UI/UX) Design":
                if (countUI < 50) {
                    student.ELECTIVE = "User Interface/User Experience (UI/UX) Design";
                    countUI++;
                    isAssigned = true;
                }
                break;
        }
    }

    if (!isAssigned) {
        switch (student.OPTION_2) {
            case "Fundamentals of Web Technologies":
                if (countFWT < 50) {
                    student.ELECTIVE = "Fundamentals of Web Technologies";
                    countFWT++;
                    isAssigned = true;
                }
                break;

            case "Internet, Technology and Society":
                if (countITS < 50) {
                    student.ELECTIVE = "Internet, Technology and Society";
                    countITS++;
                    isAssigned = true;
                }
                break;

            case "Enterprise Resource Planning":
                if (countERP < 50) {
                    student.ELECTIVE = "Enterprise Resource Planning";
                    countERP++;
                    isAssigned = true;
                }
                break;

            case "User Interface/User Experience (UI/UX) Design":
                if (countUI < 50) {
                    student.ELECTIVE = "User Interface/User Experience (UI/UX) Design";
                    countUI++;
                    isAssigned = true;
                }
                break;
        }
    }

    if (!isAssigned) {
        switch (student.OPTION_3) {
            case "Fundamentals of Web Technologies":
                if (countFWT < 50) {
                    student.ELECTIVE = "Fundamentals of Web Technologies";
                    countFWT++;
                    isAssigned = true;
                }
                break;

            case "Internet, Technology and Society":
                if (countITS < 50) {
                    student.ELECTIVE = "Internet, Technology and Society";
                    countITS++;
                    isAssigned = true;
                }
                break;

            case "Enterprise Resource Planning":
                if (countERP < 50) {
                    student.ELECTIVE = "Enterprise Resource Planning";
                    countERP++;
                    isAssigned = true;
                }
                break;

            case "User Interface/User Experience (UI/UX) Design":
                if (countUI < 50) {
                    student.ELECTIVE = "User Interface/User Experience (UI/UX) Design";
                    countUI++;
                    isAssigned = true;
                }
                break;
        }
    }

    if (!isAssigned) {
        switch (student.OPTION_4) {
            case "Fundamentals of Web Technologies":
                if (countFWT < 50) {
                    student.ELECTIVE = "Fundamentals of Web Technologies";
                    countFWT++;
                    isAssigned = true;
                }
                break;

            case "Internet, Technology and Society":
                if (countITS < 50) {
                    student.ELECTIVE = "Internet, Technology and Society";
                    countITS++;
                    isAssigned = true;
                }
                break;

            case "Enterprise Resource Planning":
                if (countERP < 50) {
                    student.ELECTIVE = "Enterprise Resource Planning";
                    countERP++;
                    isAssigned = true;
                }
                break;

            case "User Interface/User Experience (UI/UX) Design":
                if (countUI < 50) {
                    student.ELECTIVE = "User Interface/User Experience (UI/UX) Design";
                    countUI++;
                    isAssigned = true;
                }
                break;
        }
    }

    return student;
});

console.log(assignedDocument);

const assignedData = json2xls(assignedDocument);
fs.writeFileSync("Assigned.xlsx", assignedData, "binary");