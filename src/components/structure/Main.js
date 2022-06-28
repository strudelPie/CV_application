import React, { Component } from "react";
import styled from "styled-components";
import Form from '../form/Form'
import Preview from '../preview/Preview'
import uniqid from "uniqid";

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
                pInfo: {
                    firstName: {
                        value: '',
                        name: 'firstName',
                        placeholder: 'First Name',
                        id: uniqid(),
                    },
                    secondName: {
                        value: '',
                        name: 'secondName',
                        placeholder: 'Surname',
                        id: uniqid(),
                    },
                    title: {
                        value: '',
                        name: 'title',
                        placeholder: 'Title',
                        id: uniqid(),
                    },
                    address: {
                        value: '',
                        name: 'address',
                        placeholder: 'Address',
                        id: uniqid(),
                    },
                    email: {
                        value: '',
                        name: 'email',
                        placeholder: 'Email',
                        id: uniqid(),
                    },
                    telephone: {
                        value: '',
                        name: 'telephone',
                        placeholder: 'Telephone',
                        id: uniqid(),
                    },
                    description: {
                        value: '',
                        name: 'description',
                        placeholder: 'Description',
                        id: uniqid(),
                    },
                }
                    
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target
        const  state  = {...this.state};
        state.cv["pInfo"][name].value = value;

        this.setState({
            state
        });
    }

    render() {
        return (
            <Mainwrapper>
                <Form cv={this.state.cv} eHandler={this.handleInputChange} />
                <Preview cv={this.state.cv}/>
            </Mainwrapper>
        )
    };
}

export default Main;