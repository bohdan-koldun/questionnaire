import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action from '../redux/actions';
import Button from '../components/button/Button';
import Pagination from '../components/pagination/Pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NameEmailForm from '../components/forms/NameEmailForm';
import LocationForm from '../components/forms/LocationForm';
import SocialProfileForm from '../components/forms/SocialProfileForm';
import CatForm from '../components/forms/CatForm';
import './App.scss';

class App extends Component {
  state = { activeForm: 1 }

  getActiveForm = () => {
    const {
      name,
      email,
      country,
      city,
      socialNetworks,
      catImage,
      addNameEmail } = this.props;
    const { activeForm } = this.state;

    switch (activeForm) {
      case 1:
        return <NameEmailForm name={name} email={email} action={addNameEmail}/>
      case 2:
        return <LocationForm country={country} city={city}/>
      case 3:
        return <SocialProfileForm socialNetworks={socialNetworks}/>
      case 4:
        return <CatForm catImage={catImage}/>
      default:
        return <NameEmailForm />
    }
  }

  goToForm = (index) => {
    if (index >= 1 && index <= 4)
      this.setState({ activeForm: index });
  }


  render() {
    const { activeForm } = this.state;

    return (
      <div className='app'>
        <Pagination totalPages={4} activeStep={activeForm} onClick={this.goToForm} />
        <div className='forms'>
          {this.getActiveForm()}
        </div>
        <div className='buttons'>
          <Button onClick={() => this.goToForm(activeForm - 1)}>
            <FaChevronLeft size='16px' style={{ marginRight: '5px' }} />
            <span>Предыдущий</span>
          </Button>
          <Button onClick={() => this.goToForm(activeForm + 1)}>
            <span>Следующий</span>
            <FaChevronRight size='16px' style={{ marginLeft: '5px' }} />
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.NameEmail.name,
    email: state.NameEmail.email,
    country: state.Location.country,
    city: state.Location.city,
    socialNetworks: state.Location.SocialNetworks,
    catImage: state.CatImage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

