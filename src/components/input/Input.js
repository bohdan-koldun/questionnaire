import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
    render() {
        const { type, value, name, error, placeholder, onChange } = this.props;
        return (
            <div className='input-wrapper'>
                <input type={type} name={name}  onChange={onChange} placeholder={placeholder} />
            </div>
        );
    }
}

Input.defaultProps = {
    type: 'text'
};

export default Input;