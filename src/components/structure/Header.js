import React, { Component } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: #282c34;
`
const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    color: #eee;
    font-size: 1.5rem;
    margin-left: 100px;
    @media (max-width: 1600px) {
        justify-content: center;
        margin-left: 0;
    }    
`

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <HeaderWrapper>
                    <h1>CV CREATOR</h1>
                </HeaderWrapper>
            </HeaderContainer>
        )
    };
}

export default Header;