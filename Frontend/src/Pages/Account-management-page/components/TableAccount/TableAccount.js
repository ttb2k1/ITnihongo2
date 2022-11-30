import React, {useState} from "react";
import './TableAccount.css';
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
const TableAccount = () => {
    const data = [
        { ID_user: "MR1000",Name_user: "Mr .Trieu", Email: "trieu@gmail.com", Sex :"Male" ,Phone : "09123456"},
        { ID_user: "MR2000",Name_user: "Ms .Phuong", Email: "phuong@gmail.com", Sex: "FeMale" ,Phone : "09123457"},
        { ID_user: "MR3000",Name_user: "Mr .Duc", Email: "Duc@gmail.com", Sex: "Male" ,Phone : "09123458"},
]
    const [Accounts,setAccounts] = useState(data);
    const [addFormData,setAddFormData] = useState({
        Name_user: '',
        Email: '',
        Sex: '',
        Phone: ''
});
    return(
        <div className="App">
            <table className="tableAccount">
                <tr>
                    <th>ID User</th>
                    <th>Name User</th>
                    <th>Email</th>
                    <th>Sexual</th>
                    <th>Phone number</th>
                </tr>
                {Accounts.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.ID_user}</td>
                            <td>{val.Name_user}</td>
                            <td>{val.Email}</td>
                            <td>{val.Sex}</td>
                            <td>{val.Phone}</td>
                            <td>
                                <AiOutlineEdit/>
                                <AiOutlineDelete/>
                            </td>
                        </tr>
                    )
                })}
            </table>
            <h2>Add a new account : </h2>
            <form>
                <input
                    type="text"
                    name="NameUser"
                    required="required"
                    placeholder="Enter a name"
                />
                <input
                    type="text"
                    name="Email"
                    required="required"
                    placeholder="Enter a email"
                />
                <input
                    type="text"
                    name="Sex"
                    required="required"
                    placeholder="Enter a sexual"
                />
                <input
                    type="text"
                    name="PhoneNumber"
                    required="required"
                    placeholder="Enter a phone number"
                />
                <button> Add </button>
            </form>
        </div>
    )
}
export default TableAccount;