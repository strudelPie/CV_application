import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
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
    white-space: nowrap;

    :hover {opacity: 1}
    }    
`

class MenuButton extends Component {
    render() {
        return (
            <Button onClick={this.props.onClick}>{this.props.text}</Button>
        )
    };
}

export default MenuButton;