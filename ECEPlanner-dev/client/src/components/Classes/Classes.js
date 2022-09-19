import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

function Classes() {

    useEffect(() => {
        fetchClassObj();
    },[]);

    const [freshman, setFreshman] = useState([]);
    const [sophomore, setSophomore] = useState([]);
    const [junior, setJunior] = useState([]);
    const [senior, setSenior] = useState([]);

    const fetchClassObj = () => {
        axios.get('/courses').then((res) => {
            let freshmanTemp = [];
            let sophomoreTemp = [];
            let juniorTemp = [];
            let seniorTemp = [];
            res.data.forEach(item => {
                if (item.number.includes('ECE 1')) {
                    freshmanTemp.push(item);
                }
                else if (item.number.includes('ECE 2')) {
                    sophomoreTemp.push(item);
                }
                else if (item.number.includes('ECE 3')) {
                    juniorTemp.push(item);
                }
                else if (item.number.includes('ECE 4')) {
                    seniorTemp.push(item);
                }
            });
            setFreshman(freshmanTemp); 
            setSophomore(sophomoreTemp);
            setJunior(juniorTemp);
            setSenior(seniorTemp);
        }).catch(error => {
            console.log("Error Fetching Data", error)
        })
    }

    return (
        <>   
            <section>
                <div class="float-container">
                    <div class="float-child2">
                        <div className="classDes">
                            1000 level classes
                        </div>
                        <div class="float-child">
                            {freshman ? 
                                freshman.map(freshman => {
                                return(      
                                <div className="class-box">
                                    <a href={'/classes/' + freshman.number.replace(/ /g,'')}>{freshman.number} {freshman.name}</a>
                                </div>
                            )
                        }) : <h3>No data yet</h3> }
                    </div>
                    </div>
                    <div class="float-child2">
                        <div className="classDes">
                            2000 level classes
                        </div>
                        <div class="float-child">
                        {sophomore ? 
                            sophomore.map(sophomore => {
                            return(      
                            <div className="class-box">
                                <a href={'/classes/' + sophomore.number.replace(/ /g,'')}>{sophomore.number} {sophomore.name}</a>
                            </div>
                        )
                        }) : <h3>No data yet</h3> }
                    </div>
                    </div>  
                    <div class="float-child2">
                        <div className="classDes">
                            3000 level classes
                        </div>
                        <div class="float-child">
                        {junior ? 
                            junior.map(junior => {
                            return(      
                            <div className="class-box">
                                <a href={'/classes/' + junior.number.replace(/ /g,'')}>{junior.number} {junior.name}</a>
                            </div>
                        )
                        }) : <h3>No data yet</h3> }
                    </div>
                    </div> 
                    <div class="float-child2">
                        <div className="classDes">
                            4000 level classes
                        </div>
                        <div class="float-child">
                        {senior ? 
                            senior.map(senior => {
                            return(      
                            <div className="class-box">
                                <a href={'/classes/' + senior.number.replace(/ /g,'')}>{senior.number} {senior.name}</a>
                            </div>
                        )
                        }) : <h3>No data yet</h3> }
                    </div>
                    </div> 
                </div>
            </section>
        </>
    )
}

export default Classes

// Better code, don't know how to incorporate it
// https://stackoverflow.com/questions/71729699/data-disappears-on-refresh-but-loads-when-modifying-code-in-react-web-app

// import {React, ReactDOM } from 'react';
// import { useState, useEffect } from "react";
// import axios from "axios"

