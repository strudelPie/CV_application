import React, { Component } from "react";
import styled from "styled-components";
import ExpItem from "./ExpItem";
import EduItm from "./EduItm";
import Section from "../utils/Section";
import uniqid from "uniqid";


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
                <Section title="Experience">
                    {Object.keys(cv.experience).map((key) => {
                            return(
                            <ExpItem key={key} id={key} cv={cv}
                            />
                            )
                        })}
                </Section>
                <Section title="Education">
                    {Object.keys(cv.education).map((key) => {
                            return(
                            <EduItm key={key} id={key} cv={cv}
                            />
                            )
                        })}
                </Section>
                
            </ContentWrapper>
        )
    };
}

export default Content;