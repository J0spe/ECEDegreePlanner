import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"

function GeneralEE() {
    useEffect(() => {
        fetchClassObj();
    },[]);

    const [courseData, setCourses] = useState([]);
    const courses = ["ECE 1004", "ECE 2024", "ECE 2214", "ECE 2514", "ECE 2544", "ECE 2564", 
        "ECE 2714", "ECE 2804", "ECE 3004", "ECE 3074", "ECE 3105", "ECE 3106", "ECE 3204", "ECE 3274",
        "ECE 3304", "ECE 3354", "ECE 3614", "ECE 3704", "ECE 4805","ECE 4806"];

    const fetchClassObj = () => {
        axios.get('/courses').then((res) => {
            let coursesTemp = [];
            res.data.forEach(item => {
                if (courses.includes(item.number)) {
                    coursesTemp.push(item.des);
                }
            });
            setCourses(coursesTemp);
            console.log(courseData);    
        }).catch(error => {
            console.log("Error Fetching Data", error)
        })
    }

    return( 
        <>
        <div className="headers">
            <h1>College of Enginnering</h1>
        </div>
        <div className="headers">
            <h1>Bradley Department of Electrical and Computer Engineering</h1>
        </div>
        <div className="headers">
            Degree: Bachelor of Science in Electrical Engineering
        </div>
        <div className="headers">
            Major: Electrical Engineering
        </div>
        <div className="headers">
            <h1>For students entering under UG catalog 2021-2022</h1>
        </div>
        <div className="headers">
            <h1>Credits Required for Graduation: 132</h1>
        </div>
        <table>
                {/* Freshman Year */}
                <tr>
                    <td width="2%" className="gray">&nbsp;</td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                    <td width="2%" className="black">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="title">FALL SEMESTER FIRST YEAR</td>
                    <td width="2%">Credits</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="title">SPRING SEMESTER FIRST YEAR</td>
                    <td width="2%">Credits</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">CHEM 1035 General Chemistry Co: MATH 1025 or 1225</td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">ENGL 1106 First-Year Writing (C-) Pre: ENGL 1105</td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">CHEM 1045 General Chemistry Lab Co: CHEM 1035 </td>
                    <td width="2%">1</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">MATH 1226 Calculus of a Single Variable Pre: MATH 1225</td>
                    <td width="2%">4</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">ENGL 1105 First-Year Writing </td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">PHYS 2305 Foundations of Physics I Co: PHYS 2325 or MATH 1206 or MATH 1206H or MATH 1226 Pre: MATH 1205 or MATH 1205H or MATH 1225 or MATH 1206 or MATH 1206H or MATH 1226)</td>
                    <td width="2%">4</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">MATH 1225 Calculus of a Single Variable (C-) Pre: Math Ready</td>
                    <td width="2%">4</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">ENGE 1216 Foundations of Engineering (C-) Pre: ENGE 1215 </td>
                    <td width="2%">2</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">ENGE 1215 Foundations of Engineering (C-) </td>
                    <td width="2%">2</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="blue">
                        <a href="/classes/ECE1004" class="black" title={courseData[0]}> ECE 1004 Introduction to ECE Concepts (C) Pre: ENGE 1215 or ENGE 1414</a>
                    </td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">Concept 2 or 3 or 6a</td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%">MATH 2114 Introduction to Linear Algebra (C-) Pre: MATH 1226 or a grade of at least B in MATH 1225</td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="right">Total:</td>
                    <td width="2%">16</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="right">Total:</td>
                    <td width="2%">19</td>
                </tr>
                {/* Sophomore Year */}
                <tr>
                    <td width="2%" className="gray">&nbsp;</td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                    <td width="2%" className="black">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="title">FALL SEMESTER SECOND YEAR</td>
                    <td width="2%">Credits</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="title">SPRING SEMESTER SECOND YEAR</td>
                    <td width="2%">Credits</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">MATH 2214 Introduction to Differential Equations (C-) Pre: 1114 or 1114H or 2114 or 2114H), (1206 or 1226)</td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%">MATH 2204 Introduction to Multivariable Calculus Pre: MATH 1226 </td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%">PHYS 2306 Foundations of Physics I Pre: (MATH 1206 or MATH 1206H or MATH 1226), PHYS 2305 </td>
                    <td width="2%">4</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="blue">
                        <a href="/classes/ECE2214" class="black" title={courseData[2]}> ECE 2214 Physical Electronics (C) Pre: 2024</a>
                    </td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="green">
                        <a href="/classes/ECE2024" class="black" title={courseData[1]}> ECE 2024 Circuits and Devices (C) Pre: 1004, (MATH 2114 or MATH 2114H or MATH 2405H); Co: 2514, 2544, MATH 2214, PHYS 2306</a>
                    </td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="green">
                        <a href="/classes/ECE2564" class="black" title={courseData[5]}> ECE 2564 Embedded Systems (C) Pre: 2514, 2544</a>
                    </td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="green">
                        <a href="/classes/ECE2514" class="black" title={courseData[3]}>ECE 2514 Computational Engineering (C) Pre: 1004; Co: 2024, 2544</a>
                    </td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="blue">
                        <a href="/classes/ECE2714" class="black" title={courseData[6]}>ECE 2714 Signals and Systems(C) Pre: 2024, 2514, 2544; Co: 2564</a>
                    </td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="green">
                        <a href="/classes/ECE2544" class="black" title={courseData[4]}>ECE 2544 Fundamentals of Digital Systems (C) Pre: 1004, ENGL 1106 or ENGL 1204H; Co: 2024, 2514</a>
                    </td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="green">
                        <a href="/classes/ECE2804" class="black" title={courseData[7]}>ECE 2804 Integrated Design Project (C) Pre: 2024, 2514, 2544; Co: 2214, 2564, 2714</a>
                    </td>
                    <td width="2%">2</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">Concept 2 or 3 or 6a</td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="right">Total:</td>
                    <td width="2%">16</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="right">Total:</td>
                    <td width="2%">17</td>
                </tr>
                <tr>
                    <td width="2%">&nbsp;</td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                    <td width="2%" className="black"></td>
                    <td width="2%">&nbsp;</td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                </tr>
                {/* Junior Year */}
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="title">FALL SEMESTER THIRD YEAR</td>
                    <td width="2%">Credits</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="title">SPRING SEMESTER THIRD YEAR</td>
                    <td width="2%">Credits</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="green">
                        <a href="/classes/ECE3004" class="black" title={courseData[8]}>ECE 3004 AC Circuit Analysis (C-) Pre: 2704 or (2714,2804)</a>
                    </td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="blue">
                        <a href="/classes/ECE3106" class="black" title={courseData[11]}>ECE 3106 Electromagnetic Fields Pre: 3105</a>
                    </td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="green">
                        <a href="/classes/ECE3074" class="black" title={courseData[9]}>ECE 3074 AC Circuit Analysis Laboratory Pre: 2074 or 2804; Co: 3004</a>
                    </td>
                    <td width="2%">1</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="blue">
                        <a href="/classes/ECE3204" class="black" title={courseData[12]}>ECE 3204 Analog Electronics Pre (2204, 2704) or (2214,2714,2804)</a>
                    </td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="green">
                        <a href="/classes/ECE3105" class="black" title={courseData[10]}>ECE 3105 Electromagnetic Fields Pre: (2004 or (2214, 2804)), PHYS 2306, (MATH 2204 or MATH 2204H or MATH 2406H)</a>
                    </td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="blue">
                        <a href="/classes/ECE3274" class="black" title={courseData[13]}>ECE 3274 Electronic Circuits Laboratory II Pre: (2274 or 2804), 3074; Co: 3204</a>
                    </td>
                    <td width="2%">1</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="blue">
                        <a href="/classes/ECE3704" class="black" title={courseData[17]}>ECE 3704 Continuous & Discrete System Theory Pre: 2704 or (2714, 2804)</a>
                    </td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="blue">
                        <a href="/classes/ECE3304" class="black" title={courseData[14]}>ECE 3304 Introduction to Power Systems Pre: 3004</a>
                    </td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%">STAT 4714 Probability and Statistics for Electrical Engineers (C-) Pre: MATH 2224 or MATH 2204 or MATH 2204H </td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="blue">
                        <a href="/classes/ECE3354" class="black" title={courseData[15]}>ECE 3354 Electric Power Engineering Laboratory Co: 3304</a>
                    </td>
                    <td width="2%">1</td>
                </tr>
                <tr>
                    <td width="2%">&nbsp;</td>
                    <td width="20%" className="yellow">Pathways 2 or 3 or 6a</td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="blue">
                        <a href="/classes/ECE3614" class="black" title={courseData[16]}>ECE 3614 Introduction to Communications Systems Pre: (2704 or (2714, 2804)), STAT 4714</a>
                    </td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%">&nbsp;</td>
                    <td width="20%"></td>
                    <td width="2%"></td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">Pathways 2 or 3 or 6a</td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%">&nbsp;</td>
                    <td width="20%" className="right">Total:</td>
                    <td width="2%">16</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="right">Total:</td>
                    <td width="2%">17</td>
                </tr>
                {/* Senior Year */}
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="title">FALL SEMESTER FOURTH YEAR</td>
                    <td width="2%">Credits</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="title">SPRING SEMESTER FOURTH YEAR</td>
                    <td width="2%">Credits</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">
                        <a href="/classes/ECE4805" class="black" title={courseData[18]}>ECE 4805 Senior Design Project (C-) See timetable for prereqs</a>
                    </td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">
                        <a href="/classes/ECE4806" class="black" title={courseData[19]}>ECE 4806 Senior Design Project Pre: 4805</a>
                    </td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%">Secondary Focus Area course (see list)</td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%">Secondary Focus Area course (see list)</td>
                    <td width="2%">4</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%">Secondary Focus Area course (see list)</td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">Pathways 2 or 3 or 6a</td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%">Math Elective From List</td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="yellow">Pathways 7 or Free Elective (if Pathways 7 double counted)</td>
                    <td width="2%">3</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%">Free Elective</td>
                    <td width="2%">3</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%">Free Elective</td>
                    <td width="2%">4</td>
                </tr>
                <tr>
                    <td width="2%"></td>
                    <td width="20%" className="right">Total:</td>
                    <td width="2%">15</td>
                    <td width="2%" className="black"></td>
                    <td width="2%"></td>
                    <td width="20%" className="right">Total:</td>
                    <td width="2%">16</td>
                </tr>
                <tr>
                    <td width="2%">&nbsp;</td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                    <td width="2%" className="black"></td>
                    <td width="2%">&nbsp;</td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                </tr>
                <tr>
                    <td width="2%">&nbsp;</td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                    <td width="2%" className="black"></td>
                    <td width="2%">&nbsp;</td>
                    <td width="20%">&nbsp;</td>
                    <td width="2%">&nbsp;</td>
                </tr>
            </table>
        </>
    )
}
export default GeneralEE;