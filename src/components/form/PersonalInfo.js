import React, { Component } from "react";
import styled from "styled-components";
import Section from "../utils/Section";
import Input from "../utils/Input";

const PersonalInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TextArea = styled.textarea.attrs({rows: "4"})`    
    box-sizing: border-box;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: white;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 0.5rem;    
    margin-top: 0.5rem;
    resize: vertical;

    &:focus {
        border: 1px solid #aaa;
    }
}   
      
`

class PersonalInfo extends Component {    
    render() {
        const inputItems = this.props.cv.pInfo;

        const filteredItems = Object.entries(inputItems)
            .filter(([key,value]) => !key.includes('description' || 'photo'))
            .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
            }, {});

        const stateSection = 'pInfo.'
        const txtAreaName = stateSection.concat("description");
       
        return (
            <PersonalInfoWrapper>
                <Section title="Personal Details">
                    <Input inputItems={filteredItems} 
                    stateSection={stateSection}
                    eHandler={this.props.eHandler}/>
                    
                    <TextArea name={txtAreaName} placeholder="Description" onChange={this.props.eHandler} value={inputItems["description"].value}/>       
                </Section>
            </PersonalInfoWrapper>   
        )
    };
}

export default PersonalInfo;