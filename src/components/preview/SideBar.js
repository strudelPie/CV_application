import React, { Component } from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
    background-color: #D2691E
`
const Title = styled.h3`
    
`
 const Header = styled.h4`
    
 `

class SideBar extends Component {
    render() {
        const { cv } = this.props;
        return ( 
            <SideBarWrapper>
                <Title>Personal Details</Title>
                <Header>Adress</Header>
                <p>{cv.address}</p>
                <Header>Email</Header>
                <p>{cv.email}</p>
                <Header>Telephone</Header>
                <p>{cv.telephone}</p>
            </SideBarWrapper>
        )
    };
}

export default SideBar;