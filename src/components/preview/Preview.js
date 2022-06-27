import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import SideBar from "./SideBar";


const PreviewWrapper = styled.div`
    background-color: #F5F5DC;
    height: 500px;
    width: 100%;
`

const BodyWrapper = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    
`

class Preview extends Component {
    render() {
        const { cv } = this.props;
        return (
            <PreviewWrapper>
                <Header cv={cv}/>
                <BodyWrapper>
                    <Content cv={cv}/>
                    <SideBar cv={cv}/>
                </BodyWrapper>
            </PreviewWrapper>
        )
    };
}

export default Preview;