import {PAYMENT} from './types';
export const pay =
  ({purpose, amount}) =>
  async (dispatch) => {
    dispatch({
      type: PAYMENT,
      payload: {purpose: purpose, amount: amount},
    });
  };
