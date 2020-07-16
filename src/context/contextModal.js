import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

//Creaando context
export const ContextModal = createContext()

//Providers, donde se encuetran funciones y state
const ProviderModal = props => {
  //Creamos state
  const [idRecipe, saveIdRecipe] = useState(null)
  const [detailsRecipe, saveDetailsRecipe] = useState({})
  //Ejecutamos el request a la api
  useEffect(() => {
    if (!idRecipe) return
    const getRecipe = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
      const result = await axios.get(url)
      saveDetailsRecipe(result.data.drinks[0])
    }
    getRecipe()
  }, [idRecipe])

  return (
    <ContextModal.Provider value={{ detailsRecipe, saveIdRecipe, saveDetailsRecipe }}>
      {props.children}
    </ContextModal.Provider>
  )
}
export default ProviderModal
