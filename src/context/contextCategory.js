import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

//Creaando context
export const ContextCategory = createContext()

//Providers, donde se encuetran funciones y state
const ProviderCategory = props => {
  //Creamos state
  const [categories, saveCategory] = useState([])

  //Ejecutamos el request a la api
  useEffect(() => {
    const getCategory = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const result = await axios.get(url)
      saveCategory(result.data.drinks)
    }
    getCategory()
  },[])

  return (
    <ContextCategory.Provider value={{categories}}>
      {props.children}
    </ContextCategory.Provider>
  )
}
export default ProviderCategory
