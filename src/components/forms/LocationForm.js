import React, { Component } from 'react';
import Select from 'components/select/Select';
import Countries from 'assets/json/countries.json';
import Cities from 'assets/json/cities.json';
import './Forms.scss';

class LocationForm extends Component {
    constructor(props) {
        super(props);
        const { country, city } = this.props;
        const countryKey = Object.keys(Countries).find(key => Countries[key] === country);
        const cityKey = Object.keys(Cities).find(key => Cities[key].name === city);

        this.state = {
            country: country,
            countryKey: countryKey,
            city: city,
            cityKey: cityKey,
            filteredCities: this.filterCities(countryKey),
            errorCountry: '',
            errorCity: ''
        };
    }

    onChangeCountry = (key) => {
        this.setState({
            country: Countries[key],
            countryKey: key
        });

        if (key) {
            this.setState({ filteredCities: this.filterCities(key) });
            this.setState({
                city: '',
                cityKey: ''
            });
        }
    }

    onChangeCity = (key) => {
        this.setState({
            city: Cities[key].name,
            cityKey: key
        });
    }

    filterCities = (countryKey) => {
        const filteredCities = {};
        Object.keys(Cities).forEach((key) => {
            if (Cities[key].country == countryKey)
                filteredCities[key] = Cities[key].name;
        });

        return filteredCities;
    }

    validateLocationForm = () => {
        const { country, city, filteredCities } = this.state;
        const { action, addIsValidatedForm } = this.props;
        action(country, city);

        if (country && (city || Object.keys(filteredCities).length === 0)) {
            addIsValidatedForm({ 2: true });
            this.setState({ errorCountry: '' });
            this.setState({ errorCity: '' });

        } else {
            addIsValidatedForm({ 2: false });
            country ?
                this.setState({ errorCountry: '' }) : this.setState({ errorCountry: 'Выберите страну' });
            (city || Object.keys(filteredCities).length === 0) ?
                this.setState({ errorCity: '' }) : this.setState({ errorCity: 'Выберите город' });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { country, city } = this.state;

        if (prevState.country !== country || prevState.city !== city)
            this.validateLocationForm();
    }

    componentWillReceiveProps(nextProps) {
        const { formState } = nextProps;

        if (!formState.valid && formState.countAttemptNext > 0)
            this.validateLocationForm();
    }

    componentDidMount() {
        const { formState } = this.props;

        if (!formState.valid && formState.countAttemptNext > 0)
            this.validateLocationForm();
    }

    render() {
        const { countryKey, cityKey, filteredCities, errorCountry, errorCity } = this.state;
        return (
            <form>
                <h2>2. Выберите страну и город</h2>
                <Select
                    name='country'
                    label='Страна'
                    error={errorCountry}
                    selectedKey={countryKey}
                    options={Countries}
                    onChange={this.onChangeCountry}
                />
                <Select
                    name='city'
                    label='Город'
                    error={errorCity}
                    selectedKey={cityKey}
                    options={filteredCities}
                    onChange={this.onChangeCity}
                    disabled={Object.keys(filteredCities).length === 0 ? true : false}
                />
            </form>
        );
    }
}


export default LocationForm;