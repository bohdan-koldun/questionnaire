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
            goOverAgain } = this.props;

        return (
            <div className='card'>
                <div className='final-card-wrapper'>
                    <div>
                        <h1>{name}</h1>
                        <p>{email}</p>
                        <p className='location'>{country}, {city}</p>
                        <div className='social-networks'>
                          { socialNetworks.isFacebook && <p><span>Facebook:</span>{socialNetworks.facebook}</p> }
                          { socialNetworks.isVkontakte && <p><span>Вконтакте:</span>{socialNetworks.vkontakte}</p> }
                          { socialNetworks.isTwitter && <p><span>Twitter:</span>{socialNetworks.twitter}</p> }
                          { socialNetworks.isOdnoklassniki && <p><span>Одноклассники:</span>{socialNetworks.odnoklassniki}</p> }
                        </div>
                    </div>
                    <img src={catImage.src} alt='Котик' />
                </div>
                <Button kind='orange' onClick={goOverAgain}>
                    <span>Пройти заново</span>
                </Button>
            </div>
        );
    }
}

export default FinalScreen;