/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_PRODUCT, 
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT, 
} from '../types'

// each reducer has its own state

const initialState = {
  products: [],
  error: null,
  loading: false,
  editProduct: null,
  deleteProduct: null,
}

export default function(state = initialState, action){
  switch(action.type) {

    case GET_PRODUCTS: 
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload
      }
    
    case ADD_PRODUCT_SUCCESS: 
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      }

    case ADD_PRODUCT_ERROR: 
    case GET_PRODUCTS_ERROR:
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case GET_PRODUCTS_SUCCESS: 
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload
      }

    case EDIT_PRODUCT:
      return {
        ...state,
        editProduct: action.payload
      }

    case DELETE_PRODUCT: 
      return {
        ...state, 
        deleteProduct: action.payload
      }

    case DELETE_PRODUCT_SUCCESS: 
      return {
        ...state, 
        products: state.products.filter( product => product.id !== state.deleteProduct),
        deleteProduct: null
      }

    default: 
      return state;
  }
}