import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row,
   Table, Button ,Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label, Input,
 } from 'reactstrap';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getEmployeeQuery = gql`
  {
    employees{
      id
      first_name
      last_name
      email_address
    }
  }
`

class Employees extends Component {
  constructor(props){
    super(props);
    this.state = {
      success: false
    }

    this.displayEmployees = this.displayEmployees.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
  }

  toggleSuccess() {
    this.setState({
      success: !this.state.success,
    });
  }

  displayEmployees(){
    const data = this.props.data;
    if(data.loading)
    {
      return <tr><td>loading...</td></tr>
    }
    else{
      console.log('data.employees', data.employees)
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
                <Modal isOpen={this.state.success} toggle={this.toggleSuccess}
                       className={'modal-success ' + this.props.className}>
                  <ModalHeader toggle={this.toggleSuccess}>CREATE NEW EMPLOYEE</ModalHeader>
                  <ModalBody>
                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="city">First Name</Label>
                          <Input type="text" id="city" placeholder="Enter your first name" />
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="postal-code">Last Name</Label>
                          <Input type="text" id="postal-code" placeholder="Enter your last name" />
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="company">Company</Label>
                      <Input type="text" id="company" placeholder="Enter your company name" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="vat">VAT</Label>
                      <Input type="text" id="vat" placeholder="DE1234567890" />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="street">Street</Label>
                      <Input type="text" id="street" placeholder="Enter street name" />
                    </FormGroup>
                    <FormGroup row className="my-0">
                      <Col xs="8">
                        <FormGroup>
                          <Label htmlFor="city">City</Label>
                          <Input type="text" id="city" placeholder="Enter your city" />
                        </FormGroup>
                      </Col>
                      <Col xs="4">
                        <FormGroup>
                          <Label htmlFor="postal-code">Postal Code</Label>
                          <Input type="text" id="postal-code" placeholder="Postal Code" />
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="country">Country</Label>
                      <Input type="text" id="country" placeholder="Country name" />
                    </FormGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={this.toggleSuccess}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button>
                  </ModalFooter>
                </Modal>
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

export default graphql(getEmployeeQuery)(Employees);
