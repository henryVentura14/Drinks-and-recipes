import React, { useContext, useState } from 'react';
import { ContextModal } from '../context/contextModal'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
const Recipe = ({ recipe }) => {
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const classNames = useStyles();

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const { saveIdRecipe, detailsRecipe, saveDetailsRecipe } = useContext(ContextModal)

    //muestra y formatea los ingredientes
    const showIngredients = detailsRecipe => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (detailsRecipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li>
                        {detailsRecipe[`strIngredient${i}`]}
                        {detailsRecipe[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredients;
    }

    if (!recipe) return
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
                <img
                    className="card-img-top"
                    src={recipe.strDrinkThumb}
                    alt={recipe.strDrink} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            saveIdRecipe(recipe.idDrink)
                            handleOpen()
                        }}
                    >Show recipe</button>
                    <Modal
                        open={open}
                        onClose={() => {
                            saveIdRecipe(null)
                            handleClose()
                            saveDetailsRecipe({})
                        }}
                    >
                        <div style={modalStyle} className={classNames.paper}>
                            <h2>{detailsRecipe.strDrink}</h2>
                            <h4 className="mt-4">Intructions</h4>
                            <p>{detailsRecipe.strInstructions}</p>
                            <img className="img-fluid my-4" src={detailsRecipe.strDrinkThumb} alt={detailsRecipe.strDrink} />
                            <h4>Ingredients and quantities</h4>
                            <ul>
                                {showIngredients(detailsRecipe)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recipe;