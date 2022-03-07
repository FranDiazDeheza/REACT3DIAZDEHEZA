import React, { useEffect } from 'react'

const SpeciesList = () => {

useEffect(() => { 
    getSpecies()

 }
 ,[])


const getSpecies = () => {
    const URL = "https://swapi.dev/api/species/"
    fetch(URL)
    .then((response) => {return response.json()})
    .then((data) => {console.log (data)})

}


  return (
    <div>SpeciesList</div>
  )
}

export default SpeciesList