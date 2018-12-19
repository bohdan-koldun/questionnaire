import { combineReducers } from 'redux';
import Types from './constants';
import storage from 'redux-persist/lib/storage'

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
  catImage: {
    src: '',
    kindOfPet: ''
  },
  forms: {
    1: {
      valid: false,
      countAttemptNext: 0
    },
    2: {
      valid: false,
      countAttemptNext: 0
    },
    3: {
      valid: false,
      countAttemptNext: 0
    },
    4: {
      valid: false,
      countAttemptNext: 0
    }
  }
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

const Forms = (state = initialState.forms, action) => {
  switch (action.type) {
    case Types.IS_VALIDATED_FORM: {
      const key = Object.keys(action.payload)[0];
      state[key].valid = action.payload[key];
      return state;
    }
    case Types.COUNT_ATTEMPT_NEXT_FORM: {
      state[action.payload].countAttemptNext++;
      return state;
    }
    case Types.GO_OVER_AGAIN: {
      Object.keys(initialState.forms).forEach((key => {
        initialState.forms[key] = {
          valid: false,
          countAttemptNext: 0
        }
      }))
      return { ...initialState.forms };
    }
    default:
      return state;
  }
};


const appReducer = combineReducers({
  Forms,
  NameEmail,
  Location,
  SocialNetworks,
  CatImage
});

const rootReducer = (state, action) => {
  if (action.type === Types.GO_OVER_AGAIN) {
    Object.keys(state).forEach(key => {
      storage.removeItem(`persist:${key}`);
    });
    state = undefined;
  }


  return appReducer(state, action)
}

export default rootReducer;