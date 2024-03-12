import React, { useState } from 'react'
import QRCode from 'react-qr-code'
const Qrcode = () => {
    const [input ,setInput] = useState('')
    const [qrcode, setQrcode] = useState('')

    function handelSubmit(){
            setQrcode(input)
    }
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
        <div className='flex gap-28 mt-20'>
            <input type="text" className='text-black px-4 py-2 rounded-xl  border-blue-800 border-4' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button disabled={input && input.trim() !== ""?false:true} className='px-4 py-2 bg-blue-400 rounded-lg' onClick={handelSubmit}>Genrate</button>
        </div>
        <div className='  rounded-xl border-blue-800 border-4 p-6'>
            <QRCode id="qr" value={qrcode} size={400} bgcolor = 'white'/>
         </div>
    </div>
  )
}

export default Qrcode