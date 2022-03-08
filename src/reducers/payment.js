import {PAYMENT} from '../actions/types';
const initialState = {
  purpose: '',
  amount: '',
};

export default function pay(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case PAYMENT: {
      return {
        purpose: payload.purpose,
        amount: payload.amount,
      };
    }
    default:
      return state;
  }
}
