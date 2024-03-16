import React, { useState } from 'react';
import '../UI/Registration.css';
import axios from 'axios';
const RegistrationForm = ( { setRegistrationModal } ) =>
{
  const [ formData, setFormData ] = useState( {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  } );

  const handleChange = ( e ) =>
  {
    const { name, value } = e.target;
    setFormData( prevState => ( {
      ...prevState,
      [ name ]: value
    } ) );
  };

  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();
    // Add your form submission logic here
    console.log( formData );
    try
    {
      const res = await axios.post( 'http://localhost:8080/api/auth/registration', formData );
      console.log( res );
      alert( res.data );
    } catch ( error )
    {
      console.log( error );
    }
  };

  return (
    <div className='modal'>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Registration Form</h2>
          <div className="close" onClick={ () => setRegistrationModal( false ) }>X</div>
        </div>
        <div className="modal-body">
          <form onSubmit={ handleSubmit }>
            <div>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={ formData.name }
                onChange={ handleChange }
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={ formData.email }
                onChange={ handleChange }
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={ formData.password }
                onChange={ handleChange }
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={ formData.confirmPassword }
                onChange={ handleChange }
                required
              />
            </div>
            <div className='modal-footer'>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
