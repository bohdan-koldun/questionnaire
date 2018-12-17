import React, { Component } from 'react';
import logo from '.././../assets/pictures/cat1.jpg';
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
            catImage
        } = this.props;

        return (
            <div className='card'>
                <div className='final-card-wrapper'>
                    <div>
                        <h1>Fktrcyflf Ytdcrbq</h1>
                        <p>email@fjdfjd.coko</p>
                        <p className='location'>country, city</p>
                        <div className='social-networks'>
                            <p><span>Facebook:</span> fb.com/ffffdfd</p>
                            <p><span>Twitter:</span> twitter.com/ffffdfd</p>
                        </div>
                    </div>
                    <img src={logo} alt='' />
                </div>
                <Button kind='orange'>
                    <span>Пройти заново</span>
                </Button>
            </div>
        );
    }
}

export default FinalScreen;