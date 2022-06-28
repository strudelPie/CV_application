import React, { Component } from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
    background-color: #DEB887;
`
const Title = styled.h3`
    
`
 const Header = styled.h4`
 `

class Content extends Component {
    render() {
        const { cv } = this.props;
        return ( 
            <ContentWrapper>
                <Title>Description</Title>
                <p>{cv["pInfo"]["description"].value}</p>
                <Title>Experience</Title>
                <Title>Education</Title>
            </ContentWrapper>
        )
    };
}

export default Content;