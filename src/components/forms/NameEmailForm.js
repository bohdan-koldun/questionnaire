import React, { Component } from 'react';
import Input from '../input/Input';
import './Forms.scss';

class NameEmailForm extends Component {
    render() {
        return (
            <form>
                <h2>1. Введите имя и e-mail</h2>
                <Input name='name' placeholder='Имя' />
                <Input name='email' type='email' placeholder='e-mail' />
            </form>
        );
    }
}


export default NameEmailForm;