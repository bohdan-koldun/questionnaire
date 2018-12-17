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
            this.setState({ showDropdown: false })
        }
    }

    handleChoose = (option) => {
        if (this.inputRef) {
            this.inputRef.value = option;
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        const { name, label, options, search, selectedValue, onChange } = this.props;
        const { showDropdown } = this.state;
        const listOption = options.map((option, index) => {
            return <span onClick={() => this.handleChoose(option)} key={option} >{option}</span>;
        });


        return (
            <div className='select'>
                <input
                    type='text'
                    name={name}
                    value={selectedValue}
                    placeholder={label}
                    onClick={this.handlerClick}
                    onChange={onChange}
                    autoComplete='off'
                    ref={this.setWrapperRef}
                    readOnly={!!search}
                />
                <div className={showDropdown ? 'select-dropdown show' : 'select-dropdown'}>
                    {listOption}
                </div>
            </div>
        );
    }
}

Select.defaultProps = {
    options: [],
    search: true
};

export default Select;