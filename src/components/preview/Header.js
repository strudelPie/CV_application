import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    background-color:#5F9EA0;
}`

const FullName = styled.h1`
    margin: 0;
   
}`

const JobTitle = styled.h3`
    margin: 0;
   
}`


class Header extends Component {
    render() {
        const { cv } = this.props;
        return (
            <HeaderWrapper>
                <FullName>{cv["pInfo"]["firstName"].value} {cv["pInfo"]["secondName"].value}</FullName>
                <JobTitle>{cv["pInfo"]["title"].value}</JobTitle>
            </HeaderWrapper>
        )
    };
}

export default Header;