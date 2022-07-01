import React, { Component } from "react";
import styled from "styled-components";

const EduItemWrapper = styled.div`
    
`

const Duration = styled.div`

`

const Details = styled.div`

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
                    <div>{qualification} {city}</div>
                </Details>
           </EduItemWrapper>
        )
    };
}

export default EduItm;