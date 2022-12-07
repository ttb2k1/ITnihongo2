import React, { useEffect } from "react";
import './TableHistory.css';
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import { useState } from "react";
import ManagementService from "../../../../Services/ManagementService";
const TableHistory = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        try {
          ManagementService.getListHistory().then((res) => {
            setData(res.data.data)
            console.log(res.data.data);
          })
    
        } catch (err) {
          console.log(err);
        }
      }, [])

    return(
        <div className="App">
            <table>
                <tr>
                    <th>Vehicle Name</th>
                    <th>Vehicle Type</th>
                    <th>Car Number</th>
                    <th>Name Owner</th>
                    <th>Action</th>
                </tr>
                {data?.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.Name_vehice}</td>
                            <td>{item.Type_vehice}</td>
                            <td>{item.Car_number}</td>
                            <td>{item.Name_owner}</td>
                            <td>
                                <AiOutlineEdit/>
                                <AiOutlineDelete />
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default TableHistory;