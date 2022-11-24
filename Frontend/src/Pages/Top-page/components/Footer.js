import { textAlign } from '@mui/system';
import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    
    <div  style={{ 
            padding: '50px 0px 50px',
            backgroundColor: 'rgba(0, 0, 0, 0.05)' ,
            textAlign: 'center'
            }}>
            © 2022 Copyright:
            <a  href='#'>
            ITNihongo
            </a>
    </div>
  );
}