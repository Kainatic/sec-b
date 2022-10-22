const studentObj = {
    name: "Gangotri",
    isTall: false,
    height: 120,
    languages_spoken: ["English", "Hindi"],
    address: {
        city: "Guwahati",
        state: "Assam",
        country: "India"
    }
};

const studentObj2 = {
    name: "Gangotri",
    isTall: false,
    height: 180,
    languages_spoken: ["English", "Hindi"],
    address: {
        city: "Guwahati",
        state: "Assam",
        country: "India"
    }
};

const getHeightInFeet = (student) => {
    const height = student.height;
    const heightInFeet = height / 30;
    console.log(heightInFeet);
}

getHeightInFeet(studentObj);

// console.log(studentObj.address.city);