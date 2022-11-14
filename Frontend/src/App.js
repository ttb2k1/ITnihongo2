import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManagementPage from "./Page/Management-page/Management-page";
import TopPage from "./Page/Top-page/Top-page";
import LoginPage from "./Page/Login_page/Login_page";
import AccountPage from "./Page/Account-management-page/Account-page";
import HomePage from "./Page/Home-page/Home-page";
import PaymentPage from "./Page/Payment-page/Payment-page";
import QRPage from "./Page/QR-page/QR-page";
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
              <Route exact path="management" element={<ManagementPage />} />
              <Route exact path="management/account" element={<AccountPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
