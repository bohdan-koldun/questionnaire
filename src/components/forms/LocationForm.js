import React, { Component } from 'react';
import Select from 'components/select/Select';
import Countries from 'assets/json/countries.json';
import Cities from 'assets/json/cities.json';
import './Forms.scss';

class LocationForm extends Component {
    state = { country: '', countryKey: '', city: '', cityKey: '', filteredCities: {} }

    onChangeCountry = (key) => {
        this.setState({
            country: Countries[key],
            countryKey: key
        });

        if(key)
          this.filterCities(key);
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
        this.setState({filteredCities});
    }

    componentDidUpdate() {
        const { action } = this.props;
        const { country, city} = this.state;
        action(country, city);
    }
  

    render() {
        const { country, city, countryKey, cityKey, filteredCities } = this.state;
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