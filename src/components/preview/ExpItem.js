import React, { Component } from "react";
import styled from "styled-components";

const ExpItemWrapper = styled.div`
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
                    <div><b>{position}</b></div>
                    <div>{organisation}, {location}</div>
                </Details>
           </ExpItemWrapper>
        )
    };
}

export default ExpItem;