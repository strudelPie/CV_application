import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`

    }    
`

class Header extends Component {
    render() {
        const { cv } = this.props;
        return (
            <HeaderWrapper>
                <h1> {cv.firstName}</h1>
            </HeaderWrapper>
        )
    };
}

export default Header;