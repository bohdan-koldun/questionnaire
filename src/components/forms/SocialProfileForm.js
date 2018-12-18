import React, { Component } from 'react';
import CheckBox from 'components/checkbox/CheckBox';
import Input from 'components/input/Input';
import './Forms.scss';

class SocialProfileForm extends Component {
    constructor(props) {
        super(props);
        const { socialNetworks } = this.props;
        this.state = { ...socialNetworks };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    componentDidUpdate(prevProps, prevState) {
        const { country, city} = this.state;
        const { action, addIsValidatedForm } = this.props;

        if(JSON.stringify(this.state) !== JSON.stringify(prevState)) {
            if(this.state) {
                action(this.state);
                addIsValidatedForm({3: true});
            } else {
                addIsValidatedForm({3: false});
            }   
        }   
    }


    render() {
        const {
            facebook,
            isFacebook,
            vkontakte,
            isVkontakte,
            twitter,
            isTwitter,
            odnoklassniki,
            isOdnoklassniki
        } = this.state;

        return (
            <form>
                <h2>3. Отметьте социальные сети</h2>
                <div className='social-input-group'>
                    <CheckBox
                        name='isFacebook'
                        label='Facebook'
                        checked={isFacebook}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                    <Input
                        name='facebook'
                        value={facebook}
                        placeholder='Facebook'
                        error=''
                        onChange={this.handleInputChange}
                        className={isFacebook ? 'social-input show' : 'social-input'}
                    />
                </div>
                <div className='social-input-group'>
                    <CheckBox
                        name='isVkontakte'
                        label='Вконтакте'
                        checked={isVkontakte}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                    <Input
                        name='vkontakte'
                        value={vkontakte}
                        placeholder='Вконтакте'
                        error=''
                        onChange={this.handleInputChange}
                        className={isVkontakte ? 'social-input show' : 'social-input'}
                    />  
                </div>
                <div className='social-input-group'>
                    <CheckBox
                        name='isTwitter'
                        label='Twitter'
                        checked={isTwitter}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                    <Input
                        name='twitter'
                        value={twitter}
                        placeholder='Twitter'
                        error=''
                        onChange={this.handleInputChange}
                        className={isTwitter ? 'social-input show' : 'social-input'}
                    />
                </div>
                <div className='social-input-group'>
                    <CheckBox
                        name='isOdnoklassniki'
                        label='Одноклассники'
                        checked={isOdnoklassniki}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                     <Input
                        name='odnoklassniki'
                        value={odnoklassniki}
                        placeholder='Одноклассники'
                        error=''
                        onChange={this.handleInputChange}
                        className={isOdnoklassniki ? 'social-input show' : 'social-input'}
                    />
                </div>
            </form>
        );
    }
}


export default SocialProfileForm;