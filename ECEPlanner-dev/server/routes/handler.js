require('dotenv').config();
const fs = require("fs");
const express = require('express');
const { parse } = require('path');
const router = express.Router();


/*
    - gets the homepage information. 
    - /homepage
    Contains announcements, notes, and updates. Announcements and notes contain expiration dates for them to disappear from the homepage and a description.
    Updates contains the description.
*/
router.get('/', (req, res) => {
    str = [
        {
            "announcements":
            [
                {"expire": `03/05/2022`, "des":  `IEEE is having Fun Friday where free coffee and donuts, and will be distributed in Whittemore Hall on March 4th!`},
                {"expire": `02/26/2022`, "des":  `Jayesh Kumar Motwani, technical seminar speaker, talking about the modeling of Power Electronic Systems.`}
            ],
            "notes":
            [
                {"expire": `05/15/2022`, "des":  `Graduation Commencement Ceremony for the ECE department will be held on May 14th at 3:30PM in Lane Stadium.`},
                {"expire": `02/29/2022`, "des":  `Last day to drop classes without penalty and/or change class grade option to P/F is February 28th.`}
            ],
            "updates":
            [
                {"des": `ECE 4560 Prerequiste change: ECE 4614 or CS3214 or ECE 3564`},
                {"des": `ECE 4614 Telecommunications name change: ECE 3564 Introduction to Computer Networking`}
            ]
            
        }];

    res.send(JSON.stringify(str));

});

/*
    - gets the contact information of ECE advisors 
    - /contact
    Contains advisors, frontdesk, and DCAdvisors. Advisors contains each advisor name, letters they assist, phone number, and email.
    Front desk and DC advisor contain the name, title, phone number, and email.
*/
router.get('/contact', (req, res) => {
    str = [
        {
            "advisors":
            [
                {"name": `Mary Brewer`, "letters":  `(A-D)`, "phone": `(540)231-4539`, "email": `taylorm@vt.edu`},
                {"name": `Nicole Gholston`, "letters":  `(E-K,R)`, "phone": `(540)231-3106`, "email": `nicole7@vt.edu`},
                {"name": `Kimberly Johnston`, "letters":  `(L-Q)`, "phone": `(540)231-8393`, "email": `kim4vt@vt.edu`},
                {"name": `Susan Broniak`, "letters":  `(S-Z)`, "phone": `(540)231-8219`, "email": `sbroniak@vt.edu`}
            ],
            "Frontdesk":
            [
                {"name": `Alicia Sutherland`, "title":  `ECE Student Services Front Desk Receptionist`, "phone": `(540)231-2163`, "email": `alicias@vt.edu`}
            ],
            "DCAdvisor":
            [
                {"name": `Roxanne Nersesian Paul`, "title":  `Academic Advisor for D.C. Metro Area`, "phone": `(703)538-8370`, "email": `roxpaul@vt.edu`}
            ],
            "Registrar":
            [
                {"name": `Jaime De La Ree`, "title":  `Associate Professor and Assistance Department Head`, "phone": `(540)231-6625`, "email": `jreelope@vt.edu`}
            ]
        }];

    res.send(JSON.stringify(str));

});

/*
    - gets questions and answers
    - /faq
    Contains common questions and answers about the ECE major
*/
router.get('/faq', (req, res) => {
    str = [
        {"question": `Where do I need to go in HokieSpa to Change my primary major?`, "answer":  `1. Log into HokieSpa\n2. Select "Change of Major Application (Undergraduate)" at the top of the menu.`, "link": `https://www.advising.vt.edu/images/pdfs/ChangeofMajor.pdf`},
        {"question": `When is the Change of Major Period?`, "answer":  `You may change your major during a set of dates at the end of fall, spring, and summer. You may find this information on the Office of the University Registrar’s website.`, "link": `https://advising.vt.edu/content/dam/advising_vt_edu/documents/ChangeofMajor.pdf`},
        {"question": `What majors are offered in Electrical Engineering and Computer Engineering`, "answer":  `Electrical: General, Communications & Networking, Controls,Robotics, & Autonomy, Energy & Power Electronic Systems, Micro-Nanosystems, Photonics, Radio Frequency & Microwave, Space Systems\nComputer: General, Chip-Scale Integration, Controls, Robotics, & Autonomy, Machine Learning, Networking & Cybersecurity, Software Systems`, "link": `https://ece.vt.edu/undergrad/curriculum.html`},
        {"question": `Where can I find out more about the requirements for each major?`, "answer":  `You may find the checksheets for each major on the Office of the University Registrar’s website.`, "link": `https://www.registrar.vt.edu/graduation-multi-brief/checksheets.html`},
        {"question": `I changed my major to Electrical Engineering (EE) when I was admitted to the ECE Department from General Engineering. If I do not choose an ECE major, will one be chosen for me?`, "answer":  `No, Students that do not chose an Electrical Engineering or Computer Engineering major, will graduate with the general EE or CPE degree.`, "link": `None`},
        {"question": `I want to major in two different majors within the same degree. For example, CPE-Machine Learning and CPE-Networking and CyberSecurity. Is this possible?`, "answer":  `No, you may not major in two different majors within the same degree.`, "link": `None`},
        {"question": `I want to major in an EE major and a CPE major. For example, EE-Communication & Networking and CPE-Machine Learning. Is this possible?`, "answer":  `No, you may not major in two different majors within the same degree.`, "link": `None`},
        {"question": `I am a current ECE student. Do I need to have a minimum GPA in order to change my major from the general EE or CPE to one of the ECE majors?`, "answer":  `No, if you are a current ECE student, you are not required to have a specific GPA in order to change your major.`, "link": `None`}
        ];

    res.send(JSON.stringify(str));

});

