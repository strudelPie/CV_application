import React, { Component } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
    background-color: #4C516D;
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    font-size: 16px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 0.5rem;

    :hover {opacity: 1}
    }    
`

class InputButton extends Component {
    render() {
        return (
            <ButtonWrapper name={this.props.eHandlerType} id={this.props.id} onClick={this.props.onClick}>{this.props.text}</ButtonWrapper>
        )
    };
}

export default InputButton;