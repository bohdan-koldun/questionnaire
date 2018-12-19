import React, { Component } from 'react';
import Input from 'components/input/Input';
import { validateEmail, validateName } from 'services/validation';
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

        this.setState({ [name]: value });

        if (name === 'email')
            this.setState({ validEmail: validateEmail(value) });

        if (name === 'name')
            this.setState({ validName: validateName(value) });
    }

    componentDidUpdate(prevProps, prevState) {
        const { name, email, validName, validEmail } = this.state;
        const { action, addIsValidatedForm, formState } = this.props;

        if (prevState.name !== name ||
            prevState.email !== email ||
            formState.countAttemptNext !== prevProps.formState.countAttemptNext) {
            if (validName && validEmail) {
                action(name, email);
                addIsValidatedForm({ 1: true });
            } else {
                addIsValidatedForm({ 1: false });
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        const { formState } = this.props;
        const { name, email } = this.state;

        if (!formState.valid && formState.countAttemptNext > 0) {
            this.setState({ validEmail: validateEmail(email) });
            this.setState({ validName: validateName(name) });
        }
    }
    
    componentDidMount() {
        const { formState } = this.props;
        const { name, email } = this.state;

        if (!formState.valid && formState.countAttemptNext > 0) {
            this.setState({ validEmail: validateEmail(email) });
            this.setState({ validName: validateName(name) });
        }
    }


    render() {
        const { name, email, validName, validEmail } = this.state;
        return (
            <form>
                <h2>1. Введите имя и e-mail</h2>
                <Input
                    name='name'
                    value={name}
                    placeholder='Имя'
                    error={validName === false ? 'Имя должно состоять из букв только русского алфавита и пробела' : ''}
                    onChange={this.handleInputChange}
                />
                <Input
                    name='email'
                    type='email'
                    error={validEmail === false ? 'Неправильный email' : ''}
                    value={email}
                    placeholder='e-mail'
                    onChange={this.handleInputChange}
                />
            </form>
        );
    }
}


export default NameEmailForm;