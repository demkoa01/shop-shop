import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";
import  { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        // if value of action is 'UPDATE_PRODUCTS' ,return a new state object with updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        
        // if value is 'UPDATE_CATEGORIES'
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        // if value is 'UPDATE_CURRENT_CATEGORY'
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

            // if value is none of these, don't update
            default:
                return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}
