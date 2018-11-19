import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Col, Button ,Modal, ModalBody, ModalHeader, ModalFooter, FormGroup
 } from 'reactstrap';
import renderField from '../../../Utils/renderField';

let CreateEmployeeForm = props => {
  const { createEmployee, toggleSuccess, isToggle, className, handleSubmit } = props;
  return (
      <Modal isOpen={isToggle} toggle={toggleSuccess} className={'modal-success modal-lg ' + className}>
        <form onSubmit={handleSubmit(createEmployee)}>
        <ModalHeader toggle={toggleSuccess}>CREATE NEW EMPLOYEE</ModalHeader>
        <ModalBody>
            <FormGroup row className="my-0">
              <Col xs="4">
                <FormGroup>
                  <Field name="first_name" component={renderField.input} type="text" placeholder="First Name"/>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Field name="last_name" component={renderField.input} type="text" placeholder="Last Name"/>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Field name="email_address" component={renderField.input} type="text" placeholder="Email"/>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row className="my-0">
              <Col xs="8">
                <FormGroup>
                  <Field name="address" component={renderField.input} type="text" placeholder="Street Address"/>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Field name="city" component={renderField.input} type="text" placeholder="City"/>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row className="my-0">
              <Col xs="4">
                <FormGroup>
                  <Field name="state_province" component={renderField.input} type="text" placeholder="State"/>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Field name="zip_postal_code" component={renderField.input} type="text" placeholder="Zip"/>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Field name="country" component={renderField.input} type="text" placeholder="Country"/>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row className="my-0">
              <Col xs="4">
                <FormGroup>
                  <Field name="bussiness_phone" component={renderField.input} type="text" placeholder="Bussiness Phone"/>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Field name="mobile_phone" component={renderField.input} type="text" placeholder="Mobile Phone"/>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Field name="home_phone" component={renderField.input} type="text" placeholder="Home Phone"/>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row className="my-0">
              <Col xs="4">
                <FormGroup>
                  <Field name="job_title" component={renderField.input} type="text" placeholder="Job"/>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Field name="fax_number" component={renderField.input} type="text" placeholder="Fax"/>
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Field name="company" component={renderField.input} type="text" placeholder="Company"/>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Field name="notes" component={renderField.input} type="textarea" rows="9" placeholder="Notes"/>
            </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success" onClick={toggleSuccess}>Save</Button>
          <Button color="secondary" onClick={toggleSuccess}>Cancel</Button>
        </ModalFooter>
        </form>
      </Modal>
  )
}

CreateEmployeeForm = reduxForm({
  form: 'createEmployee'
})(CreateEmployeeForm);

export default CreateEmployeeForm;
