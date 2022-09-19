import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';




function MajorSpecific() {

 	const { major } = useParams()
    const majorName = major



    useEffect( () => {
        fetchItems();
    }, []);

    const [MajorState, setMajor] = useState([]);



    // http://localhost:4000/degrees-minors/cpe?major=NAME
    const URLName = major.replace('-', '').toLowerCase() // BRAND URL NAME FOR URL
    // console.log(URLName) testing


   const fetchItems = async () => {
        const data = await fetch('/degrees-minors/cpe?major='+URLName);
        const items = await data.json();
        
        setMajor([...items])
       
    };



    return(
        <div>
        <h1>{majorName}</h1>
        {MajorState.map((element) => {
        	console.log(element)
          return (<div>
          			<ul>
          				<li>{element.courses.map((course)=>{
          					console.log(course)
          					return (
          						<div className='MajorCard'>
          						<h1 className='CourseName'>{course.name}</h1>
          						<p>{course.des}</p>
          						<h3 className="PreReq"> PRE Requisites</h3>
          						<h4>{course.preq === "" ? "No PRErequisite": course.preq }</h4>
          						<h3 className="PreReq"> CO Requisites</h3>
          						<h4>{course.coreq === "" ? "No COrequisite": course.coreq }</h4>
          						</div>
          						)
          				})}</li>
          				<li><p>The video can be found here <a href=" {element.video}" > {element.video}</a></p></li>

                    <li><p>The checksheet can be found here <a href='/{element.checksheet}' alt='Link to checksheet'  target='_blank'>{element.checksheet}</a></p></li>
                     </ul>
          		</div>)
        })}
        </div>

    );
}

export default MajorSpecific;