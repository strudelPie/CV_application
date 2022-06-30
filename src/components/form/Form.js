import React, { Component } from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";


const FormWrapper = styled.div`
    background-color: #E0E0E0;
    width: 100%;
    border-color: #7FFFD4;
}`

class Form extends Component {    
    render() {
        return (
            <FormWrapper>
                <PersonalInfo cv={this.props.cv} eHandler={this.props.eHandler}/>
                <Experience cv={this.props.cv} eHandler={this.props.eHandler} addSection={this.props.addSection} deleteSection={this.props.deleteSection}/>
                <Education cv={this.props.cv} eHandler={this.props.eHandler} addSection={this.props.addSection} deleteSection={this.props.deleteSection}/>

            </FormWrapper>
        )
    };
}

export default Form;