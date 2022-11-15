import React,{useState} from 'react'
import Header from '../../Components/Header_home-page/Header-home-page'
import './infoUser.scss'
import {FaUserCircle} from 'react-icons/fa'
import {MdEmail,MdVerifiedUser} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import HistoryItem from './HistoryItem/HistoryItem'
import EditForm from './EditForm/EditForm'
import ChangePWForm from './ChangePWForm/ChangePWForm'

const InfoUser = () => {
    const handleCopyTextFromParagraph = (paragraph) => {
        const cb = navigator.clipboard;
        cb.writeText(paragraph).then(() => alert(`"${paragraph}" copied in clipboard`));
    }
    const [editInfo, setEditInfo]= useState('editInfo')
    const [changePW, setChangePW]= useState('changePW')
   
    const showEditInfo = () => {
        setEditInfo('editInfo activeEditInfo')
    }
    const removeEditInfo = () => {
        setEditInfo('editInfo')
    }
    const showChangePW = () => {
        setChangePW('changePW activeChangePW')
    }
    const removeChangePW = () => {
        setChangePW('changePW')
    }

    return (
      <body>
        <Header/>
        <div className='bg-info-user'>
            <div className="bg-container">
                <div className="bg-info">
                    <div className="top-info">
                        <div className='ava-user' >
                            <img src='https://firebasestorage.googleapis.com/v0/b/musicupload-7dde0.appspot.com/o/Image%2F63406b717cb39ae5b571be878173d198.jpg?alt=media&token=30ebf07e-c53c-4fd4-905a-fa9202715eda'/>
                        </div>
                        <div className="btn-info">
                            <div className="edit-user" onClick={showEditInfo}>Edit</div>
                            <div className="change-password" onClick={showChangePW}>Password</div>
                        </div>
                    </div>
                    <div className="body-info">
                        <div className="info-line">
                            <div className="title"><FaUserCircle className='icon'/>Username</div>
                            <div className="data">HoMinhHieu</div>
                        </div>
                        <div className="info-line">
                            <div className="title"><MdEmail className='icon'/>Email</div>
                            <div className="data" onClick={(e) => handleCopyTextFromParagraph("hominhhieu@gmail.com")} defaultValue="1">hominhhieu@gmail.com</div>
                        </div>
                        <div className="info-line">
                            <div className="title"><BsTelephoneFill className='icon'/>Phone</div>
                            <div className="data" onClick={(e) => handleCopyTextFromParagraph("0928123456")}>0928123456</div>
                        </div>
                        <div className="info-line">
                            <div className="title"><MdVerifiedUser className='icon'/>Gender</div>
                            <div className="data">Male</div>
                        </div>
                    </div>
                </div>
                <div className="bg-history">
                    <div className="history-container">
                        <div className="title-history">History</div>
                        <HistoryItem />
                    </div>
                </div>
            </div>
        </div>
        <EditForm editInfo={editInfo} removeEditInfo={removeEditInfo}/>
        <ChangePWForm changePW={changePW} removeChangePW={removeChangePW}/>
      </body>
    )
}

export default InfoUser