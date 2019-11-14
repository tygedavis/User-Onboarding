//Imports----------------------------------------------------
import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

import UserCard from './UserCard'


//UserForm Component-----------------------------------------
const UserForm = ({ errors, touched, value, status }) => {

    const [user, setUser] = useState([]);
    useEffect(() => {
        //console.log("This is status", status)
        status && setUser(user => [...user, status])
    }, [status])

    return(
        <>
            <div className='formDiv'>
                <h1>Sign-Up</h1>

                <Form className='form'>
                    <label/>Name
                    <Field
                        className='field'
                        name='name'
                        type='text'
                        placeholder='Name'
                    />
                    {touched.name && errors.name && (<p>{errors.name}</p>)}

                    <label/>Email
                    <Field
                        className='field'
                        name='email'
                        type='email'
                        placeholder='Email'
                    />
                    {touched.email && errors.email && (<p>{errors.email}</p>)}

                    <label/>Password         
                    <Field
                        className='field'
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}

                    <label/>         
                    <Field
                        className='field'
                        name='confirmPassword'
                        type='password'
                        placeholder='Confirm Password'
                    />
                    {touched.password && errors.password && (<p>{errors.confirmPassword}</p>)}

                    <div className='check'>
                        <label className='agree'/>Agree to the Terms and Conditions
                        <Field
                            name='agree'
                            type='checkbox'
                        />
                        {touched.agree && errors.agree && (<p>{errors.agree}</p>)}
                    </div>

                    <button type='submit'>Submit</button>
                </Form>
            </div>
            <UserCard user={user}/>
        </>
    )
}

//With Formik----------------------------------------------
const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, confirmPassword, agree }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            confirmPassword: confirmPassword||'',
            agree: agree || false
        };
    },
    //Validation ------------------------------------------------------
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('This is a required field'),
        email: Yup.string()
            .required('This is a required field'),
        password: Yup.string()
            .required('This is a required field'),
        confirmPassword: Yup.string()
            .required('Confirm Password')
            .test('passwords-match', 'Passwords must match', function(value) {
                return this.parent.password === value;
            }),
        agree: Yup.boolean()
            .oneOf([true], 'You must accept the Terms and Conditions')
    }),

    //Axios POST call --------------------------------------------------
    handleSubmit(values, {setStatus}) {
        axios.post('https://reqres.in/api/users/', values)
        .then(res => {
          setStatus(res.data);
          console.log(res)
        })
        .catch(err => console.log(err.response))
      }
})(UserForm)

export default FormikUserForm;