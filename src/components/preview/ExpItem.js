import React, { Component } from "react";
import styled from "styled-components";

const ExpItemWrapper = styled.div`
    display: flex;
    flex-direction: row;

    
    
`

const Duration = styled.div`
   width: 40%;
  
    
`

const Details = styled.div`
    display: flex row;
    justify-content: space-evenly;
    height: 100px;
    row-gap: 25px;
    
`

class ExpItem extends Component {
    render() {
        const { cv, id } = this.props;  
        const from = cv.experience[id].from.value;
        const to = cv.experience[id].to.value;
        const position = cv.experience[id].position.value;
        const organisation = cv.experience[id].organisation.value;
        const location = cv.experience[id].location.value

        return ( 
           <ExpItemWrapper>
                <Duration>{from} - {to}</Duration>
                <Details>
                    <div>{position}</div>
                    <div>{organisation} {location}</div>
                </Details>
           </ExpItemWrapper>
        )
    };
}

export default ExpItem;