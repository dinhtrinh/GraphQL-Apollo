
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import employeeReducer from '../views/Employees/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  employees: employeeReducer
});

export default rootReducer;
