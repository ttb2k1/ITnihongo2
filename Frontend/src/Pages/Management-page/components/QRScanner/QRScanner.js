import React, {Component,useState, useEffect }from 'react'
import QrReader from 'react-qr-scanner'
import './QRScanner.css'
import CarInfo from "../CarInfo/CarInfo";
let PreviousData = null;
class QRScanner extends Component {
    constructor(props){
        super(props)
        this.state = {
            delay: 1000,
            result: 'No result',
        }
        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data){
       if(data!=null)
       {
           if(data.text != PreviousData)
           {
               PreviousData = data.text;
               this.setState({
                   result: data,
               });
           }
       }
    }
    handleError(err){
        console.error(err)
    }
    render(){
        const previewStyle = {
            height: 720,
            width: 1280,
        }
        return(
            <div className="main-page">
                <div className="QR_screen">
                    <QrReader
                        className="QR"
                        delay={this.state.delay}
                        style={previewStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                </div>
                <CarInfo
                    key = {this.state.result}
                />
            </div>
        )
    }
}
export default QRScanner;