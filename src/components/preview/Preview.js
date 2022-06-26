import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";

const PreviewWrapper = styled.div`
    background-color: #F5F5DC;
    height: 500px;
    width: 100%;
}`


class Preview extends Component {
    render() {
        return (
            <PreviewWrapper>
                <Header cv={this.props.cv}/>
            </PreviewWrapper>
        )
    };
}

export default Preview;