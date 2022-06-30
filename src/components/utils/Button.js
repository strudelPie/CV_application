import React, { Component } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
    background-color: #f4511e;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;

    :hover {opacity: 1}
    }    
`

class Button extends Component {
    render() {
        return (
            <ButtonWrapper name={this.props.eHandlerType} id={this.props.id} onClick={this.props.onClick}>{this.props.text}</ButtonWrapper>
        )
    };
}

export default Button;