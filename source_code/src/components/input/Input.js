import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
    render() {
        const { type, value, name, error, placeholder, onChange, className, style } = this.props;
        const isError = error.length > 0;
        const classInput = isError ?  (!className ? 'input-error' : 'input-error ' + className) : className;

        return (
            <div className='input-wrapper'>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={classInput}
                    style={style}
                />
                {isError  && <span className='error'>{error}</span>}
            </div>
        );
    }
}

Input.defaultProps = {
    type: 'text'
};
 
export default Input;