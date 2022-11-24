import React from 'react';
import './Payment-page.scss';
import HeaderHomePage from '../../Components/Header_home-page/Header-home-page';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const PaymentPage = () => {
  return (
    <div className='paymentContainer'>
      <HeaderHomePage />
      <div className='content'>
        <div className='button-payment'>
          <button className='direct'>
            <HandshakeIcon />
            <a href='/homepage' className='text-payment'>
              直接支払い
            </a>
          </button>
          <button className='bank'>
            <AccountBalanceIcon />
            <a href='/ticket' className='text-payment'>
              銀行による支払い
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PaymentPage;
