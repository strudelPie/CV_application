import React, { Component } from "react";
import styled from "styled-components";
import Section from "../utils/Section";

const SideBarWrapper = styled.div`
    background-color: #E8E8E8;
    padding: 1.5rem;
    dispay: flex;
    

`

 const Header = styled.h4`
    margin: 0;
    margin-bottom: 0.5rem;
 `

 const Detail = styled.div`
    margin-bottom: 2rem;
`

const Photo = styled.img`
    width: 100%;
    margin-bottom: 2rem;
`

class SideBar extends Component {
    render() {
        const { cv } = this.props;
        return ( 
            <SideBarWrapper>
                <Photo src={cv["pInfo"]["photo"].value}/>
                
                <Section title="Personal Details" border>
                
                    <Header>Address</Header>

                    <Detail>{cv["pInfo"]["address"].value}</Detail>

                    <Header>Email</Header>

                    <Detail>{cv["pInfo"]["email"].value}</Detail>

                    <Header>Telephone</Header>

                    <Detail>{cv["pInfo"]["telephone"].value}</Detail>
                </Section>
            </SideBarWrapper>
        )
    };
}

export default SideBar;