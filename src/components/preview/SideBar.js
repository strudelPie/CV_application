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
                <p>{cv["pInfo"]["address"].value}</p>
                <Header>Email</Header>
                <p>{cv["pInfo"]["email"].value}</p>
                <Header>Telephone</Header>
                <p>{cv["pInfo"]["telephone"].value}</p>
            </SideBarWrapper>
        )
    };
}

export default SideBar;