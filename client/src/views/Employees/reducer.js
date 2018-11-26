import { SELECTED_EMPLOYEE_ID } from "./constants";

const initialState = {
  employees: [],
  selectedEmployeeId: null
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_EMPLOYEE_ID:
    console.log('action', action)
      return {
          ...state,
          selectedEmployeeId: action.employeeId
      };
    default:
      return state;
  }
};

export default employeeReducer;
