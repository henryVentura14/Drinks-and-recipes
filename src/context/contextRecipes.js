import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

//Creaando context
export const ContextRecipe = createContext()

//Providers, donde se encuetran funciones y state
const ProviderRecipes = props => {
  //Creamos state
  const [recipes, saveRecipes] = useState([])
  const [fetch, saveFetch] = useState(false)
  const [search, searchRecipe] = useState({
    ingredient: '',
    category: ''
  })
  const { ingredient, category } = search
  //Ejecutamos el request a la api
  useEffect(() => {
    if (fetch) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
        const result = await axios.get(url)
        saveRecipes(result.data.drinks)
      }
      getRecipes()
      saveFetch(false)
    }
  }, [search])

  return (
    <ContextRecipe.Provider value={{ recipes, searchRecipe, saveFetch }}>
      {props.children}
    </ContextRecipe.Provider>
  )
}
export default ProviderRecipes
