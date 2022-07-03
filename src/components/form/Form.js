import React, { Component } from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import MenuButton from "../utils/MenuButton";
import ReactToPrint from 'react-to-print';
 // throws warning because react-to-print uses findDOMNode

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #E1EBEE;
    width: 210mm;
    gap: 1rem;
    padding: 1rem;
    box-sizing:border-box;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}`

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    height: 45%;
    gap: 1rem;
    max-height: 3rem;
    
}    
`

class Form extends Component {    
    render() {
        return (
            <FormWrapper>
                <Menu >
                    <MenuButton text="Display Example" onClick={this.props.genExample}/>
                    <MenuButton text="Reset" onClick={this.props.reset}/>
                    <ReactToPrint 
                        trigger={() => {
                            return <MenuButton text="Export PDF"/>
                          }}
                          content={() => this.props.print}
                    />
                </Menu>
                <PersonalInfo cv={this.props.cv} eHandler={this.props.eHandler} addPhoto={this.props.addPhoto} />
                <Experience cv={this.props.cv} eHandler={this.props.eHandler} addSection={this.props.addSection} deleteSection={this.props.deleteSection}/>
                <Education cv={this.props.cv} eHandler={this.props.eHandler} addSection={this.props.addSection} deleteSection={this.props.deleteSection}/>

            </FormWrapper>
        )
    };
}

export default Form;