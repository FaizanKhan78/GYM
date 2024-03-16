import React, { useState } from 'react';
import axios from "axios";
const EditModel = ( { onClose, userData, fetchData } ) =>
{
  const [ formData, setFormData ] = useState( ...userData );

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
      await axios.patch( `http://localhost:8080/api/auth/edit/${ formData._id }`, formData );
      // console.log( res );
      fetchData();
      onClose();
    } catch ( error )
    {
      console.log( error );
    }
  };

  // console.log( formData );

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={ onClose }>&times;</span>
        <h2>Edit</h2>
        <form onSubmit={ handleSubmit }>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={ formData.name }
              onChange={ handleChange }
              required
            />
          </div>
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
              type="text"
              id="password"
              name="password"
              value={ formData.password }
              onChange={ handleChange }
              required
            />
          </div>
          <div className="input-group">
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModel;