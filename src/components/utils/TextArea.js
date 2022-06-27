import React, { Component } from "react";
import styled from "styled-components";

const TextAreaWrapper = styled.textarea`
    height: 50px;
    background-color: white;
    }    
`

class TextArea extends Component {
    render() {
        return (
            <TextAreaWrapper
                rows="4"
                placeholder={this.props.placeholder}
                name={this.props.name}
                onChange={this.props.eHandler}
            />   
            
        )
    };
}

export default TextArea;