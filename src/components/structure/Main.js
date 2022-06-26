import React, { Component } from "react";
import styled from "styled-components";
import Form from '../form/Form'
import Preview from '../preview/Preview'

const Mainwrapper = styled.main`
    background-color: #00FFFF;
    min-height: 500px;
    display: flex;
    align-items: flex start;
    justify-content: space-evenly;
    padding: 3rem 5rem;
    gap: 3rem;

    @media (max-width: 1600px) {
        flex-direction: column;
        align-items: center;
      }
}`

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cv: {
                firstName: 'Test2',
                lastName: '',
                title: ''
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState(prevState => ({
            cv: {
                ...prevState,
                [name]: value
            }
        }));
    }

    render() {
        return (
            <Mainwrapper>
                <Form eHandler={this.handleInputChange} />
                <Preview cv={this.state.cv}/>
            </Mainwrapper>
        )
    };
}

export default Main;