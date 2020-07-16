import React, { useContext } from 'react';
import { ContextRecipe } from '../context/contextRecipes'
import Recipe from './Recipe'
const RecipeList = () => {
    //extraer recetas
    const { recipes } = useContext(ContextRecipe)
    let recipeList = recipes
        && recipes.map(recipe => (
            <Recipe
                key={recipe.idDrink}
                recipe={recipe} />
        ))

    return (
        <div className="row mt-5">
            {recipeList}
        </div>
    );
}

export default RecipeList;