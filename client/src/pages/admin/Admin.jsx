import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Table.css';
import EditModel from '../../components/EditModel';
const Admin = () =>
{
  const [ allUsers, setAllUsers ] = useState( [] );
  const [ editModal, setEditModal ] = useState( false );
  const [ editUserData, setEditUserData ] = useState( [] );
  async function fetchData ()
  {
    try
    {
      const res = await axios.get( "http://localhost:8080/api/auth/" );
      // console.log( res );
      setAllUsers( res.data );
    } catch ( error )
    {
      console.log( error );
    }
  }
  useEffect( () =>
  {
    fetchData();
  }, [] );
  const handleEdit = ( id ) =>
  {
    const editUserData = allUsers.filter( ( user, index ) =>
    {
      return id === user._id;
    } );
    setEditUserData( editUserData );
    setEditModal( !editModal );
  };
  const handleDelete = async ( id ) =>
  {
    try
    {
      const res = await axios.delete( `http://localhost:8080/api/auth/delete/${ id }` );
      console.log( res );
      fetchData();
    } catch ( error )
    {
      console.log( error );
    }
  };
  return (
    <>
      <table style={ { marginTop: "20%" } } className='custom-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          { allUsers?.map( ( row, index ) => (
            <tr key={ index }>
              <td>{ row.name }</td>
              <td>{ row.email }</td>
              <td>{ row.admin ? 'Yes' : 'No' }</td>
              <td onClick={ () => handleEdit( row._id ) }><button>Edit</button></td>
              <td onClick={ () => handleDelete( row._id ) }><button>Delete</button></td>
            </tr>
          ) ) }
        </tbody>
      </table>
      { editModal && <EditModel onClose={ handleEdit } userData={ editUserData } fetchData={ fetchData } /> }
    </>
  );
};

export default Admin;