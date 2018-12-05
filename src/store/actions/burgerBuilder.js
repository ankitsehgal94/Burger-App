import * as actionTypes from "./actionTypes"
import axios from '../../axios-orders';

export const addIngredient=(name)=>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    }
}

export const removeIngredient=(name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
}



export const setIngredient=(name)=>{
    return{
        type:actionTypes.SET_INGREDIENT,
        ingredientName:name
    }
}

export const fetchIngredientsFailed=()=>{
    return{
        type:actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients=()=>{
    return dispatch=>{
        axios.get('https://react-burger-161a2.firebaseio.com/ingredient.json')
        .then(response=>{
            dispatch(setIngredient(response.data));
            console.log(response.data)
            
        })
        .catch(error=>{
            dispatch(fetchIngredientsFailed())
        })
        
    }
}
