import React, { useEffect, useState } from 'react'
import './historyItem.scss'
import {FaMotorcycle} from 'react-icons/fa'
import axios from 'axios'

const HistoryItem = ({idUser}) => {
    const [data, setData] = useState(null)
    useEffect(()=>{
      axios.post('/history/detailVeh',{user_id: idUser}).then((response)=>{
        setData(response.data);
      })
    },[])
    if(data){
      console.log(data)
    return (
          <div className='bg-histories'>
              {React.Children.toArray(
                  data.data.map(d =>(
                      <div className="history-item" style={d.check_out==""?{border:"3px red solid"}:{border:"3px green solid"}}>
                          <div className="vehicle-img">
                              <FaMotorcycle size={60} color={d.vehicle_color} className='icon-moto' />
                              <div className="vehicle-type"><b>Vehicle Type:</b> <i>{d.vehicle_type}</i></div>
                          </div>
                          <div className="history-info">
                              <div className="vehicle-number"><b>License Plates:</b> <i>{d.vehicle_plates}</i></div>
                              <div className="timeIn"><b>Check In:</b> <i>{new Date((new Date(d.check_in))).toLocaleTimeString()+" "+new Date((new Date(d.check_in))).toLocaleDateString('fr-CA')}</i></div>
                              <div className="timeOut"><b>Check Out:</b> <i>{d.check_out==""?"In Parking":new Date((new Date(d.check_out))).toLocaleTimeString()+" "+new Date((new Date(d.check_out))).toLocaleDateString('fr-CA')}</i></div>
                          </div>
                      </div>
                  )))}
          </div>
    )      
  }
}

export default HistoryItem