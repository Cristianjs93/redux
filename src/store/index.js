import { legacy_createStore } from 'redux';
import { inputs } from '../assets/data/inputs';

const initialState = inputs.reduce((object, key) => {
  object[key] = '';
  return object;
}, {});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FORM':
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
      break;
    default:
      return state;
  }
};

export const store = legacy_createStore(reducer);
