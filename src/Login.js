import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';  
import axios from "axios";

function Login() {
    const [values, setValues] = useState({
        nickname: '',
        password: '',
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        // setErrors(validation(values));
        // console.log(errors)
        if(values.nickname !== '' && values.password !== '') {
            axios.post('http://88.200.63.148:8081/login2', values)
    .then(res => {
        if (res.data.message === "Success") {


            localStorage.setItem('user', values.nickname);
            navigate('/home');
        window.location.reload();
        } else {
            alert("Wrong nickname or password");
        }
    })
    .catch(err => console.log(err));
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Log in</h2>
                <form action='' >
                    <div className='mb-3'>
                        <label htmlFor='nickname'><strong>Nickname</strong></label>
                        <input
                            type='nickname'
                            name='nickname'
                            placeholder='Enter your Nickname'
                            onChange={handleInput}
                            className='form-control rounded-0'
                            required
                        />
                        {errors.nickname && <span className='text-danger'>{errors.nickname}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Enter your Password'
                            onChange={handleInput}
                            className='form-control rounded-0'
                            required
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='button' className='btn btn-success w-100 rounded-0' onClick={handleSubmit}>
                        <strong>Log in</strong>
                    </button>
                    <p>Don't have an account?</p>
                    <Link
                        to='/signup'
                        className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
                    >
                        Create Account
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;