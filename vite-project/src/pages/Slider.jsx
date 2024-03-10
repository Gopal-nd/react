import React, { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
const Slider = () => {
    const [image, setImage] = useState([])
    const [curretSlide, setCurrentSlide] = useState(0)
    const [loading, setLoading] = useState(false)
   let url='https://picsum.photos/v2/list'

    async function fetchImages(url){
        try {
            setLoading(true)
            const response = await fetch(`${url}?page=1&limit=10`)
            const data = await response.json()
            if(data){
                setImage(data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(url !== '') fetchImages(url)
    },[url])

    function handleprev(){
        setCurrentSlide(curretSlide === 0 ?image.length -1 : curretSlide-1 )
    }
    function handlenext(){
        setCurrentSlide(curretSlide === image.length -1 ? 0 : curretSlide+1 )
    }
console.log(image)
if(loading ) return <div>Loading...</div>



  return (
    <div className='w-screen flex justify-center items-center mt-6'>
    <div className='relative flex justify-center items-center w-[650px] h-[450px]'>
    <BsArrowLeftCircleFill onClick={handleprev} className='absolute w-9 h-9 text-blue-600 backdrop-filter left-1 ' />
    {
        image && image.length ? 
        image.map((img,i)=>{
            return <img key={img.id}  src={img.download_url} alt={img.download_url} className={curretSlide ===i ? ' rounded-lg shadow-lg w-full h-full': ' hidden'} />
        }):null
    }
    <BsArrowRightCircleFill onClick={handlenext} className='absolute w-9 h-9 text-blue-600 backdrop-filter right-1 '/>
    <span className="flex absolute bottom-3">
  {image && image.length
    ? image.map((_, i) => (
        <button
          key={i}
          className={`w-7 h-8 rounded-full ${
            curretSlide === i ? 'bg-white' : 'bg-gray-500'
          }`}
          onClick={() => setCurrentSlide(i)}
        ></button>
      ))
    : null}
</span>

    </div>
    </div>
  )
}

export default Slider