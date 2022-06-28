import React, { Component } from "react";
import styled from "styled-components";
import Section from "../utils/Section";
import Input from "../utils/Input";
import uniqid from "uniqid";
import TextArea from "../utils/TextArea";

const PersonalInfoWrapper = styled.div`
    
`

class PersonalInfo extends Component {    
    render() {
        const inputItems = this.props.cv.pInfo;
       
        return (
            <PersonalInfoWrapper>
                <Section title="Personal Details">
                {
                
                Object.keys(inputItems).map((item) => {
                    return (
                        <Input 
                        key={inputItems[item].id}
                        name={inputItems[item].name}
                        placeholder={inputItems[item].placeholder}
                        eHandler={this.props.eHandler}
                        value={inputItems[item].value}
                        stateKey={item}
                        />  
                    )
                })}
                <TextArea name="description" placeholder="Description" eHandler={this.props.eHandler} value={inputItems["description"].value}/>       
                   
                </Section>
            </PersonalInfoWrapper>   
        )
    };
}

export default PersonalInfo;