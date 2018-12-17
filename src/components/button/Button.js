import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        const { type, kind, onClick, children } = this.props;
        return (
            <button
                type={type}
                className={kind === 'orange' ? 'orange-btn' : 'white-btn'}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
}

Button.defaultProps = {
    type: 'button'
};

export default Button;
