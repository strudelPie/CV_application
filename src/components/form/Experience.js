import React, { Component } from "react";
import styled from "styled-components";
import Section from "../utils/Section";
import Input from "../utils/Input";
import InputButton from "../utils/InputButton";

const ExperienceWrapper = styled.div`
    
}`

const ExperienceSectionWrapper = styled.div`
    
}`

class Experience extends Component {    
    render() {
        const inputItems = this.props.cv.experience;

        return (
            <ExperienceWrapper>
                <Section title="Experience">
                {Object.keys(inputItems).map((key) => {
                    const stateSection = 'experience.' + key + ".";
                    
                    return (
                        <ExperienceSectionWrapper key={key}>
                            <Input
                            inputItems={inputItems[key]} 
                            stateSection={stateSection}
                            eHandler={this.props.eHandler}/>
                            <InputButton id={key} text="Delete" onClick={this.props.deleteSection} eHandlerType="experience"/>
                        </ExperienceSectionWrapper>
                    )})}
                    
                    <InputButton eHandlerType="experience" text="Add" onClick={this.props.addSection}/>
                </Section>
            </ExperienceWrapper>
           
        )
    };
}

export default Experience;