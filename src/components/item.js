import React from 'react'

const Item  = ({book}) => {
  return (
    <div style = {{border: 'solid black'}}>
  
  <img src={book.img}></img>
  <h2 class="mt-4 text-sm text-gray-700">{book.title} </h2>
  <h3 class="mt-4 text-sm text-gray-700">{book.writer} </h3>
  <p class="mt-1 text-lg font-medium text-gray-900">{book.price}</p>
  </div>

   

   
  )
}

export default Item



/*  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
<div class="group relative">
<div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
  <img src={book.img} alt="" class="w-full h-full object-center object-cover lg:w-full lg:h-full"> </img>
</div>
<div class="mt-4 flex justify-between">
  <div>
    <h3 class="text-sm text-gray-700">
      <a href="#">
        <span aria-hidden="true" class="absolute inset-0"></span>
        {book.title}
      </a>
    </h3>
    <p class="mt-1 text-sm text-gray-500">{book.writer}</p>
  </div>
  <p class="text-sm font-medium text-gray-900"> {book.price} </p>
</div>
</div>
</div> 
*/
