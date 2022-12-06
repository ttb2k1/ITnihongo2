import React from 'react'
import './changePWForm.scss'
import {MdLock} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import axios from 'axios'

const ChangePWForm = ({changePW,removeChangePW,idUser}) => {
    const checkData= async () =>{ 
        let password = document.getElementById("passwordInp").value
        let npassword = document.getElementById("npasswordInp").value
        let repassword = document.getElementById("repasswordInp").value
        if(password==""||npassword==""||repassword==""){
            alert("Please enter all fields")
        }
        else if(npassword!=repassword){
            alert("Please check again new password and confirm password")
        }
        else if(password==npassword){
            alert("You don't need to change password because it's same")
        }
        else{
            const data = {
                user_id: idUser,
                old_password: password,
                new_password: repassword
            }
            const val = await axios.put("/account/change_password", data);
            if(val.data.success==true){
                removeChangePW()
                removeData()
            }else{
                alert(val.data.data)
            }
        }
    }
    const removeData = () => {
        document.getElementById("passwordInp").value=""
        document.getElementById("repasswordInp").value=""
        document.getElementById("npasswordInp").value=""
        return 0;
    }
    const _handlerClickEnter =(e) => {
        if(e.key === 'Enter'){
            checkData();
        }
    }
  return (
    <div className={changePW}>
    <div className="modal-changePW">
        <div className="close-btn">
            <AiFillCloseCircle className='cls-changePW icon' onClick={function(e){removeChangePW();removeData()}} size={25}/>
        </div>
        <div className="text-box" >
            <input className='input100' autoComplete='off' onKeyDown={_handlerClickEnter} type="password" placeholder="Your's password" id="passwordInp"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <MdLock className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off' onKeyDown={_handlerClickEnter} type="password" placeholder='New password' id="npasswordInp"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <MdLock className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off' type="password" onKeyDown={_handlerClickEnter} placeholder='Confirm password' id="repasswordInp"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <MdLock className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className='container-login100'>
            <button className='login100-form-btn' onClick={function(e) {checkData()}}>Save it</button>
        </div>
    </div>
    </div>
  )
}

export default ChangePWForm