import ItemList from './itemList'
import { useEffect, useState } from 'react'
import books from './itemList'



const ItemlistContainer = () => {

  const [contador, setContador] = useState(0)


  useEffect(() => {
    getBooks ()
    console.log('ñia');
    return () => {
    console.log('ñia2');

     }

 }, [])
   const getBooks = () => {
     const getBooksPromise = new Promise( (resolve) => {
      setTimeout(() => {
            resolve(books)
     },5000);

   })

     getBooksPromise.then ( () => {
       <ItemList></ItemList>
     })


   }






     }
     
export default ItemlistContainer