import { gql } from 'apollo-boost';

export const getEmployeeListQuery = gql`
  {
    employees{
      id
      first_name
      last_name
      email_address
    }
  }
`

export const createEmployeeQuery = gql`
  mutation{
    CreateEmployee(
      last_name:"Create",
      first_name:"new 2",
      email_address:"createnew@gmail.com"
    ){
      id
      first_name
      last_name
      email_address
    }
  }
`
