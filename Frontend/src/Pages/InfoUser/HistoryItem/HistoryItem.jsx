import React from 'react'
import './historyItem.scss'
import {FaMotorcycle} from 'react-icons/fa'

const HistoryItem = () => {
    const data= [
        {
          id:1,
          user: 'Ho Minh Hieu',
          timeIn: '13h30 19/10/2022',
          timeOut: '',
          licenseNum: '43-F1 39201',
          vehicleColor: 'Red',
          vehicleType: 'Air Blade 125/160'
        },
        {
            id:2,
            user: 'Ho Minh Hieu',
            timeIn: '14h20 18/10/2022',
            timeOut: '16h56 18/10/2022',
            licenseNum: '43-F1 39201',
            vehicleColor: 'Red',
            vehicleType: 'Air Blade 125/160 '
          },
        {
            id:3,
            user: 'Ho Minh Hieu',
            timeIn: '10h27 17/10/2022',
            timeOut: '16h14 17/10/2022',
            licenseNum: '43-B1 92319',
            vehicleColor: 'Black',
            vehicleType: 'Wave Alpha 110cc'
          },
          {
            id:4,
            user: 'Ho Minh Hieu',
            timeIn: '07h57 14/10/2022',
            timeOut: '11h01 14/10/2022',
            licenseNum: '43-G1 20103',
            vehicleColor: 'Grey',
            vehicleType: 'SH Mode 125cc'
          },
          {
            id:5,
            user: 'Ho Minh Hieu',
            timeIn: '08h29 12/10/2022',
            timeOut: '10h51 12/10/2022',
            licenseNum: '43-G1 20103',
            vehicleColor: 'Grey',
            vehicleType: 'SH Mode 125cc'
          },
    ]
  return (
        <div className='bg-histories'>
            {React.Children.toArray(
                data.map(d =>(
                    <div className="history-item" style={d.timeOut==""?{border:"3px red solid"}:{border:"3px green solid"}}>
                        <div className="vehicle-img">
                            <FaMotorcycle size={60} color={d.vehicleColor} className='icon-moto' />
                            <div className="vehicle-type"><b>Vehicle Type:</b> <i>{d.vehicleType}</i></div>
                        </div>
                        <div className="history-info">
                            <div className="vehicle-number"><b>License Plates:</b> <i>{d.licenseNum}</i></div>
                            <div className="timeIn"><b>Check In:</b> <i>{d.timeIn}</i></div>
                            <div className="timeOut"><b>Check Out:</b> <i>{d.timeOut==""?"In Parking":d.timeOut}</i></div>
                        </div>
                    </div>
                )))}
        </div>
  )
}

export default HistoryItem