import React, { useEffect, useState } from 'react';
import './TableAccount.css';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import ManagementService from '../../../../Services/ManagementService';

const TableAccount = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    try {
      ManagementService.getAllUser().then((res) => {
        setData(res.data.data)
        console.log(res.data.data);
      })

    } catch (err) {
      console.log(err);
    }
  }, [])


  return (
    <div className='App'>
      <table className='tableAccount'>
        <tr>
          <th>Name User</th>
          <th>Email</th>
          <th>Sexual</th>
          <th>Phone number</th>
        </tr>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{(item.sex == 0) ? 'Nam' : 'Nữ'}</td>
            <td>{item.phone}</td>
            <td>
              <AiOutlineEdit />
              <AiOutlineDelete />
            </td>
          </tr>
        )
        )}
      </table>
      {/* <h2>Add a new account : </h2>
      <form>
        <input
          type='text'
          name='NameUser'
          required='required'
          placeholder='Enter a name'
        />
        <input
          type='text'
          name='Email'
          required='required'
          placeholder='Enter a email'
        />
        <input
          type='text'
          name='Sex'
          required='required'
          placeholder='Enter a sexual'
        />
        <input
          type='text'
          name='PhoneNumber'
          required='required'
          placeholder='Enter a phone number'
        />
        <button> Add </button>
      </form> */}
    </div>
  );
};
export default TableAccount;
