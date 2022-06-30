import React, { Component } from "react";
import styled from "styled-components";
import Section from "../utils/Section";
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
                <Section title="Experience">
                {Object.entries(inputItems).map(([key, item]) => {
                    const stateSection = 'experience.' + key + ".";
                    
                    return (
                        <ExperienceSectionWrapper key={uniqid()}>
                            <Input
                            key={key}
                            inputItems={inputItems[key]} 
                            stateSection={stateSection}
                            eHandler={this.props.eHandler}/>
                            <Button id={key} text="Delete" onClick={this.props.deleteSection}/>
                        </ExperienceSectionWrapper>
                    )})}
                    
                    <Button text="Add" onClick={this.props.addSection}/>
                </Section>
            </ExperienceWrapper>
           
        )
    };
}

export default Experience;