import React, { Component } from 'react';
import Button from '../components/button/Button';
import Pagination from '../components/pagination/Pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NameEmailForm from '../components/forms/NameEmailForm';
import LocationForm from '../components/forms/LocationForm';
import SocialProfileForm from '../components/forms/SocialProfileForm';
import CatForm from '../components/forms/CatForm';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Pagination totalPages={4} />
        <div className='forms'>
          <NameEmailForm />
          <LocationForm />
          <SocialProfileForm />
          <CatForm />
        </div>
        <div className='buttons'>
          <Button>
            <FaChevronLeft size='16px' style={{ marginRight: '5px' }} />
            <span>Предыдущий</span>
          </Button>
          <Button>
            <span>Следующий</span>
            <FaChevronRight size='16px' style={{ marginLeft: '5px' }} />
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
