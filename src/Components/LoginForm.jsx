import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import './LoginForm.styles.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [formValue,setFormValue] =useState({
        email:'',
        password:''
    });
    const [isSubmit,setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            navigate('/home');
        }
    })

    const handleChange = (e) => {
        setFormValue({...formValue,[e.target.name]:e.target.value});
    }

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
        const passwordRegex = /^[0-9]+$/i;
        const passwordValue = Array.from(formValue.password);
        let passwordSum = 0;
        passwordSum= parseInt(passwordSum);
        passwordValue.forEach((element) => passwordSum+=+element);

        if(!values.email) {
            errors.email = 'Email is required!';
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'This is not a valid email format';
        }

        if(!values.password) {
            errors.password = 'Password is required!';
        }else if (!passwordRegex.test(values.password)) {
            errors.password = 'Password must be numeric!';
        }else if (passwordSum !== 10) {
            errors.password = 'Result must be 10 when each character is added!';
        }

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
    };

return (
        <form className='form' onSubmit={handleSubmit}>
            <h1> Login </h1>
           <FormInput 
           name='email' 
           label='Email' 
           type='text' 
           placeholder='Email' 
           value={formValue.email} 
           onChange={handleChange}
           errorMessage = {formErrors.email}
           />
           <FormInput 
           name='password' 
           type='password' 
           label='Password' 
           placeholder='Password' 
           value={formValue.password} 
           onChange={handleChange} 
           errorMessage = {formErrors.password}
           />
           <button className='login-btn'>Submit</button>
        </form>
)
}

export default LoginForm;
