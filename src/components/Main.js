import React, { Component } from "react";
import styled from "styled-components";
import Form from './form/Form'
import Preview from './preview/Preview'
import cv from "./utils/cvObj";
import { createExpItm } from "./utils/experienceObj";
import uniqid from "uniqid";
import { createEduItm } from "./utils/educationObj";
import exampleCV from "./utils/exampleCvObj";
import { useReactToPrint } from "react-to-print";

const Mainwrapper = styled.main`
    background-color: #F0F8FF;
    display: flex;
   
    justify-content: space-evenly;
    padding: 3rem 5rem;
    gap: 3rem;

    @media (max-width: 1600px) {
        flex-direction: column;
        align-items: center;
      }
}`

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cv
        };

        this.printRef = React.createRef();

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleAddSection = this.handleAddSection.bind(this);

        this.handleDeleteSection = this.handleDeleteSection.bind(this);

        this.generateExample = this.generateExample.bind(this);

        this.reset = this.reset.bind(this);
    }
    
    updateNestedState(object, newValue, path){
        var stack = path.split('.');
      
        while(stack.length > 1){
          object = object[stack.shift()];
        }
      
        object[stack.shift()] = newValue;
    }

    handleInputChange(e) {
        const { name, value } = e.target
        
        const  currentState  = {...this.state.cv};
        const path = name + ".value";
        this.updateNestedState(currentState, value, path)

        this.setState({
            cv: currentState },
        );
    }

    handleAddSection(e) {
        const { name } = e.target
        const currentState = {...this.state.cv};

        const importItem = (name === "experience") ? createExpItm() : createEduItm();

        const newState = {
            ...currentState,
            [name]: {
                ...currentState[name], 
                [uniqid()] : importItem
            }
        }
        this.setState({
            cv: newState 
        });
    }

    handleDeleteSection(e) {
        const { id, name } = e.target
        const currentState = {...this.state.cv};

        const { [id]: _, ...restOfObjSection } = currentState[name];
        const newState = {
            ...currentState,
            [name]: { ...restOfObjSection }
        };
        
        this.setState({
            cv: newState
        });
    }

    generateExample() {
        const newState = exampleCV;

        this.setState({
            cv: newState,
        });
    }

    reset() {
        this.setState({
            cv
        });
    }

    render() {
        const printContent = this.printRef.current;
        
        return (
            <Mainwrapper>
                <Form cv={this.state.cv} eHandler={this.handleInputChange}
                addSection={this.handleAddSection} deleteSection={this.handleDeleteSection} genExample={this.generateExample}
                reset={this.reset} print={this.printRef}/>
                <Preview cv={this.state.cv} ref={el => (this.printRef = el)}/>
            </Mainwrapper>
        )
    };
}

export default Main;