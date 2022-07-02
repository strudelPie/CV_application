import React, { Component } from "react";
import styled from "styled-components";

const EduItemWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    margin-bottom: 1rem;  
`

const Duration = styled.div`
    width: 25%;
    margin-right: 2rem;
`

const Details = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

class EduItm extends Component {
    render() {
        const { cv, id } = this.props;  
        const from = cv.education[id].from.value;
        const to = cv.education[id].to.value;
        const institution = cv.education[id].institution.value;
        const city = cv.education[id].city.value;
        const qualification = cv.education[id].qualification.value

        return ( 
           <EduItemWrapper>
                <Duration>{from} - {to}</Duration>
                <Details>
                    <div>{institution}</div>
                    <div>{qualification}, {city}</div>
                </Details>
           </EduItemWrapper>
        )
    };
}

export default EduItm;