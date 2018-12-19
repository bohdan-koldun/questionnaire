import React, { Component } from 'react';
import './Pagination.scss';

class Pagination extends Component {
    render() {
        const { totalPages, onClick, activeStep, forms } = this.props;
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            let classButton = '';
            if(activeStep === i) classButton += 'active ';
            if(forms[i].valid) classButton += 'available';
            
            buttons.push(
                <button
                    className={classButton }
                    onClick={() => onClick(i)}
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
