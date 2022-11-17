import React from "react";
import './History-management-page.css';
import Header from "../../Components/Header-Management-page/Header";
import TableHistory from "./components/TableHistory/TableHistory";
const HistoryPage = () => {
    return (
        <div>
            <Header/>
            <TableHistory/>
        </div>
    )
}
export default HistoryPage;