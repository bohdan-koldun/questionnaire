import React, { Component } from 'react';
import CheckBox from 'components/checkbox/CheckBox';
import Input from 'components/input/Input';
import { validateUrl } from 'services/validation';
import './Forms.scss';

class SocialProfileForm extends Component {
    constructor(props) {
        super(props);
        const { socialNetworks } = this.props;
        this.state = {
            ...socialNetworks,
            errorFacebook: '',
            errorVkontakte: '',
            errorTwitter: '',
            errorOdnoklassniki: '',
            error: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    validateSocialProfileForm = (nextProps) => {
        const { addIsValidatedForm } = this.props;
        const { socialNetworks } = nextProps ? nextProps : this.props;
        const {
            facebook,
            isFacebook,
            vkontakte,
            isVkontakte,
            twitter,
            isTwitter,
            odnoklassniki,
            isOdnoklassniki } = socialNetworks ? socialNetworks : this.state;

        let error = (isFacebook || isVkontakte || isTwitter || isOdnoklassniki);

        if (!error) {
            addIsValidatedForm({ 3: false });
            this.setState({ error: true });
        }
        else {
            let counterFalse = 0;
            if (isFacebook &&  !validateUrl(facebook)) {
                counterFalse++;
                this.setState({ errorFacebook: facebook ? 'Ссылка не корректна': ''});
            } else {
                this.setState({ errorFacebook: '' });
            }

            if (isVkontakte && !validateUrl(vkontakte)) {
                counterFalse++;
                this.setState({ errorVkontakte: vkontakte ? 'Ссылка не корректна': ''});
            } else {
                this.setState({ errorVkontakte: '' });
            }

            if (isTwitter && !validateUrl(twitter)) {
                counterFalse++;
                this.setState({ errorTwitter: twitter ? 'Ссылка не корректна': '' });
            } else {
                this.setState({ errorTwitter: '' });
            }

            if (isOdnoklassniki && !validateUrl(odnoklassniki)) {
                counterFalse++;
                this.setState({ errorOdnoklassniki: odnoklassniki ? 'Ссылка не корректна': '' });
            } else {
                this.setState({ errorOdnoklassniki: '' });
            }

            if (counterFalse > 0) {
                addIsValidatedForm({ 3: false });
                this.setState({ error: true });
            } else {
                addIsValidatedForm({ 3: true });
                this.setState({ error: false });
            }
        }
    }



    componentDidUpdate(prevProps, prevState) {
        const { action } = this.props;
        const {
            facebook,
            isFacebook,
            vkontakte,
            isVkontakte,
            twitter,
            isTwitter,
            odnoklassniki,
            isOdnoklassniki } = this.state;

        const socialNetworks = {
            facebook,
            isFacebook,
            vkontakte,
            isVkontakte,
            twitter,
            isTwitter,
            odnoklassniki,
            isOdnoklassniki
        };

        if (prevState.facebook !== facebook ||
            prevState.vkontakte !== vkontakte ||
            prevState.twitter !== twitter ||
            prevState.odnoklassniki !== odnoklassniki ||
            prevState.isFacebook !== isFacebook ||
            prevState.isVkontakte !== isVkontakte ||
            prevState.isTwitter !== isTwitter ||
            prevState.isOdnoklassniki !== isOdnoklassniki) {
            action(socialNetworks);
            this.validateSocialProfileForm({socialNetworks});
        }

    }

    componentWillReceiveProps(nextProps) {
        const { formState } = nextProps;
        if (!formState.valid && formState.countAttemptNext > 0)
            this.validateSocialProfileForm(nextProps);
    }

    componentDidMount() {
        const { formState } = this.props;
        if (!formState.valid && formState.countAttemptNext > 0)
            this.validateSocialProfileForm();
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
            isOdnoklassniki,
            errorFacebook,
            errorVkontakte,
            errorTwitter,
            errorOdnoklassniki,
            error
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
                    {
                        isFacebook &&
                        <Input
                            name='facebook'
                            value={facebook}
                            placeholder='Facebook'
                            error={errorFacebook}
                            onChange={this.handleInputChange}
                            className='social-input'
                        />
                    }
                </div>
                <div className='social-input-group'>
                    <CheckBox
                        name='isVkontakte'
                        label='Вконтакте'
                        checked={isVkontakte}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                    {
                        isVkontakte &&
                        <Input
                            name='vkontakte'
                            value={vkontakte}
                            placeholder='Вконтакте'
                            error={errorVkontakte}
                            onChange={this.handleInputChange}
                            className={isVkontakte ? 'social-input show' : 'social-input'}
                        />
                    }
                </div>
                <div className='social-input-group'>
                    <CheckBox
                        name='isTwitter'
                        label='Twitter'
                        checked={isTwitter}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                    {
                        isTwitter &&
                        <Input
                            name='twitter'
                            value={twitter}
                            placeholder='Twitter'
                            error={errorTwitter}
                            onChange={this.handleInputChange}
                            className={isTwitter ? 'social-input show' : 'social-input'}
                        />
                    }
                </div>
                <div className='social-input-group'>
                    <CheckBox
                        name='isOdnoklassniki'
                        label='Одноклассники'
                        checked={isOdnoklassniki}
                        onChange={this.handleInputChange}
                        className='social-checkbox'
                    />
                    {
                        isOdnoklassniki &&
                        <Input
                            name='odnoklassniki'
                            value={odnoklassniki}
                            placeholder='Одноклассники'
                            error={errorOdnoklassniki}
                            onChange={this.handleInputChange}
                            className={isOdnoklassniki ? 'social-input show' : 'social-input'}
                        />
                    }
                </div>
                {error && <p className='error'>Выберите хотя бы одну соцсеть и корректно укажите все выбранные!</p>}
            </form>
        );
    }
}


export default SocialProfileForm;