import React, { Component } from "react";
import styled from "styled-components";
import Section from "../utils/Section";
import Input from "../utils/Input";

const PersonalInfoWrapper = styled.div`
    
`

const inputFields = ["First Name", "Last Name", "Title"];

class PersonalInfo extends Component {
    render() {
        return (
            <PersonalInfoWrapper>
                <Section title="Personal Details">
                   {inputFields.map((inputField) => {
                    return <Input placeholder={inputField}/>
                   })

                   }
                </Section>
            </PersonalInfoWrapper>
            
        )
    };
}

export default PersonalInfo;