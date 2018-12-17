import React, { Component } from 'react';
import Select from '../select/Select';
import Countries from '../../assets/json/countries.json';
import Cities from '../../assets/json/cities.json';
import './Forms.scss';

class LocationForm extends Component {
    state = { country: '', city: '' }

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        console.log(Cities);
        const { country, city } = this.state;
        return (
            <form>
                <h2>2. Выберите страну и город</h2>
                <Select
                    name={country}
                    label='Страна'
                    selectedValue={country}
                    options={Object.values(Countries)}
                    onChange={this.onChange}
                />
                <Select
                    name={city}
                    label='Город'
                    selectedValue={city}
                    search={true}
                    onChange={this.onChange}
                />
            </form>
        );
    }
}


export default LocationForm;