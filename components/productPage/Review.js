import React from 'react'

export default function Review({product}) {

    const avis = product.comments
        
    console.log(product)

   const commentaire =  avis.map((review, i) => {
    return (
        <div className='border border-gray-950 w-72 h-80 px-5 py-2 flex flex-col justify-between rounded-md'>
            <h1 className="text-3xl" >{review.titre}</h1>
            <p className='pt-10'>{review.message}</p>
            <div className='flex flex-row'>
            <p className='font-bold pt-10'>@{review.user}</p>
            <p>{review.note}/5</p>
            </div>
        
        </div>
    )
   })
    
  return (
    <div className="flex gap-10 mx-8 my-12 overflow-hidden">
        {commentaire}
    </div>
  )
}
