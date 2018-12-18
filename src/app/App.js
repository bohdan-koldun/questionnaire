import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action from 'redux/actions';
import Button from 'components/button/Button';
import Pagination from 'components/pagination/Pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NameEmailForm from 'components/forms/NameEmailForm';
import LocationForm from 'components/forms/LocationForm';
import SocialProfileForm from 'components/forms/SocialProfileForm';
import CatForm from 'components/forms/CatForm';
import FinalScreen from 'components/cards/finalScreen';
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
      addNameEmail,
      addCatImage,
      addSocialNetworks,
      addLocation,
      addIsValidatedForm } = this.props;
    const { activeForm } = this.state;

    switch (activeForm) {
      case 1:
        return <NameEmailForm name={name} email={email} action={addNameEmail} addIsValidatedForm={addIsValidatedForm}/>
      case 2:
        return <LocationForm country={country} city={city} action={addLocation} addIsValidatedForm={addIsValidatedForm}/>
      case 3:
        return <SocialProfileForm socialNetworks={socialNetworks} action={addSocialNetworks} addIsValidatedForm={addIsValidatedForm}/>
      case 4:
        return <CatForm catImage={catImage} action={addCatImage} addIsValidatedForm={addIsValidatedForm}/>
      case 5:
        return <FinalScreen  {...this.props} goOverAgain={this.goOverAgain} />
      default:
        return <NameEmailForm />
    }
  }

  goToForm = (index) => {
    const { forms } = this.props;
    const { activeForm } = this.state;
    const isAForm = index >= 1 && index <= 5;

    if( isAForm && 
        (activeForm >= index || 
          (forms[activeForm] && (activeForm + 1 === index || forms[index] )))) {
            this.setState({ activeForm: index });
          }
  }

  goOverAgain = () => {
    this.props.clearStore();
    this.setState({ activeForm: 1 });
  }


  render() {
    const { forms } = this.props;
    const { activeForm } = this.state;

    return (
      <div className='app'>
        {
          activeForm !== 5 &&
          <Pagination totalPages={4} activeStep={activeForm} forms={forms} onClick={this.goToForm} />
        }
        <div className='forms'>
          {this.getActiveForm()}
        </div>
        {
          activeForm !== 5 &&
          <div className='buttons'>
            <Button onClick={() => this.goToForm(activeForm - 1)}>
              <FaChevronLeft size='16px' style={{ marginRight: '5px' }} />
              <span>Предыдущий</span>
            </Button>
            {
              activeForm !== 4 ?
                <Button onClick={() => this.goToForm(activeForm + 1)}>
                  <span>Следующий</span>
                  <FaChevronRight size='16px' style={{ marginLeft: '5px' }} />
                </Button> :
                <Button kind='orange' onClick={() => this.goToForm(activeForm + 1)}>
                  <span>Завершить</span>
                </Button>
            }
          </div>
        }
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
    socialNetworks: state.SocialNetworks,
    catImage: state.CatImage,
    forms: state.Forms
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

