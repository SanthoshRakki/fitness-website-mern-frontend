import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseURL from '../api/apipost';

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      dateOfBirth: '',
      location: '',
      height: '',
      weight: '',
      age: '',
      mobileNumber: ''
    },
    validationSchema: yup.object({
      name: yup.string().strict().trim().required('Name is required'),
      email: yup.string().email('Enter Valid Email Address').strict().trim().required('Email is required'),
      password: yup.string().strict().trim().required('Password is required'),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
      dateOfBirth: yup.date().nullable().required('Date of birth is required'),
      location: yup.string().trim().required('Location is required'),
      height: yup.number().required('Height is required'),
      weight: yup.number().required('Weight is required'),
      age: yup.number().required('Age is required'),
      mobileNumber: yup.string().matches(/^[0-9]+$/, 'Mobile number must contain only digits').required('Mobile number is required')
    }),
    onSubmit: (data) => {
      console.log(data);
      axios.post(`${baseURL}/registeruser`, data)
        .then(res => {
          toast.success("User registered successfully");
          navigate('/login');
        })
        .catch(err => {
          if (err.response) {
            toast.error(err.response.data);
          } else if (err.request) {
            toast.error('No response received from server.');
          }
        });
    }
  });
  return (
    <main className='register' >
      <div >
        <h1>Join Our Community</h1>
        <form autoComplete='off' onSubmit={formik.handleSubmit} >
           <div className='form-left' >
              <div >
                <label htmlFor="name">Name</label>
                <input name="name" 
                type="text" 
                onChange={formik.handleChange} 
                value={formik.values.name} />
                {formik.errors.name? <div className='text-danger' >{formik.errors.name}</div>: null }
              </div>
              <div  >
                <label htmlFor="email">Email</label>
                <input name="email" 
                type="text"
                  onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email? <div className='text-danger' >{formik.errors.email}</div>: null }
              </div>
              <div  >
                <label htmlFor="password">Password</label>
                <input name="password" 
                type="password" 
                onChange={formik.handleChange} 
                value={formik.values.password} />
                {formik.errors.password? <div className='text-danger' >{formik.errors.password}</div>: null }
              </div>
              <div  >
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input name="confirmPassword" 
                type="password" 
                onChange={formik.handleChange} 
                value={formik.values.confirmPassword} />
                {formik.errors.confirmPassword? <div className='text-danger' >{formik.errors.confirmPassword}</div>: null }
              </div>
              <div >
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  name="dateOfBirth"
                  
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.dateOfBirth} />
                {formik.errors.dateOfBirth ? <div className='text-danger'>{formik.errors.dateOfBirth}</div> : null}
              </div>
            </div>
            <div className='form-right'>
              <div  >
                <label htmlFor="location">Location</label>
                <input
                  name="location"
                
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.location} />
                {formik.errors.location ? <div className='text-danger'>{formik.errors.location}</div> : null}
              </div>
              <div >
                <label htmlFor="height">Height</label>
                <input
                  name="height"
                
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.height} />
                {formik.errors.height ? <div className='text-danger'>{formik.errors.height}</div> : null}
             </div>
             <div >
              <label htmlFor="weight">Weight</label>
              <input
                name="weight"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.weight} />
              {formik.errors.weight ? <div className='text-danger'>{formik.errors.weight}</div> : null}
             </div>
             <div >
              <label htmlFor="age">Age</label>
              <input
                name="age"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.age} />
              {formik.errors.age ? <div className='text-danger'>{formik.errors.age}</div> : null}
             </div>
             <div >
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                name="mobileNumber"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.mobileNumber} />
             </div>
             <button type="submit" >Submit</button>
            </div>
         
            <a href="#login" 
              onClick={()=>{
                window.location.href = 'login';
              }} >
                Login
            </a>

        </form>

      </div>

    </main>
  )
}

export default Register