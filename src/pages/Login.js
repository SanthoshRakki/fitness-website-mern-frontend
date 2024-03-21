import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
import baseURL from '../api/apipost';


const Login = () => {
  const { emailValue, setEmailValue } = useContext(DataContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Enter Valid Email Address').trim().required('Email is required'),
      password: yup.string().trim().required('Password is required'),
    }),
    onSubmit: async (data) => {
      try {
        const res = await axios.post(`${baseURL}/loginuser`, data);
        const { token} = res.data;
        localStorage.setItem('auth', JSON.stringify(token));
        toast.success('Login successful');
        navigate('/');
      } catch (err) {
        if (err.response) {
          toast.error(err.response.data);
        } else if (err.request) {
          toast.error('No response received from server.');
        } else {
          toast.error('An error occurred during login.');
        }
      }
    },
  });

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    localStorage.setItem('email', JSON.stringify(e.target.value));
    formik.handleChange(e);
  };

  return (
    <main className="login">
      <div>
        <h1>Login Portal</h1>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              onChange={handleEmailChange}
              value={emailValue}
            />
            {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password" 
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
          </div>
          <button type="submit">Submit</button>
          <a href="#register" onClick={() => navigate('/register')}>Register</a>
        </form>
      </div>
    </main>
  );
};

export default Login;
