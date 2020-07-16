import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import RecipeList from './components/RecipeList'

import ProviderCategory from './context/contextCategory'
import ProviderRecipes from './context/contextRecipes'
import ProviderIngredients from './context/contextIngredients'
import ProviderModal from './context/contextModal'

const App = () => {
  return (
    <ProviderCategory>
      <ProviderRecipes>
        <ProviderIngredients>
          <ProviderModal>
            <Header />
            <div className='container mt-5'>
              <div className='row'>
                <Form />
              </div>
              <RecipeList />
            </div>
          </ProviderModal>
        </ProviderIngredients>
      </ProviderRecipes>
    </ProviderCategory>
  )
}

export default App
