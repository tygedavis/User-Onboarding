import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik'

const UserForm = () => {
    return(
        <div className='formDiv'>
            <Form>
                <label/>Name
                <Field
                    name='name'
                    type='text'
                    placeholder='Name'
                />

                <labe/>Email
                <Field
                    name='email'
                    type='text'
                    placeholder='Email'
                />

                <labe/>Password         
                <Field
                    name='password'
                    type='password'
                    placeholder='Password'
                />

                <label/>Agree to the Terms of Service
                <Field
                    name='agree'
                    type='checkbox'
                />

                <button type='submit'>Submit</button>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ name }) {
        return {
            name: name|| ''
        };
    },
})(UserForm)

export default FormikUserForm;