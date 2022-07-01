import React, { Component } from "react";
import styled from "styled-components";
import InputSection from "../utils/Section";
import Input from "../utils/Input";
import Button from "../utils/Button";
import uniqid from "uniqid";


const ExperienceWrapper = styled.div`
    
}`

const ExperienceSectionWrapper = styled.div`
    
}`

class Experience extends Component {    
    render() {
        const inputItems = this.props.cv.experience;

        return (
            <ExperienceWrapper>
                <InputSection title="Experience">
                {Object.keys(inputItems).map((key) => {
                    const stateSection = 'experience.' + key + ".";
                    
                    return (
                        <ExperienceSectionWrapper key={key}>
                            <Input
                            inputItems={inputItems[key]} 
                            stateSection={stateSection}
                            eHandler={this.props.eHandler}/>
                            <Button id={key} text="Delete" onClick={this.props.deleteSection} eHandlerType="experience"/>
                        </ExperienceSectionWrapper>
                    )})}
                    
                    <Button eHandlerType="experience" text="Add" onClick={this.props.addSection}/>
                </InputSection>
            </ExperienceWrapper>
           
        )
    };
}

export default Experience;