import { BrowserMultiFormatReader } from '@zxing/browser';
import QrScanner from 'qr-scanner';
import React, { useEffect, useRef, useState } from 'react'

export const QR_Scan = () => {
    const videoRef = useRef(null);
    const[QrCode, setQrCode] = useState(null);
    const codeReader = useRef(new BrowserMultiFormatReader());


    const stopCamera = ()=>{
        const stream = videoRef.current?.srcObject;
        stream?.getTracks().forEach(track => track.stop());
        videoRef.current.srcObject=null;
    }

    useEffect(()=>{

        if(!videoRef.current) return;

        codeReader.current.decodeFromVideoDevice("user", videoRef.current, (result, error)=>{
            if(result && result.getText()){
                setQrCode(result.getText());
            }
            if(error){
                console.log(error);
            }
        }).catch((err)=>{
               console.log("QR scneer Error: ",err);
        })

        return() =>{
           stopCamera();
        }
    },[])

  return (
    <div>
        <h1>QR-Scanner</h1>

        {/* camera view*/}
        <video ref={videoRef} style={{width:"300px", border:"2px solid black"}}/>

        {/* display scanner qr */}
        {QrCode && (
            <div>
                <h2>Scanner QR Code: {QrCode}</h2>
            </div>
        )}
    </div>
  )
}
