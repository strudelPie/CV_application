import React, { Component } from "react";
import styled from "styled-components";
import Form from './form/Form'
import Preview from './preview/Preview'
import { createCVItm, cv } from "./utils/cvObj";
import { createExpItm } from "./utils/experienceObj";
import uniqid from "uniqid";
import { createEduItm } from "./utils/educationObj";
import exampleCV from "./utils/exampleCvObj";

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

        this.state = { cv };
        
        this.printRef = React.createRef();

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleAddSection = this.handleAddSection.bind(this);

        this.handleDeleteSection = this.handleDeleteSection.bind(this);

        this.generateExample = this.generateExample.bind(this);

        this.handleReset = this.handleReset.bind(this);

        this.handleAddPhoto = this.handleAddPhoto.bind(this);

    }
    
    updateNestedObj(object, newValue, path){
        var stack = path.split('.');
      
        while(stack.length > 1){
          object = object[stack.shift()];
        }
      
        object[stack.shift()] = newValue;
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        const path = name + ".value";
        
        this.setState(state => {
            const currentState = structuredClone(state.cv);
            
            this.updateNestedObj(currentState, value, path)

            return {
                ...state,
                cv: currentState,
            }
        });
    }

    handleAddSection(e) {
        const { name } = e.target

        this.setState(state => {
            const currentState = structuredClone(state.cv);

            const importItem = (name === "experience") ? createExpItm() : createEduItm();

            const newState = {
                ...currentState,
                [name]: {
                    ...currentState[name], 
                [uniqid()] : importItem
                }
            }
            return {
                ...state,
                cv: newState
            }
        });
    }

    handleDeleteSection(e) {
        const { id, name } = e.target

        this.setState(state => {
            const currentState = structuredClone(state.cv);

            const { [id]: _, ...restOfObjSection } = currentState[name];
            
            const newState = {
                ...currentState,
                [name]: { ...restOfObjSection }
            };
        
            return {
                ...state,
                cv:  newState
            }
        });
    }

    generateExample() {
        this.setState((state) => {
            return {
                ...state,
                cv: exampleCV,
            }
        }
            
    )}

    handleReset() {
        this.setState((state) => {
            return {
                ...state,
                cv: createCVItm(),
            }
        }
            
    )}
    

    handleAddPhoto(e) {
        const { name } = e.target

        this.setState(state => {
            const currentState = structuredClone(state.cv);
            const path = name + ".value";
            const file = e.target.files[0];
            const img = URL.createObjectURL(file);
            this.updateNestedObj(currentState, img, path)
            return {
                ...state,
                cv: currentState,
            }
        });

        
    }

    render() {        
        return (
            <Mainwrapper>
                <Form cv={this.state.cv} eHandler={this.handleInputChange}
                addSection={this.handleAddSection} deleteSection={this.handleDeleteSection} genExample={this.generateExample}
                handleReset={this.handleReset} print={this.printRef}  addPhoto={this.handleAddPhoto} />
                <Preview cv={this.state.cv} ref={el => (this.printRef = el)}/>
            </Mainwrapper>
        )
    };
}

export default Main;