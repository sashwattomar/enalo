import {PERSNOL_DETAILS} from '../actions/types';
const initialState = {
  name: '',
  email: '',
  number: '',
};

export default function details(state = initialState, action) {
  const {type, payload} = action;
  console.log('in details reducer');
  switch (type) {
    case PERSNOL_DETAILS: {
      return {
        name: payload.name,
        email: payload.email,
        number: payload.number,
      };
    }
    default:
      return state;
  }
}
