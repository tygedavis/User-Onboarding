//Imports----------------------------------------------------
import React from 'react';
import { withFormik, Form, Field, yupToFormErrors } from 'formik';
import * as Yup from 'yup';


//UserForm Component-----------------------------------------
const UserForm = ({ errors, touched }) => {
    return(
        <div className='formDiv'>
            <Form>
                <label/>Name
                <Field
                    name='name'
                    type='text'
                    placeholder='Name'
                />
                {touched.name && errors.name && (<p>{errors.name}</p>)}

                <labe/>Email
                <Field
                    name='email'
                    type='email'
                    placeholder='Email'
                />
                {touched.email && errors.email && (<p>{errors.email}</p>)}

                <labe/>Password         
                <Field
                    name='password'
                    type='password'
                    placeholder='Password'
                />
                {touched.password && errors.password && (<p>{errors.password}</p>)}

                <label/>Agree to the Terms and Conditions
                <Field
                    name='agree'
                    type='checkbox'
                />
                {touched.agree && errors.agree && (<p>{errors.agree}</p>)}

                <button type='submit'>Submit</button>
            </Form>
        </div>
    )
}

//With Formik----------------------------------------------
const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, agree }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            agree: agree || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('This is a required field'),
        email: Yup.string()
            .required('This is a required field'),
        password: Yup.string()
            .required('This is a required field'),
        agree: Yup.boolean()
            .oneOf([true], 'You must accept the Terms and Conditions')
    })
})(UserForm)

export default FormikUserForm;