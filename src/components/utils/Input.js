import React, { Component } from "react";
import styled from "styled-components";


const InputWrapper = styled.input`
    background-color: white;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: white;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 0.5rem;  

    &:focus {
        border: 1px solid #aaa;
      }
    }   
    
    display: ${props => props.file ?  `none` : "" };
`
const InputSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;  
    }    
`

class Input extends Component {
    render() {
        const inputItems = this.props.inputItems;
        const stateSection = this.props.stateSection;
        return (
            <InputSectionWrapper>
                { Object.entries(inputItems).map(([key, item]) => {
                    let path = stateSection.concat(key);
                    return (
                        <InputWrapper
                        type={this.props.type}
                        key={item.id}
                        name={path}
                        placeholder={item.placeholder}
                        onChange={this.props.eHandler}
                        value={item.value}
                        />  
                    )
                })}
            </InputSectionWrapper>
            
        )
    };
}

export default Input;