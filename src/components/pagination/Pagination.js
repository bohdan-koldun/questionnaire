import React, { Component } from 'react';
import './Pagination.scss';

class Pagination extends Component {
    render() {
        const { totalPages, handlerClick } = this.props;
        const activeStep = 2;
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    className={activeStep > i ? 'available' : activeStep === i ? 'active' : ''}
                    onClick={handlerClick}
                    key={i}
                >
                    {i}
                </button>
            );
        }

        return (
            <div className='pagination'>
                {buttons}
            </div>
        );
    }
}

export default Pagination;
