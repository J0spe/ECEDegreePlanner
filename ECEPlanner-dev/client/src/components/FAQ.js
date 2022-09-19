import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { FiPlus, FiMinus } from 'react-icons/fi';
import axios from "axios"

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: white;
`;

const Container = styled.div`
  position: absolute;
  top: 5%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #861f41;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #861f41;
  color: white;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  p {
    font-size: 2rem;
  }
`;

function FAQ () {

    const [data, setData]  = useState([]);
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
          //if clicked question is already active, then close it
          return setClicked(null);
        }
    
        setClicked(index);
    };

    const fetchClassObj = () => {
        axios.get('/faq').then((res) => {
            console.log(res);
            setData(res.data);
        }).catch(error => {
            console.log("Error Fetching Data", error)
        })
    }

    useEffect(() => {
        fetchClassObj()
    },[]);

    return (
        <>   
            <IconContext.Provider value={{ color: 'white', size: '25px' }}>
                <AccordionSection>
                    <Container>
                        {data.map((item, index) => {
                            return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </>
                        );
                    })}
                    </Container>
                </AccordionSection>
            </IconContext.Provider>
        </>
    )
}
export default FAQ;