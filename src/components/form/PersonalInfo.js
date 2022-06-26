import React, { Component } from "react";
import styled from "styled-components";
import Section from "../utils/Section";
import Input from "../utils/Input";
import uniqid from "uniqid";

const PersonalInfoWrapper = styled.div`
    
`

const inputFields = [
    {tag: "firstName", placeholder: "First Name", id: uniqid()},
    {tag: "secondtName", placeholder: "Last Name", id: uniqid()},
    {tag: "title", placeholder: "Title", id: uniqid()},
]


class PersonalInfo extends Component {    
    render() {
        return (
            <PersonalInfoWrapper>
                <Section title="Personal Details">
                   {inputFields.map((inputField) => {
                    return <Input key={inputField.id} name= {inputField.tag} placeholder={inputField.placeholder} eHandler= {this.props.eHandler}/>
                   })}
                </Section>
                <button onClick={this.props.eHandler}>Click Me!</button>
            </PersonalInfoWrapper>   
        )
    };
}

export default PersonalInfo;