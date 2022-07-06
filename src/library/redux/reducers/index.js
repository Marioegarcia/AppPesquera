import { combineReducers } from 'redux';

import userReducer from './userReducer';
import masterDataReducer from './masterDataReducer';

const allReducers = combineReducers({
    userReducer,
    masterDataReducer,
});

export default allReducers;