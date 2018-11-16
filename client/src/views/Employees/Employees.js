import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row,
   Table, Button
 } from 'reactstrap';
import { getEmployeeListQuery } from './queries';
import CreateEmployeeForm from './CreateEmployee';

class Employees extends Component {
  constructor(props){
    super(props);
    this.state = {
      success: false
    }

    this.displayEmployees = this.displayEmployees.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.createEmployee = this.createEmployee.bind(this);
  }

  toggleSuccess() {
    this.setState({
      success: !this.state.success,
    });
  }

  createEmployee(values)
  {
    console.log('handleSubmit', values);
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
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.email_address}</td>
            <td>{employee.mobile_phone}</td>
            <td>{employee.job_title}</td>
          </tr>
        )
      });
    }
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
                    <Button color="success" onClick={this.toggleSuccess}>Create</Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile Phone</th>
                    <th>Job</th>
                  </tr>
                  </thead>
                  <tbody>
                    {this.displayEmployees()}
                  </tbody>
                </Table>
                <CreateEmployeeForm toggleSuccess={this.toggleSuccess}
                  isToggle={this.state.success}
                  className={this.props.className}
                  createEmployee={this.createEmployee}
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
  graphql(getEmployeeListQuery, {name: "employees"})
)(Employees);
