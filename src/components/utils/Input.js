import React, { Component } from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
    height: 50px;
    background-color: white;
    }    
`
const InputSectionWrapper = styled.div`
    height: 200px;
    background-color: white;
    display: flex;
    flex-direction: column
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
                        type="text"
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