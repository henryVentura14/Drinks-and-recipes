import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

//Creaando context
export const ContextIngredient = createContext()

//Providers, donde se encuetran funciones y state
const ProviderIngredients = props => {
  //Creamos state
  const [ingredients, saveIngredient] = useState([])

  //Ejecutamos el request a la api
  useEffect(() => {
    const getCategory = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
      const result = await axios.get(url)
      saveIngredient(result.data.drinks)
    }
    getCategory()
  },[])

  return (
    <ContextIngredient.Provider value={{ingredients}}>
      {props.children}
    </ContextIngredient.Provider>
  )
}
export default ProviderIngredients