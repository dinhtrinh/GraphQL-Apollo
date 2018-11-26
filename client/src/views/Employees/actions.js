
import { SELECTED_EMPLOYEE_ID } from './constants';

export const selectedEmployee = (employeeId) => {
  type: SELECTED_EMPLOYEE_ID,
  employeeId
}
