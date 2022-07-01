import React, { Component } from "react";
import styled from "styled-components";
import InputSection from "../utils/Section";
import Input from "../utils/Input";
import Button from "../utils/Button";
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
                <InputSection title="Education">
                {Object.keys(inputItems).map((key) => {
                    const stateSection = 'education.' + key + ".";
                    
                    return (
                        <EducationSectionWrapper key={key}>
                            <Input
                            inputItems={inputItems[key]} 
                            stateSection={stateSection}
                            eHandler={this.props.eHandler}/>
                            <Button id={key} text="Delete" onClick={this.props.deleteSection} eHandlerType="education"/>
                        </EducationSectionWrapper>
                    )})}
                    
                    <Button text="Add" onClick={this.props.addSection} eHandlerType="education"/>
                </InputSection>
            </EducationWrapper>
           
        )
    };
}

export default Education;