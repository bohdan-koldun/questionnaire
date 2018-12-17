import React, { Component } from 'react';
import  Select from '../select/Select';
import Countries from '../../assets/json/countries.json';
import Cities from '../../assets/json/cities.json';
import './Forms.scss';

class LocationForm extends Component {
    
    render() {
        console.log(Countries);
        return (
            <form>
                <h2>2. Выберите страну и город</h2>
                <Select name='Страна' options={Object.values(Countries)}/>
                <Select name='Город' />
            </form>
        );
    }
}


export default LocationForm;