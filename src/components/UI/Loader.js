import React, { useEffect, useState } from 'react'

const Loader = () => {

  const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     const timer = setTimeout(()=>{
//         setLoading(false)
//     },3000);

//     return () => clearTimeout(timer)
//   },[])

  return (
    loading && (<div className='preloader'></div>)
  )
}

export default Loader