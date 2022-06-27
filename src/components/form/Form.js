import React, { Component } from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";


const FormWrapper = styled.div`
    background-color: #E0E0E0;
    height: 500px;
    width: 100%;
    border-color: #7FFFD4;
}`

class Form extends Component {    
    render() {
        return (
            <FormWrapper>
                <PersonalInfo cv={this.props.cv} eHandler={this.props.eHandler}/>
            </FormWrapper>
        )
    };
}

export default Form;