import React, { useState } from "react";

const RandomColor = () => {
    const [typeOfColor, setTypeofColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function genrateColor(){
        // if(typeOfColor === 'hex'){
        //     setColor('#'+Math.floor(Math.random()*16777215).toString(16))
        // }else{
        //     setColor(`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`)
        // }
























        if(typeOfColor === 'hex'){
            setColor("#"+Math.floor(Math.random()*16777216).toString(16))
        }else{
            setColor('rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')')
        }


    }
  return (
    <div className="flex flex-col justify-center items-center p-4 w-screen h-screen" style={{background:color}} >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={()=>setTypeofColor('hex')}>
        cerate HEX Color
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={()=>setTypeofColor('rgb')}>
        create RGB Color
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"onClick={genrateColor}>
        Genrate Color
      </button>

      <h1 className="mt-10 font-bold text-7xl ">{color}</h1>
    </div>
  );
};

export default RandomColor;
