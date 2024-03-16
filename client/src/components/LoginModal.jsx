import React, { useState } from 'react';
import './LoginModal.css'; // Import your CSS file
import axios from 'axios';

const LoginModal = ( props ) =>
{
  const [ formData, setFormData ] = useState( {
    email: '',
    password: ''
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
    // Add your login logic here
    console.log( formData );
    try
    {
      const res = await axios.post( 'http://localhost:8080/api/auth/login', formData );
      console.log( res );
      props.setUser( res.data );
    } catch ( error )
    {
      console.log( error );
    }
    props.onClose(); // Close the modal after successful login
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={ props.onClose }>&times;</span>
        <h2>Login</h2>
        <form onSubmit={ handleSubmit }>
          <div className="input-group">
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
          <div className="input-group">
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
          <div className="input-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
