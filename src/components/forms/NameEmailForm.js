import React, { Component } from 'react';
import Input from '../input/Input';
import './Forms.scss';

class NameEmailForm extends Component {
    constructor(props) {
        super(props);
        const { name, email } = this.props;
        this.state = { name, email };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        this.sendToStore();
    }

    sendToStore = () => {
        console.log('sdfsd');
        const { action } = this.props;
        const { name, email } = this.state;
        action (name, email);
    }

    render() {
        const { name, email } = this.state;
        return (
            <form>
                <h2>1. Введите имя и e-mail</h2>
                <Input
                    name='name'
                    value={name}
                    placeholder='Имя'
                    onChange={this.handleInputChange}
                />
                <Input
                    name='email'
                    type='email'
                    value={email}
                    placeholder='e-mail'
                    onChange={this.handleInputChange}
                />
            </form>
        );
    }
}


export default NameEmailForm;