import { CHANGE_LOCATION } from '../actions/types';

import { combineReducers } from 'redux';

const locationReducer = () => [
  'Melbourne',
  'Perth',
  'Sydney',
  'Adelaide',
  'Brisbane',
  'Darwin',
  'Hobart',
];

const initialState = {
  location: null,
};

const changeLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  location: locationReducer,
  currentLocation: changeLocationReducer,
});
