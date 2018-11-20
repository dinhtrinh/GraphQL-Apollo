import { GET_EMPLOYEE_LIST } from "./constants";

const initialState = {
  employess: []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_LIST:
      return { ...state,
          employess: action.data
      };
    default:
      return state;
  }
};

export default employeeReducer;
