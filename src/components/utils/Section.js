import React, { Component } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
    
    }    
`

const Title = styled.h3`
    margin-top: 0
`
const Children = styled.div`


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