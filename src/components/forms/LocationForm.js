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
            filteredCities: this.filterCities(countryKey)}
    }

    onChangeCountry = (key) => {
        this.setState({
            country: Countries[key],
            countryKey: key
        });

        if(key)
           this.setState({filteredCities: this.filterCities(key)});
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

    componentDidUpdate() {
        const { action } = this.props;
        const { country, city} = this.state;
        action(country, city);
    }
  

    render() {
        const { countryKey, cityKey, filteredCities } = this.state;
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
                    search={true}
                    onChange={this.onChangeCity}
                />
            </form>
        );
    }
}


export default LocationForm;