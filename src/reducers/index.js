import {combineReducers} from 'redux';
import payment from './payment';
import details from './details';
export default combineReducers({
  payment,
  details,
});
