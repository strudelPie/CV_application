import React, { Component } from "react";
import styled from "styled-components";
import Section from "../utils/Section";
import Input from "../utils/Input";
import uniqid from "uniqid";
import TextArea from "../utils/TextArea";

const PersonalInfoWrapper = styled.div`
    
`

const inputFields = [
    {tag: "firstName", placeholder: "First Name", id: uniqid()},
    {tag: "secondName", placeholder: "Surname", id: uniqid()},
    {tag: "title", placeholder: "Title", id: uniqid()},
    {tag: "address", placeholder: "Address", id: uniqid()},
    {tag: "email", placeholder: "Email", id: uniqid()},
    {tag: "telephone", placeholder: "Telephone", id: uniqid()},
]

class PersonalInfo extends Component {    
    render() {
        const cv = this.props.cv;
        console.log(cv.title)
        return (
            <PersonalInfoWrapper>
                <Section title="Personal Details">
                   {inputFields.map((inputField) => {
                    return <Input key={inputField.id} name= {inputField.tag} placeholder={inputField.placeholder} eHandler= {this.props.eHandler}
                    value={this.props.cv[inputField.tag]}
                    />
                   })}
                   <TextArea name="description" placeholder="Description" eHanlder={this.props.eHandler}
                   />
                   
                </Section>
            </PersonalInfoWrapper>   
        )
    };
}

export default PersonalInfo;