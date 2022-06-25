import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
    height: 200px;
    background-color: black;
    }    
`

const Title = styled.h3`
    color: white;
    margin-top: 0
    }    
`
const Children = styled.div`
  display: flex;
  flex-direction: column
`

class Section extends Component {
    render() {
        return (
            <SectionWrapper>
                <Title>{this.props.title}</Title>
                <Children>{this.props.children}</Children>
            </SectionWrapper>
        )
    };
}

export default Section;