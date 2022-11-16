import React from 'react'
import './changePWForm.scss'
import {MdLock} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'

const ChangePWForm = ({changePW,removeChangePW}) => {
  return (
    <div className={changePW}>
    <div className="modal-changePW">
        <div className="close-btn">
            <AiFillCloseCircle className='cls-changePW icon' onClick={function(e){removeChangePW()}} size={25}/>
        </div>
        <div className="text-box" >
            <input className='input100' autoComplete='off'  type="password" placeholder="Your's password" id="passwordInp"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <MdLock className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off'  type="password" placeholder='New password' id="npasswordInp"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <MdLock className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off' type="password" placeholder='Confirm password' id="repasswordInp"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <MdLock className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className='container-login100'>
            <button className='login100-form-btn' onClick={function(e) {removeChangePW()}}>Save it</button>
        </div>
    </div>
    </div>
  )
}

export default ChangePWForm