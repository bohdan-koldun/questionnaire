import React, { Component } from 'react';
import './CheckBox.scss';

class CheckBox extends Component {
    render() {
        const { name, label, onChange, checked, className } = this.props;
        return (
            <label className={!className ? 'checkbox-wrapper' : 'checkbox-wrapper ' + className}>{label}
                <input type='checkbox' name={name} checked={checked} onChange={onChange} />
                <span className='checkmark'></span>
            </label>
        );
    }
}

export default CheckBox;