import React from "react";
import './Account-page.css';
import Header from "../../Components/Header-Management-page/Header";
import TableAccount from "./components/TableAccount/TableAccount";
const AccountPage = () => {
    return (
        <div>
            <Header/>
            <TableAccount/>
        </div>
    )
}
export default AccountPage;