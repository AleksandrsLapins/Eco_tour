import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from './SingupValidation';
import axios from "axios";

function Signup() {
    const [values, setValues] = useState({
        name: '',
        surname: '',
        nickname: '',
        password: '',
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        console.log('Form submitted!');
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === '' && errors.surname === '' && errors.nickname === '' && errors.password === '') {
            axios.post('http://88.200.63.148:8081/signup2', values)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
        }
    };
    
    return (
        <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
           <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input 
                        type="name" 
                        name='name'
                        placeholder='Enter your Name' 
                        onChange={handleInput}
                        className="form-control rounded-0"
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="surname"><strong>Surname</strong></label>
                        <input 
                        type="surname" 
                        name='surname'
                        placeholder='Enter your Surname' 
                        onChange={handleInput}
                        className="form-control rounded-0"
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='nickname'><strong>Nickname</strong></label>
                        <input
                            type='nickname'
                            name='nickname'
                            placeholder='Enter your Nickname'
                            onChange={handleInput}
                            className='form-control rounded-0'
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
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
                    <p>You have account?</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
           </div>
                    
        </div>
    )
}

export default Signup