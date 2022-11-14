import React from 'react';

import Button from '@mui/material/Button';

import parking_img from './parking.jpg'

function Parking() {
    return(
        <div 
            // className={classes.root}
            style={{
                paddingTop: '80px',
                // backgroundImage: `url(${parking_img})`,
                // backgroundPosition: 'center',
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat'
            }}
        >
            <img
                    // className="d-block w-100"
                    src={parking_img}
                    alt="parking_img"
                    style={{padding: 15}}
                />
            <div style={{padding: '20px 0px 20px'}}>
                <Button variant="contained">
                    <h3>駐車場予約</h3>
                    </Button>
            </div>
            
        </div>
    )
}

export default Parking;