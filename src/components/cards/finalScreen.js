import React, { Component } from 'react';
import Button from '../button/Button';
import './Cards.scss';

class FinalScreen extends Component {
    render() {
        const {
            name,
            email,
            country,
            city,
            socialNetworks,
            catImage,
            goOverAgain
        } = this.props;

        return (
            <div className='card'>
                <div className='final-card-wrapper'>
                    <div>
                        <h1>{name}</h1>
                        <p>{email}</p>
                        <p className='location'>country, city</p>
                        <div className='social-networks'>
                            <p><span>Facebook:</span> fb.com/ffffdfd</p>
                            <p><span>Twitter:</span> twitter.com/ffffdfd</p>
                        </div>
                    </div>
                    <img src={catImage} alt='Котик' />
                </div>
                <Button kind='orange' onClick={goOverAgain}>
                    <span>Пройти заново</span>
                </Button>
            </div>
        );
    }
}

export default FinalScreen;