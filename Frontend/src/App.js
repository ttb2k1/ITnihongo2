
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManagementPage from "./Pages/Management-page/Management-page";
import TopPage from "./Pages/Top-page/Top-page";
import LoginPage from "./Pages/Login_page/Login_page";
import AccountPage from "./Pages/Account-management-page/Account-page";
import HomePage from "./Pages/Home-page/Home-page";
import PaymentPage from "./Pages/Payment-page/Payment-page";
import QRPage from "./Pages/QR-page/QR-page";
import InfoUser from './Pages/InfoUser/InfoUser';
import HistoryPage from "./Pages/History-management-page/History-management-page";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" >
              <Route exact path="" element={<TopPage />} />
              <Route exact path="login" element={<LoginPage />} />
              <Route exact path="homepage" element={<HomePage />} />
              <Route exact path="payment" element={<PaymentPage />} />
              <Route exact path="ticket" element={<QRPage />} />
              <Route exact path="info" element={<InfoUser />} />
              <Route exact path="management" element={<ManagementPage />} />
              <Route exact path="management/account" element={<AccountPage/>} />
              <Route exact path="management/history" element={<HistoryPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
