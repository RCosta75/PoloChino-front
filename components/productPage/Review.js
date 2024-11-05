import React from 'react'

export default function Review({product}) {

    const avis = product.comments
        
    console.log(product)

   const commentaire =  avis.map((review, i) => {
    return (
        <div className='border border-gray-950 w-72 h-80 px-5 flex flex-col justify-between rounded-md'>
            <h1 className="text-3xl" >{review.titre}</h1>
            <p className='pt-10'>{review.message}</p>
            <p className='font-bold pt-10'>@{review.user}</p>
        
        
        </div>
    )
   })
    
  return (
    <div className="flex gap-10 mx-8 my-12 overflow-hidden">
        {commentaire}
    </div>
  )
}
