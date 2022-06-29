import React, { Component } from "react";
import styled from "styled-components";
import Form from '../form/Form'
import Preview from '../preview/Preview'
import cv from "../utils/cvObj";
import expItem from "../utils/experienceObj";

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
    }
    
    updateObject(object, newValue, path){
        var stack = path.split('.');
      
        while(stack.length > 1){
          object = object[stack.shift()];
        }
      
        object[stack.shift()] = newValue;
    }

    handleInputChange(e) {
        const { name, value } = e.target
        
        const  currentState  = {...this.state};
        const path = "cv." + name + ".value";
        this.updateObject(currentState, value, path)

        this.setState({
            state: currentState
        });
    }

    handleAddSection(e) {
        const currentState = {...this.state.cv};
        // const filteredItems = Object.entries(currentState)
        //     .filter(([key,value]) => key.includes('experience'))
        //     .reduce((obj, [key, value]) => {
        //         obj[key] = value;
        //         return obj;
        //     }, {});

        
        this.setState({
            ...this.state.cv,
            experience: {
                ...this.state.experience,
                ...expItem
            },
        })
        console.log(this.state.cv)
    }

    render() {

        return (
            <Mainwrapper>
                <Form cv={this.state.cv} eHandler={this.handleInputChange}
                addSection={this.handleAddSection}/>
                <Preview cv={this.state.cv} />
            </Mainwrapper>
        )
    };
}

export default Main;