import React from 'react'
import './editForm.scss'
import {MdLock} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {IoIosMail,IoMdLink} from 'react-icons/io'
import {BsTelephoneFill} from 'react-icons/bs'

const EditForm = ({editInfo,removeEditInfo}) => {
  return (
    <div className={editInfo}>
    <div className="modal-editInfo">
        <div className="close-btn">
            <AiFillCloseCircle className='cls-editInfo icon' onClick={function(e){removeEditInfo()}} size={25}/>
        </div>
        <div className="text-box" >
            <input className='input100' autoComplete='off'  type="text" placeholder="Username" id="username"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <FaUserCircle className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off'  type="email" value='hominhhieu@gmail.com' id="email" disabled></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <IoIosMail className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off'  type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Phone Number' required></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <BsTelephoneFill className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <input className='input100' autoComplete='off' type="url" pattern="https://.*" placeholder='Link Image' id="image"></input>
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
                <IoMdLink className='symbol' aria-hidden="true"/>
            </span>
        </div>
        <div className="text-box">
            <div className='gender-btn'>
                <input type="radio" className='radio-btn' name="drone" value="Male" checked/>Male
                <input type="radio" className='radio-btn' name="drone" value="Female"/>Female
            </div>
        </div>
        <div className='container-login100'>
            <button className='login100-form-btn' onClick={function(e) {removeEditInfo()}}>Save it</button>
        </div>
    </div>
    </div>
  )
}

export default EditForm