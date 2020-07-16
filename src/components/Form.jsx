import React, { useContext, useState } from 'react';
import { ContextCategory } from '../context/contextCategory'
import { ContextRecipe } from '../context/contextRecipes'
import { ContextIngredient } from '../context/contextIngredients'

const Form = () => {

    // states locales
    const [search, saveSearch] = useState({
        ingredient: '',
        category: ''
    })
    const [error, saveError] = useState(false)
    const { categories } = useContext(ContextCategory);
    const { ingredients } = useContext(ContextIngredient);
    const { searchRecipe, saveFetch } = useContext(ContextRecipe);
    // destructuring 
    const { ingredient, category } = search;

    //fucntion para leer contenidos
    const getDataRecipe = e => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSudmit = e => {
        e.preventDefault();

        if (ingredient.trim() === '' || category.trim() === '') {
            saveError(true)
        } else {
            saveFetch(true)
            searchRecipe(search)
        }
    }
    return (
        <form
            className="col-12"
            onSubmit={handleSudmit}
        >
            <fieldset className="text-center">
                <legend>Search by category and ingredient</legend>
            </fieldset>
            <div className="row mt-5">
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="ingredient"
                        onChange={getDataRecipe}
                    >
                        <option>Select ingredient</option>
                        {ingredients.map((item, i) => (
                            <option
                                key={i}
                                value={item.strIngredient1}>
                                {item.strIngredient1}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={getDataRecipe}
                    >
                        <option>Select category</option>
                        {categories.map((item, i) => (
                            <option
                                key={i}
                                value={item.strCategory}>
                                {item.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        className="btn btn-block btn-primary"
                        type="submit"
                        name=""
                        id=""
                        value="Search"
                    />
                </div>
            </div>
        </form>
    );
}

export default Form;