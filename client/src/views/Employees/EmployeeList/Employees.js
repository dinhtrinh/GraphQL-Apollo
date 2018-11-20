import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink,
  Row, Table, Button
} from 'reactstrap';
import {
  getEmployeeListQuery,
  getSingleEmployeeQuery,
  createEmployeeQuery,
  updateEmployeeQuery
} from '../queries';
import CreateEmployeeForm from '../CreateEmployee';
import UpdateEmployeeForm from '../UpdateEmployee';

class Employees extends Component {
  constructor(props){
    super(props);
    this.state = {
      create: false,
      update: false
    }

    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.toggleCreate = this.toggleCreate.bind(this);
    this.displayEmployees = this.displayEmployees.bind(this);
    this.createEmployee = this.createEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  toggleCreate() {
    this.setState({
      create: !this.state.create,
    });
  }

  toggleUpdate() {
    this.setState({
      update: !this.state.update,
    });
  }

  displayEmployees(){
    const data = this.props.employees;
    if(data.loading)
    {
      return <tr><td>loading...</td></tr>
    }
    else{
      return data.employees.map((employee) =>{
        return (
          <tr key={employee.id}>
            <td onClick={this.toggleUpdate}>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.email_address}</td>
            <td>{employee.bussiness_phone}</td>
            <td>{employee.fax_number}</td>
            <td>{employee.address}</td>
            <td>{employee.city}</td>
            <td>{employee.state_province}</td>
            <td>{employee.country_region}</td>
            <td>{employee.job_title}</td>
            <td>{employee.company}</td>
          </tr>
        )
      });
    }
  }

  createEmployee(values){
    this.props.createEmployee({
      variables:{
        first_name: values.first_name,
        last_name: values.last_name,
        email_address: values.email_address,
        job_title: values.job_title,
        bussiness_phone: values.bussiness_phone,
        home_phone: values.home_phone,
        mobile_phone: values.mobile_phone,
        fax_number: values.fax_number,
        address: values.address,
        city: values.city,
        state_province: values.state_province,
        zip_postal_code: values.zip_postal_code,
        country_region: values.country_region,
        notes: values.notes,
        company: values.company,
      },
      refetchQueries:[{query: getEmployeeListQuery}]
    });
  }

  updateEmployee(values){
    this.props.updateEmployee({
      variables:{
        id: values.id,
        first_name: values.first_name,
        last_name: values.last_name,
        email_address: values.email_address,
        job_title: values.job_title,
        bussiness_phone: values.bussiness_phone,
        home_phone: values.home_phone,
        mobile_phone: values.mobile_phone,
        fax_number: values.fax_number,
        address: values.address,
        city: values.city,
        state_province: values.state_province,
        zip_postal_code: values.zip_postal_code,
        country_region: values.country_region,
        notes: values.notes,
        company: values.company,
      },
      refetchQueries:[{query: getEmployeeListQuery}]
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col col="12" xl className="mb-3 mb-xl-0">
                    <i className="fa fa-align-justify"></i> EMPLOYEE INFORMATION LIST
                  </Col>
                  <Col col="6" sm="2" md="1" className="mb-3 mb-xl-0">
                    <Button color="success" onClick={this.toggleCreate}>Create</Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th scope="row">First Name</th>
                    <th scope="row">Last Name</th>
                    <th scope="row">Email</th>
                    <th scope="row">Work Phone</th>
                    <th scope="row">Fax</th>
                    <th scope="row">Address</th>
                    <th scope="row">City</th>
                    <th scope="row">State</th>
                    <th scope="row">Country</th>
                    <th scope="row">Job</th>
                    <th scope="row">Company</th>
                  </tr>
                  </thead>
                  <tbody>
                    {this.displayEmployees()}
                  </tbody>
                </Table>
                <CreateEmployeeForm toggleCreate={this.toggleCreate}
                  isToggleCreate={this.state.create}
                  className={this.props.className}
                  createEmployee={this.createEmployee}
                />
                <UpdateEmployeeForm toggleUpdate={this.toggleUpdate}
                  isToggleUpdate={this.state.update}
                  className={this.props.className}
                  updateEmployee={this.updateEmployee}
                />
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default compose(
  graphql(getEmployeeListQuery, {name: "employees"}),
  graphql(getSingleEmployeeQuery, {name: "employee"}),
  graphql(createEmployeeQuery, {name: "createEmployee"}),
  graphql(updateEmployeeQuery, {name: "updateEmployee"})
)(Employees);
