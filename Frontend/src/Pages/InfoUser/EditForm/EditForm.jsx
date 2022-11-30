import React,{useEffect,useState} from 'react'
import './editForm.scss'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {IoIosMail,IoMdLink} from 'react-icons/io'
import {BsTelephoneFill} from 'react-icons/bs'
import axios from 'axios'

const EditForm = ({editInfo,removeEditInfo,datauser}) => {
    const [reset, setReset] = useState(true);
    useEffect(()=>{
        if(datauser.data.sex==1) document.getElementById('male').checked = true
        else document.getElementById('female').checked = true
    },[reset])
    const checkData= async () =>{ 
        let username = document.getElementById("username").value
        let phone = document.getElementById("phone").value
        const data = {
            user_id: datauser.data.user_id,
            email: datauser.data.email,
            password: datauser.data.password,
            name:username==""?datauser.data.name:username,
            sex: document.getElementById('male').checked?1:0,
            phone: phone==""?datauser.data.phone:phone,
            role: datauser.data.role
        }
        try{
            const val = await axios.put("/user/updateuser", data);
            if(val.status===200){
                window.location.reload();
            }
        }catch(err){
            if(err.response){
                console.log(err.response.data);
            }
        }
    }
    const removeData = () => {
        setReset(!reset)
        document.getElementById("username").value=""
        document.getElementById("phone").value=""
        document.getElementById("image").value=""
        return 0;
    }
    const _handlerClickEnter =(e) => {
        if(e.key === 'Enter'){
            checkData();
        }
    }
  return (
    <div className={editInfo}>
    <div className="modal-editInfo">
        <div className="close-btn">
            <AiFillCloseCircle className='cls-editInfo icon' onClick={function(e){removeEditInfo();removeData()}} size={25}/>
        </div>
        <div className="text-box" >
            <input className='input100' autoComplete='off' onKeyDown={_handlerClickEnter} type="text" placeholder={datauser.data.name} id="username"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <FaUserCircle className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off'  type="email" value={datauser.data.email} id="email" disabled></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <IoIosMail className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off' onKeyDown={_handlerClickEnter} type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder={datauser.data.phone} required></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <BsTelephoneFill className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off' onKeyDown={_handlerClickEnter} type="url" pattern="https://.*" placeholder='Link Image' id="image"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <IoMdLink className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <div className='gender-btn'>
                <input type="radio" className='radio-btn' name="drone" value="Male" id="male"/>Male
                <input type="radio" className='radio-btn' name="drone" value="Female" id="female"/>Female
            </div>
        </div>
        <div className='container-login100'>
            <button className='login100-form-btn' onClick={function(e) {checkData()}}>Save it</button>
        </div>
    </div>
    </div>
  )
}

export default EditForm