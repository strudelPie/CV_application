import React, { Component } from "react";
import styled from "styled-components";
import Section from "../utils/Section";
import Input from "../utils/Input";
import InputButton from "../utils/InputButton";
import uniqid from "uniqid";


const EducationWrapper = styled.div`
    
}`

const EducationSectionWrapper = styled.div`
    
}`

class Education extends Component {    
    render() {
        const inputItems = this.props.cv.education;

        return (
            <EducationWrapper>
                <Section title="Education">
                {Object.keys(inputItems).map((key) => {
                    const stateSection = 'education.' + key + ".";
                    
                    return (
                        <EducationSectionWrapper key={key}>
                            <Input
                            inputItems={inputItems[key]} 
                            stateSection={stateSection}
                            eHandler={this.props.eHandler}/>
                            <InputButton id={key} text="Delete" onClick={this.props.deleteSection} eHandlerType="education"/>
                        </EducationSectionWrapper>
                    )})}
                    
                    <InputButton text="Add" onClick={this.props.addSection} eHandlerType="education"/>
                </Section>
            </EducationWrapper>
           
        )
    };
}

export default Education;