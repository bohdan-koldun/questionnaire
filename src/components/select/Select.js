import React, { Component } from 'react';
import './Select.scss';

class Select extends Component {
    state = { showDropdown: false, selectedValue: '' }

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
        console.log(this)
        this.setState({
            selectedValue: option
        });
    }

    handleInputChange = (event) => {
        const value = event.target.value;

        this.setState({
            selectedValue: value
        });
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        const { name, options } = this.props;
        const { showDropdown, selectedValue } = this.state;
        const listOption = options.map((option, index) => {
            return <span onClick={() => this.handleChoose(option)} key={option} >{option}</span>;
        });


        return (
            <div className='select'>
                <input
                    type='text'
                    value={selectedValue}
                    placeholder={name}
                    onClick={this.handlerClick}
                    onChange={this.handleInputChange}
                    ref={this.setWrapperRef}
                />
                {
                    <div className={showDropdown ? 'select-dropdown show' : 'select-dropdown'}>
                        {listOption}
                    </div>
                }
            </div>
        );
    }
}

Select.defaultProps = {
    options: []
};

export default Select;