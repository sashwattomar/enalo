import {PERSNOL_DETAILS} from './types';
export const details =
  ({name, email, number}) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PERSNOL_DETAILS,
        payload: {name: name, email: email, number: number},
      });
    } catch (err) {
      console.log('inisde reducer');
      console.log(err);
    }
  };
