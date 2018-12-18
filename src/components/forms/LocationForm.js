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
            error: false
        };
    }

    onChangeCountry = (key) => {
        this.setState({
            country: Countries[key],
            countryKey: key
        });

        if(key) {
           this.setState({filteredCities: this.filterCities(key)});
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

        Object.keys( Cities).forEach((key) => {
            if(Cities[key].country == countryKey)
                filteredCities[key] =  Cities[key].name;
        });

        return filteredCities;
    }

    componentDidUpdate(prevProps, prevState) {
        const { country, city, filteredCities} = this.state;
        const { action, addIsValidatedForm } = this.props;
        if(prevState.country !== country || prevState.city !== city) {
            if(country && (city || Object.keys(filteredCities).length === 0 )) {
                action(country, city);
                addIsValidatedForm({2: true});
                this.setState({error: false});
            } else {
                addIsValidatedForm({2: false});
                this.setState({error: true});
            }   
        }   
    }
  

    render() {
        const { countryKey, cityKey, filteredCities, error } = this.state;
        return (
            <form>
                <h2>2. Выберите страну и город</h2>
                <Select
                    name='country'
                    label='Страна'
                    selectedKey={countryKey}
                    options={Countries}
                    onChange={this.onChangeCountry}
                />
                <Select
                    name='city'
                    label='Город'
                    selectedKey={cityKey}
                    options={filteredCities}
                    onChange={this.onChangeCity}
                />
                {error && <p className='error'>Нужно выбрать страну и если есть - город!</p>}
            </form>
        );
    }
}


export default LocationForm;