import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
    render() {
        const { type, value, name, error, placeholder, onChange, className } = this.props;
        return (
            <div className='input-wrapper'>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={className}
                />
            </div>
        );
    }
}

Input.defaultProps = {
    type: 'text'
};

export default Input;