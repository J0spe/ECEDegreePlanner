import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"

function ECE3274() {
    const [data, setData]  = useState('');

    const fetchClassObj = () => {
        axios.get('/courses').then((res) => {
            console.log(res);
            res.data.forEach(item => {
                if (item.number === "ECE 3274") {
                    console.log(item);
                    setData(item)
                }
            });
        }).catch(error => {
            console.log("error fetching data", error)
        })
    }

    useEffect(() => {
        fetchClassObj();
    },[]);

    return (
        <>   
            <div>
                This class describes {data.number} {data.name}:
            </div>
            <div className="classDes">
                {data.des}
            </div>
            <div className="classDes">
                {data.pre && data.pre.length ? 'Prereqs: ' + data.pre.join(', ') : 'Prereqs: None'}
            </div>
            <div className="classDes">
                {data.co && data.co.length ? 'Coreqs: ' + data.co.join(', ') : 'Coreqs: None'}
            </div>
            <div className="classDes">
                Minimum grade to pass this class: {data.minGrade}
            </div>
            <div className="classDes">
                {data.offering && data.offering.length ? 'Offering: ' + data.offering.join(', ') : 'Offering: No Semesters'}
            </div>        
        </>
    )

}
export default ECE3274;