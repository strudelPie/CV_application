import React, { Component } from "react";
import styled from "styled-components";
import Section from "../utils/Section";
import Input from "../utils/Input";
import Button from "../utils/Button";
import expItem from "../utils/experienceObj";

const ExperienceWrapper = styled.div`
    
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
                        <Input
                        key={key}
                        inputItems={inputItems[key]} 
                        stateSection={stateSection}
                        eHandler={this.props.eHandler}/>
                    )})}
                    
                    <Button text="Add" onClick={this.props.addSection}/>
                </Section>
            </ExperienceWrapper>
           
        )
    };
}

export default Experience;