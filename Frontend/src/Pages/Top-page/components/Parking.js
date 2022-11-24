import React from 'react';

import Button from '@mui/material/Button';
import parking_img from './parking1.jpg'

function Parking() {
    return(
        <div 
            // className={classes.root}
            style={{
                // paddingTop: '0px',
                // backgroundImage: `url(${parking_img})`,
                // backgroundPosition: 'center',
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat'
            }}
        >
            <div style={{padding: '5px 0px 5px'}}>
                <Button variant="contained">
                    <h3>駐車場予約</h3>
                    </Button>
            </div>
            <img
                    // className="d-block w-100"
                    src={parking_img}
                    alt="parking_img"
                    style={{padding: 0}}
                />
            
            
        </div>
    )
}

export default Parking;