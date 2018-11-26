import { gql } from 'apollo-boost';

export const getEmployeeListQuery = gql`
  {
    employees{
      id
      first_name
      last_name
      email_address
      job_title
      bussiness_phone
      home_phone
      mobile_phone
      fax_number
      address
      city
      state_province
      zip_postal_code
      country_region
      notes
      company
    }
  }
`

export const getSingleEmployeeQuery = gql`
  query($id: String){
    employee(id: $id){
      id
      first_name
      last_name
      email_address
      job_title
      bussiness_phone
      home_phone
      mobile_phone
      fax_number
      address
      city
      state_province
      zip_postal_code
      country_region
      notes
      company
    }
  }
`

export const createEmployeeQuery = gql`
  mutation(
    $first_name: String!,
    $last_name: String!,
    $email_address: String!,
    $job_title: String,
    $bussiness_phone: String,
    $home_phone: String,
    $mobile_phone: String,
    $fax_number: String,
    $address: String,
    $city: String,
    $state_province: String,
    $zip_postal_code: String,
    $country_region: String,
    $notes: String,
    $company: String,
  ){
    CreateEmployee(
      last_name: $first_name,
      first_name: $last_name,
      email_address: $email_address,
      job_title: $job_title,
      bussiness_phone: $bussiness_phone,
      home_phone: $home_phone,
      mobile_phone: $mobile_phone,
      fax_number: $fax_number,
      address: $address,
      city: $city,
      state_province: $state_province,
      zip_postal_code: $zip_postal_code,
      country_region: $country_region,
      notes: $notes,
      company: $company
    ){
      id
      first_name
      last_name
      email_address
      job_title
      bussiness_phone
      home_phone
      mobile_phone
      fax_number
      address
      city
      state_province
      zip_postal_code
      country_region
      notes
      company
    }
  }
`

export const updateEmployeeQuery = gql`
  mutation(
    $id: String!,
    $first_name: String,
    $last_name: String,
    $email_address: String,
    $job_title: String,
    $bussiness_phone: String,
    $home_phone: String,
    $mobile_phone: String,
    $fax_number: String,
    $address: String,
    $city: String,
    $state_province: String,
    $zip_postal_code: String,
    $country_region: String,
    $notes: String,
    $company: String,
  ){
    UpdateEmployee(
      last_name: $first_name,
      first_name: $last_name,
      email_address: $email_address,
      job_title: $job_title,
      bussiness_phone: $bussiness_phone,
      home_phone: $home_phone,
      mobile_phone: $mobile_phone,
      fax_number: $fax_number,
      address: $address,
      city: $city,
      state_province: $state_province,
      zip_postal_code: $zip_postal_code,
      country_region: $country_region,
      notes: $notes,
      company: $company
    ){
      id
      first_name
      last_name
      email_address
      job_title
      bussiness_phone
      home_phone
      mobile_phone
      fax_number
      address
      city
      state_province
      zip_postal_code
      country_region
      notes
      company
    }
  }
`
