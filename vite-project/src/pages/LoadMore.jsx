import React, { useEffect, useState } from 'react'

const LoadMore = () => {

    const [ loading, setLaoding ] = useState(false)
    const [ product, setProduct] = useState([])
    const [count, setCount] = useState(0)
    const [ disableit , setDisable] = useState(false)


    async function fetchproducts(){
        try {
            setLaoding(true)
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count ===0 ?0:count*20}`) 

            const result = await response.json()
            console.log(result)

            if(result && result.products && result.products.length){
                setProduct((prev)=> [...prev, ...result.products])
                console.log(result.products)
                setLaoding(false)
            }
            
        } catch (error) {
            console.log(error)
            setLaoding(false)
        }
    }

    // console.log(product)
  

 // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
    fetchproducts();
  }, [count]);

  
  
  useEffect(()=>{
    if ( product.length === 60 ) setDisable(true);
    console.log(disableit)
   },[product])

   console.log(product)
  if(loading)
    return <p>Loading ...</p>
  return (
    <div className='flex  flex-col justify-center items-center gap-2'>
    <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
        {
            product && product.length >0 ? product.map((item)=>(
                <div key={item.id + Math.floor(Math.random()* 1000000)} className='p-6 border flex flex-col border-blue-600 gap-6'> 
                <img src={item.thumbnail
} alt={item.title} width={100} height={100}/>
                <p  className='text-center'>{item.title}</p>
                </div>
            )):null
        }
    </div>
    <div className='felx justify-center items-center'>
        <button className='border border-blue-700 p-5 text bg-blue-500 rounded-lg' onClick={ ()=> setCount(count + 1)} disabled={disableit}>Load more Products</button>
        {
            disableit && (<p>You Reched 100 products</p>)
        }
    </div>

    </div>
  )
}

export default LoadMore