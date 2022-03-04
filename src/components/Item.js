import React from 'react'

function Item({image, stock, book_name, writer_name,gender,price}) {
  return (
    <div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    
    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={image} alt=""></img>
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {book_name}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{writer_name}</p>
            <p class="mt-1 text-sm text-gray-500">{gender}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">${price}</p>
        </div>
      

</div>
</div>

  )
}

export default Item