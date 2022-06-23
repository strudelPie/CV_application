import React, { Component } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: #333;
`
const HeaderWrapper = styled.div`
    font-family: 'Nunito', cursive;
    display: flex;
    align-items: center;
    max-width: 1800px;
    max-height: 100px;
    padding: 3rem 8rem;
    margin: 0 auto;
    color: #eee;
    font-size: 2.2rem;
    @media (max-width: 1600px) {
        justify-content: center;
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