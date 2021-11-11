import React from 'react';
import * as yup from 'yup'
import { Button, Modal, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ErrorMessage, Field, Formik } from 'formik';
import { Label } from 'reactstrap';

//project imports
import { Employee, EmployeeProps } from './Interfaces';
import { SelectField } from './SelectField';
import { validateMaxAllowance, validateMinAllowance } from './_Common';
import AdditionalFields from './AdditionalFields';
import { RootState } from '../../store/store';

let addEmployeeSchema = yup.object().shape({
    countryOfWork: yup.number().required('Country is required field.'),
    dateOfBirth: yup.date().required('Date of birth is required field.'),
    firstName: yup.string().required('First name is required field.'),
    lastName: yup.string().required('Last name is required field.'),
    holidayAllowance: yup.number().test({
      name: 'validateMinAllowance',
      exclusive: false,
      message: 'Holiday Allowance must be above 30.',
      params: { },
      test: function (value : number | undefined)
      {
        return validateMinAllowance(this.parent.countryOfWork, value);
      }
    }).test({
      name: 'validateMaxAllowance',
      exclusive: false,
      message: 'Holiday Allowance must be bellow 40.',
      params: { },
      test: function (value : number | undefined)
      {
        return validateMaxAllowance(this.parent.countryOfWork, value);
      }
    }).required('Holiday Allowance is required field.'),
    maritalStatus: yup.number(),
    socialInsuranceNumber: yup.string(),
    numberOfChildren: yup.number(),
    workingHours: yup.number()
})

const AddEmployeeForm = ({ formState, handleClose } : EmployeeProps) =>
{
  const { country, employee } = useSelector((state : RootState) => state.mainReducer);

  return(
    <Modal show={formState} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Formik 
        initialValues={employee}
        onSubmit={(values : Employee) => 
        {
          console.log(values)
        }}
        validationSchema={addEmployeeSchema}>
        {({ handleSubmit, isValid, dirty, values }) => 
          <Form onSubmit={(e : React.FormEvent<HTMLFormElement>) => { e.preventDefault(); handleSubmit(); }}>
            <div className="label-element">
              <Label for="oldPassword">Country Of Work</Label>
              <Field 
                component={SelectField}
                options={country}
                name="countryOfWork"
                autoComplete="off"
                required
              />
              <ErrorMessage component="p" className="field-colorchange" name="countryOfWork" />
            </div>
           <div className="row-style row-in-form"> 
            <div className="label-element">
                <Label for="oldPassword">First Name</Label>
                <Field 
                  type="text"
                  name="firstName"
                  className="form-control"
                  autoComplete="off"
                  required
                />
                <ErrorMessage component="p" className="field-color-change" name="firstName"/>
              </div>
              <div className="col-sm-6">
                <Label for="oldPassword">Last Name</Label>
                <Field 
                  type="text"
                  name="lastName"
                  className="form-control"
                  autoComplete="off"
                  required
                />
                <ErrorMessage component="p" className="field-color-change" name="lastName"/>
              </div>
            </div>
            <div className="label-element">
              <Label for="oldPassword">Date of Birth</Label>
              <Field 
                type="date"
                name="dateOfBirth"
                className="form-control"
                autoComplete="off"
                required
              />
              <ErrorMessage component="p" className="field-color-change" name="dateOfBirth"/>
            </div>

            <div className="label-element">
              <Label for="oldPassword">Holiday Allowance</Label>
              <Field 
                type="number"
                name="holidayAllowance"
                className="form-control"
                autoComplete="off"
                required
              />
              <ErrorMessage component="p" className="field-color-change" name="holidayAllowance"/>
            </div>

            {/* Additional fields component */}
            <AdditionalFields countryOfWork={values.countryOfWork}/>

            <div className="form-buttons mt-3">
              <Button variant="secondary" onClick={() => { handleClose() }}>Close</Button>
              <Button 
                variant="primary" 
                className="btn btn-secondary btn-submit-form" 
                type="submit" 
                disabled={!dirty || !isValid}
              >Save Changes</Button>
            </div>
          </Form>
        }
      </Formik>
      </Modal.Body>
    </Modal>)
}

export default AddEmployeeForm;