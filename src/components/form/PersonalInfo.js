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
}`

const FileInputWrapper = styled.input`
    display: none;
`;

const Label = styled.label`    
    background-color: #4C516D;
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    font-size: 16px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 0.5rem;
    white-space: nowrap;

    :hover {opacity: 1}
    }  
}`

class PersonalInfo extends Component {    
    render() {
        const inputItems = this.props.cv.pInfo;
        
        const filteredItems = Object.entries(inputItems)
            .filter(([key,value]) => !key.includes('description'))
            .filter(([key,value]) => !key.includes('photo'))
            .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
            }, {});

        const stateSection = 'pInfo.'
        const txtAreaName = stateSection.concat("description");
        const photoName = stateSection.concat("photo");    
       
        return (
            <PersonalInfoWrapper>
                <Section title="Personal Details">
                    <Input type="text" inputItems={filteredItems} 
                    stateSection={stateSection}
                    eHandler={this.props.eHandler}/>
                    
                    <TextArea name={txtAreaName} placeholder="Description" onChange={this.props.eHandler} value={inputItems["description"].value}/> 

                    <Label>
                        <FileInputWrapper type="file" onChange={this.props.addPhoto} name={photoName} />
                        Upload Photo
                    </Label>
                   
                </Section>
            </PersonalInfoWrapper>   
        )
    };
}

export default PersonalInfo;