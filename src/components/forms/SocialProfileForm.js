import React, { Component } from 'react';
import CheckBox from 'components/checkbox/CheckBox';
import Input from 'components/input/Input';
import './Forms.scss';

class SocialProfileForm extends Component {
    state = {
        facebook: '',
        facebookCheckBox: false,
        vkontakte: '',
        vkontakteCheckBox: false,
        twitter: '',
        twitterCheckBox: false,
        odnoklassniki: '',
        odnoklassnikiCheckBox: false
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const {
            facebook,
            facebookCheckBox,
            vkontakte,
            vkontakteCheckBox,
            twitter,
            twitterCheckBox,
            odnoklassniki,
            odnoklassnikiCheckBox
        } = this.state;

        return (
            <form>
                <h2>3. Отметьте социальные сети</h2>
                <div className='social-input-group'>
                    <CheckBox
                        name='facebookCheckBox'
                        label='Facebook'
                        checked={facebookCheckBox}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                    {
                        facebookCheckBox &&
                        <Input
                            name='facebook'
                            value={facebook}
                            placeholder='Facebook'
                            onChange={this.handleInputChange}
                            className='social-input'
                        />
                    }
                </div>
                <div className='social-input-group'>
                    <CheckBox
                        name='vkontakteCheckBox'
                        label='Вконтакте'
                        checked={vkontakteCheckBox}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                    {
                        vkontakteCheckBox &&
                        <Input
                            name='vkontakte'
                            value={vkontakte}
                            placeholder='Вконтакте'
                            onChange={this.handleInputChange}
                            className='social-input'
                        />
                    }
                </div>
                <div className='social-input-group'>
                    <CheckBox
                        name='twitterCheckBox'
                        label='Twitter'
                        checked={twitterCheckBox}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                    {
                        twitterCheckBox &&
                        <Input
                            name='twitter'
                            value={twitter}
                            placeholder='Twitter'
                            onChange={this.handleInputChange}
                            className='social-input'
                        />
                    }
                </div>
                <div className='social-input-group'>
                    <CheckBox
                        name='odnoklassnikiCheckBox'
                        label='Одноклассники'
                        checked={odnoklassnikiCheckBox}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                    {
                        odnoklassnikiCheckBox &&
                        <Input
                            name='odnoklassniki'
                            value={odnoklassniki}
                            placeholder='Одноклассники'
                            onChange={this.handleInputChange}
                            className='social-input'
                        />
                    }
                </div>
            </form>
        );
    }
}


export default SocialProfileForm;