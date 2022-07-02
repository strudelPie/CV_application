import React, { Component } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8rem;

    @media (max-width: 1600px) {
        justify-content: center;
        margin: 0;
    }

`
const HeaderWrapper = styled.div`
    display: flex;
    color: #eee;
    font-size: 1.5rem;
    margin-left: 6rem;
        
    @media (max-width: 1600px) {
        
        margin: 0;
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