import React, { Component } from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
    height: 50px;
    background-color: white;
    }    
`

class Input extends Component {
    render() {
        return (
            <InputWrapper 
                type="text"
                placeholder={this.props.placeholder}
                name={this.props.name}
                onChange={this.props.eHandler}
                value={this.props.value}
            />   
            
        )
    };
}

export default Input;