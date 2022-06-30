import React, { Component } from "react";
import styled from "styled-components";
import InputSection from "../utils/Section";
import Input from "../utils/Input";

const PersonalInfoWrapper = styled.div`

`

const TextArea = styled.textarea.attrs({rows: "4"})`
    width: 100%;
    height: 100%; 
    box-sizing: border-box;
    }    
`

class PersonalInfo extends Component {    
    render() {
        const inputItems = this.props.cv.pInfo;

        const filteredItems = Object.entries(inputItems)
            .filter(([key,value]) => !key.includes('description'))
            .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
            }, {});

        const stateSection = 'pInfo.'
        const txtAreaName = stateSection.concat("description");
       
        return (
            <PersonalInfoWrapper>
                <InputSection title="Personal Details">
                <Input inputItems={filteredItems} 
                stateSection={stateSection}
                eHandler={this.props.eHandler}/>
                
                <TextArea name={txtAreaName} placeholder="Description" onChange={this.props.eHandler} value={inputItems["description"].value}/>       
                   
                </InputSection>
            </PersonalInfoWrapper>   
        )
    };
}

export default PersonalInfo;