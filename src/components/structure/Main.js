import React, { Component } from "react";
import styled from "styled-components";
import Form from '../form/Form'
import Preview from '../preview/Preview'
import cv from "../utils/cvObj";
import { expItem, exId } from "../utils/experienceObj";
import uniqid from "uniqid";
import { edItem, edId } from "../utils/educationObj";

const Mainwrapper = styled.main`
    background-color: #00FFFF;
    min-height: 500px;
    display: flex;
    align-items: flex start;
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
        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleAddSection = this.handleAddSection.bind(this);

        this.handleDeleteSection = this.handleDeleteSection.bind(this);
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

        const newState = {
            ...currentState,
            [name]: {
                ...currentState[name], 
                [uniqid()] : ( name === "experience" ? expItem[exId] : edItem[edId])
            }
        }
        this.setState({
            cv: newState }, () =>
            console.log(this.state)
        );
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
            cv: newState }, () =>
            console.log(this.state)
        );
    }

    render() {

        return (
            <Mainwrapper>
                <Form cv={this.state.cv} eHandler={this.handleInputChange}
                addSection={this.handleAddSection} deleteSection={this.handleDeleteSection}/>
                <Preview cv={this.state.cv} />
            </Mainwrapper>
        )
    };
}

export default Main;