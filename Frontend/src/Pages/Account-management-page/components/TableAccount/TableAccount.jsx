import React, { useEffect, useState } from 'react';
import './TableAccount.css';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import ManagementService from '../../../../Services/ManagementService';

const TableAccount = () => {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    sex: "",
    phone: "",
  })

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

  const handleDelete = (id) => {
    console.log(id);
    ManagementService.deleteUser(id);
    setData(data.filter(item => item.id != id));
  }

  const handleAdd = () => {
    try {
      const newUser = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        sex: formData.sex,
        phone: formData.phone,
      }
      console.log(newUser);
      // ManagementService.addUser(newUser).then((res) => {
      //   setData()
      // })
    } catch (error) {
      console.log(error);
    }
  }


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
              <AiOutlineDelete className='iconDelete' onClick={() => handleDelete(item.user_id)} />
            </td>
          </tr>
        )
        )}
      </table>
      <h2>Add a new account : </h2>
      <form>
        <input
          type='text'
          name='email'
          required='required'
          placeholder='Enter a Email'
        />
        <input
          type='text'
          name='name'
          required='required'
          placeholder='Enter a Name'
        />
        <input
          type='password'
          name='password'
          required='required'
          placeholder='Enter a Password'
        />
        <select
          type='text'
          name='sex'
        >
            <option value="0">Nam</option>
            <option value="1">Nữ</option>
          </select>
        <input
          type='text'
          name='phone'
          required='required'
          placeholder='Enter a phone number'
        />
        <button onClick={handleAdd}> Add </button>
      </form>
    </div>
  );
};
export default TableAccount;
