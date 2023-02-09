import {combineReducers} from 'redux';
import handleCart from './handleCartReducer';

export default combineReducers({Cart : handleCart})
