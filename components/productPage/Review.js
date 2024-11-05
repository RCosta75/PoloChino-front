import React from 'react'

export default function Review({product}) {

    const avis = product.comments
        
    console.log(product)

   const commentaire =  avis.map((review, i) => {
    return (
        <div className='border border-gray-950 w-72 h-80 px-5 py-2 flex flex-col justify-between rounded-md'>
            <h1 className="text-3xl" >{review.titre}</h1>
            <p className='pt-10'>{review.message}</p>
            
            <div className='flex flex-row justify-between items-center align-middle'>
            <p className='font-bold'>@{review.user.username}</p>
            <p>{review.note}/5</p>
            </div>
        
        </div>
    )
   })
    
  return (
    <div className="flex gap-10 mx-8 my-12 overflow-hidden">
        <div className='border border-gray-950 w-72 h-80 px-5 py-2 flex flex-col justify-between rounded-md'>
            <input placeholder='TITLE' className='mb-10 pl-24 border border-slate-900 rounded-sm'></input>
            <textarea placeholder=' Right Your Comment Here'  className=' py-10 px-5 h-full border border-slate-900'></textarea>
        </div>
        {commentaire}
    </div>
  )
}
