import React, { useState, useRef } from "react";
import styled from "styled-components";
import Form from './form/Form'
import Preview from './preview/Preview'
import { createCVItm, cvObj } from "./utils/cvObj";
import { createExpItm } from "./utils/experienceObj";
import uniqid from "uniqid";
import { createEduItm } from "./utils/educationObj";
import exampleCV from "./utils/exampleCvObj";
import { useReactToPrint } from 'react-to-print';

const Mainwrapper = styled.main`
    background-color: ${props => props.theme.colors.main};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2rem 3rem;
    gap: 3rem;
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        max-width: 90%;
      }
}`;

const Main = () => {
    const [cv, setCV] = useState(cvObj)
    const printRef = useRef();

    function updateNestedObj(object, newValue, path) {
        var stack = path.split('.');
        while(stack.length > 1){
          object = object[stack.shift()];
        }
        object[stack.shift()] = newValue;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const path = name + ".value";
        setCV(state => {
            const currentState = structuredClone(state);
             updateNestedObj(currentState, value, path);
            return  currentState;
        });
    };

    const handleAddSection = (e) => {
        const { name } = e.target

        setCV(state => {
            const currentState = structuredClone(state);
            const importItem = (name === "experience") ? createExpItm() : createEduItm();
            const newState = {
                ...currentState,
                [name]: {
                    ...currentState[name], 
                [uniqid()] : importItem
                }
            }
            return  newState;
        });
    };

    const handleDeleteSection = (e) => {
        const { id, name } = e.target
        setCV(state => {
            const currentState = structuredClone(state);
            const { [id]: _, ...restOfObjSection } = currentState[name];
            const newState = {
                ...currentState,
                [name]: { ...restOfObjSection }
            };
            return newState;
        });
    };

    const generateExample = () => {setCV(exampleCV)};
            
    const handleReset = () => {setCV(createCVItm())};
    
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
      });
     // throws warning because react-to-print uses findDOMNode

    const handleAddPhoto = (e) => {
        const { name } = e.target
        setCV(state => {
            const currentState = structuredClone(state);
            const path = name + ".value";
            const file = e.target.files[0];
            const img = URL.createObjectURL(file);
            updateNestedObj(currentState, img, path)
            return  currentState;
        });
    }
        
    return (
        <Mainwrapper>
            <Form cv={cv} eHandler={handleInputChange}
            addSection={handleAddSection} deleteSection={handleDeleteSection} genExample={generateExample}
            handleReset={handleReset} print={handlePrint}  addPhoto={handleAddPhoto} />
            <Preview cv={cv} ref={printRef}/>
        </Mainwrapper>
    )
}

export default Main;