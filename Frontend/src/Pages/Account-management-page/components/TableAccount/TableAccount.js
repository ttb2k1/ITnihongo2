import React from "react";
import './TableAccount.css';
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
const TableAccount = () => {
    const data = [
        { ID_user: "MR1000",Name_user: "Mr .Trieu", Email: "trieu@gmail.com", Sex :"Male" ,Phone : "09123456"},
        { ID_user: "MR2000",Name_user: "Ms .Phuong", Email: "phuong@gmail.com", Sex: "FeMale" ,Phone : "09123457"},
        { ID_user: "MR3000",Name_user: "Mr .Duc", Email: "Duc@gmail.com", Sex: "Male" ,Phone : "09123458"},
    ]
    return(
        <div className="App">
            <table>
                <tr>
                    <th>ID User</th>
                    <th>Name User</th>
                    <th>Email</th>
                    <th>Sexual</th>
                    <th>Phone number</th>
                </tr>
                {data.map((val, key) => {
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
        </div>
    )
}
export default TableAccount;