/*
    - gets the information for CPE majors. 
    - /degrees-minors/cpe 
    if no queries are present it defualts to responding with all the CPE majors with their descriptions 

    - /degrees-minors/cpe?major=`input-major` 
    if queries include major attribute. it responds with the `input-major`'s courses, checkseet link and video link
*/
router.get('/degrees-minors/cpe', (req, res) => {
    let parsedData;
    fs.readFile(process.env.PATH_TO_DATA + "majors.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        //Extract CPE Majors Data
        parsedData = JSON.parse(jsonString);
        var cpeData = parsedData.cpe;

        //check for major specific requests
        if(req.query.major)
        {
            var response =__FormulateMajorResp(cpeData,req.query.major);
            res.send(JSON.stringify(response));

        }
        else // if no major specific request is made responses with the catalogue of majors
        {
            var response =__FormulateJsonArrayResp(cpeData, ["name","des", "courses"]);
            res.send(JSON.stringify(response));
        }
        
    });  

});

/*
    - gets the information for EE majors. 
    - /degrees-minors/ee 
    if no queries are present it defualts to responding with all the ee majors with their descriptions 

    - /degrees-minors/ee?major=`input-major` 
    if queries include major attribute. it responds with the `input-major`'s courses, checkseet link and video link
*/
router.get('/degrees-minors/EE', (req, res) => {

    let parsedData;
    fs.readFile(process.env.PATH_TO_DATA + "majors.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        //Extract EE Majors Data
        parsedData = JSON.parse(jsonString);
        var eeData = parsedData.ee;

        //check for major specific requests
        if(req.query.major)
        {
            var response =__FormulateMajorResp(eeData, req.query.major);
            res.send(JSON.stringify(response));

        }
        else
        {
            var response =__FormulateJsonArrayResp(eeData, ["name","des"]);
            res.send(JSON.stringify(response));
        }
        
    });  
});

router.get('/courses', (req, res) => {

    
    
    fs.readFile(process.env.PATH_TO_DATA + "courses.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        let courses = JSON.parse(jsonString); // all course's data
        //checks if a certain course was requested 
        if(req.query.course)
        {
            res.send(JSON.stringify(courses[req.query.course]));
            return;
        }
        var response =__FormulateJsonArrayResp(courses, ["number","name", "des", "pre", "co", "minGrade", "offering"]);
        res.send(JSON.stringify(response));
        
    });  
});

router.get('/coursestest', (req, res) => {
        fs.readFile(process.env.PATH_TO_DATA + "courses.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        let courses = JSON.parse(jsonString); // all course's data
        //checks if a certain course was requested 
        if(req.query.course)
        {
            res.send(JSON.stringify(courses[req.query.course]));
            return;
        }
        var response =__FormulateJsonArrayResp(courses, ["number","name", "des", "pre", "co", "minGrade", "offering"]);
        res.send(JSON.stringify(response));
        
    });  
});


/**
 * Takes in a json object, iterates over it's keys extracting 
 * the inputed args and appends them to an array entry.
 * Uses: used for general calls that return list of info ex: /courses, /degrees-minor/cpe,/degrees-minors/ee
 * @param {*} jsonData json object with subobjects who's data will be extracted
 * @param {*} args sub entries to be extracted 
 * @returns returns an array of json objects, with each object
 * having args list
 * [{jsonData[0][args[0]], jsonData[0][args[1]], ....}, .....]
 */
function __FormulateJsonArrayResp(jsonData, args)
{
    let temp = {}; 
    let resp = [];
    //iterates over subobjects in jsonData
    for(let key in jsonData)
    {
        
        
        //iterates over args to be extracted from each subobject
        for(let arg of args)
        {
            
            temp[arg] = jsonData[key][arg] // sets temp[arg] to the value of that arg in the subobject
        }
        resp.push(Object.assign({}, temp));
        
    
    }
    
    return resp;
}

/**
 * The function sturcutres the response for major specific data by extracting courses infromation from the courses catologue and population the major's data
 * 
 * 
 * @param {*} jsonData major specific data extracted from majors.json
 * @param {*} major major name requested
 * @returns response to major specific request 
 */
function __FormulateMajorResp(jsonData, major)
{
   //holds arrays of objects. Eac array is a semester and each object is a class
    var majorCoursesDet= [];

    var majorData = jsonData[major];
    
    //reads courses files
    let courses = fs.readFileSync(process.env.PATH_TO_DATA + "courses.json", "utf8");
    courses = JSON.parse(courses)
    //iterates over semesters in a major
    for(const semester of majorData["courses"])
    {
        
        var temp = [];
        //iterates over courses in the semester.
        for(const course of semester)
        {
            
            temp.push(courses[course]);
            
        }
        majorCoursesDet.push(temp);
        

    }
    majorData["courses"] = majorCoursesDet;
    return majorData;
}
module.exports = router;