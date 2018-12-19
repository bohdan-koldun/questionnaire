import React, { Component } from 'react';
import './Select.scss';

class Select extends Component {
    state = { showDropdown: false }

    handlerClick = (event) => {
        this.setState({ showDropdown: true });
    }

    setWrapperRef = (node) => {
        this.inputRef = node;
    }

    handleClickOutside = (event) => {
        if (this.inputRef && !this.inputRef.contains(event.target)) {
            this.setState({ showDropdown: false });
        }
    }

    handleChoose = (key) => {
        this.props.onChange(key);
        this.setState({ showDropdown: false });
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        const { name, label, options, search, onChange, selectedKey, error, disabled } = this.props;
        const { showDropdown } = this.state;
        const isError = error.length > 0;

        return (
            <div className='select' ref={this.setWrapperRef}>
                <input
                    type='text'
                    name={name}
                    value={options[selectedKey] ? options[selectedKey] : ''}
                    placeholder={label}
                    onClick={this.handlerClick}
                    onChange={() => onChange(selectedKey)}
                    autoComplete='off'
                    readOnly={!search}
                    disabled={disabled}
                    className={isError ? 'select-error' : ''}
                />
                 {isError && <p className='error'>{error}</p>}
                <div className='select-dropdown' style={{ display: showDropdown ? 'flex' : 'none' }}>
                    {
                        Object.keys(options).map((key) => {
                            return <span onClick={() => this.handleChoose(key)} key={options[key]} >{options[key]}</span>;
                        })
                    }
                </div>
            </div>
        );
    }
}

Select.defaultProps = {
    options: [],
    search: false,
    disabled: false
};

export default Select;