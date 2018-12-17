import { combineReducers } from 'redux';
import Types from './constants';

const initialState = {
  nameEmailData: {
    name: '',
    email: ''
  },
  locationData: {
    country: '',
    city: ''
  },
  socialNetworks: {
    facebook: '',
    isFacebook: false,
    vkontakte: '',
    isVkontakte: false,
    twitter: '',
    isTwitter: false,
    odnoklassniki: '',
    isOdnoklassniki: false
  },
  catImage: '',

};

const NameEmail = (state = initialState.nameEmailData, action) => {
  switch (action.type) {
    case Types.ADD_NAME_EMAIL:
      return action.payload;
    default:
      return state;
  }
};

const Location = (state = initialState.locationData, action) => {
  switch (action.type) {
    case Types.ADD_LOCATION_DATA:
      return action.payload;
    default:
      return state;
  }
};


const SocialNetworks = (state = initialState.socialNetworks, action) => {
  switch (action.type) {
    case Types.ADD_SOCIAL_NETWORKS:
      return action.payload;
    default:
      return state;
  }
};

const CatImage = (state = initialState.catImage, action) => {
  switch (action.type) {
    case Types.ADD_CAT_IMAGE:
      return action.payload;
    default:
      return state;
  }
};


const appReducer =  combineReducers({
  NameEmail,
  Location,
  SocialNetworks,
  CatImage
});

const rootReducer = (state, action) => {
  if (action.type === Types.GO_OVER_AGAIN) {
    state = initialState;
  }

  return appReducer(state, action)
}

export default rootReducer;