// // example data
// const data = {
//     ece1004: {
//       number: "ECE 1004",
//       name: "Introduction to ECE Concepts",
//       des: "Introduction to topics that span the field of electrical and computer engineering (ECE). Content presented through the lens of application with accompanying hands-on exercises. Basics of circuits, op-amps, power supplies, computer logic, system decomposition, and coding. Modeling and application of engineering professionalism. Exploration of ECE in society.",
//       pre: [["ENGE 1215", "ECE 1414"]],
//       co: [],
//       minGrade: "C",
//       offering: ["Fall", "Spring", "Summer"],
//     },
//     ece2024: {
//       number: "ECE 2024",
//       name: "Circuits and Devices",
//       des: "Analysis and design of passive and active circuits under Direct Current (DC), Alternating Current (AC), and switched excitation. Linear circuit analysis techniques for various circuit topologies. Expressing the transient response of first- and second-order linear circuits using time-domain methods. Calculating the AC steady-state response of linear circuits using phasors and immittances. Characterizing the frequency response of linear circuits. Determining operating point and small signal response of non-linear circuits containing diodes and bipolar transistors. Projects demonstrating circuit design processes adhering to professional practices.",
//       pre: ["ECE 1004", ["MATH 2114", "MATH 2114H", "MATH 2405H"]],
//       co: ["ECE 2514", "ECE 2514", "ECE 2544", "MATH 2214", "PHYS 2306"],
//       minGrade: "C",
//       offering: ["Fall", "Spring"],
//     },
//     ece2214: {
//       number: "ECE 2214",
//       name: "Physical Electronics",
//       des: "Fundamentals of electrostatics and magnetostatics, transmission lines, impedance matching networks, electromagnetic (EM) waves, and basic operating principles of diodes and metal-oxide semiconductor field-effect transistors (MOSFETs). Designing MOSFET biasing, and single-ended and differential amplifier circuits. Basic operating principles of complementary metal-oxide semiconductor (CMOS) device and its application as a digital inverter. Electronic circuit design adhering to professional and ethical practices.",
//       pre: ["ECE 2024"],
//       co: [],
//       minGrade: "C",
//       offering: ["Fall", "Spring", "Summer"],
//     },
//     ece2514: {
//       number: "ECE 2514",
//       name: "Computational Engineering",
//       des: "Software development processes for electrical and computer engineering applications. Modeling, simulation, data analysis, and visualization. Computing abstractions and the use of application programming interfaces. Software design and implementation using a procedural, class-based language. Integrated code development and testing. Team-based development of autonomous system applications reinforcing course topics.",
//       pre: ["ECE 1004"],
//       co: ["ECE 2024", "ECE 2544"],
//       minGrade: "C",
//       offering: ["Fall", "Spring"],
//     },
// };
  
// function Classes() {
//     const getData = () => {
//         axios.get('/courses').then((res) => {
           
//         }).catch(error => {
//             console.log("Error Fetching Data", error)
//         })
//     }

//     useEffect(() => {
//       fetchClassObj();
//     }, []);
  
//     // this object will contain one array for each year
//     const [classes, setClasses] = useState({});
  
//     const fetchClassObj = () => {
//       // immitate network delay
//       setTimeout(() => {
//         // get values of the object in an array
//         // now assign each class to the year he is in using reduce()
//         const classMapping = [...Object.values(data)].reduce(
//           (allClasses, curClass) => {
//             // use substring to get the year from the string and then use the year to get the appropriate array in the object
//             allClasses[curClass.number.substring(4, 5)].push(curClass);
//             return allClasses;
//           },
//           // initial value: years with empty array; use the year as a key here (could be something different like the whole class name as well)
//           { 1: [], 2: [], 3: [], 4: [] }
//         );
//         // now we only need to update one state
//         // as you always update all the states together this makes more sense than having them in 4 different states
//         setClasses(classMapping);
//       }, 2000);
//     };
  
//     return (
//       <section>
//         <div class="float-container">
//           {Object.entries(classes).map(([year, classes]) => (
//             <LevelClasses level={year + "000"} classes={classes}></LevelClasses>
//           ))}
//         </div>
//       </section>
//     );
// }
  
// function LevelClasses({ level, classes }) {
//     return (
//       <div class="float-child2">
//         <div className="classDes">{`${level} level classes`}</div>
//         <div class="float-child">
//           {classes.length !== 0 ? (
//             classes.map((curClass) => (
//               <div className="class-box">
//                 <a href={"/classes/" + curClass.number.replace(/ /g, "")}>
//                   {curClass.number} {curClass.name}
//                 </a>
//               </div>
//             ))
//           ) : (
//             <div>No data yet</div>
//           )}
//         </div>
//       </div>
//     );
// }
  
// ReactDOM.render(<Classes />, document.getElementById("root"));

// export default Classes
