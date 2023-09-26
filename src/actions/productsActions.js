import {
  ADD_PRODUCT, 
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR, 
} from '../types'

// create a new product
export function createProductAction(product) {
  return () => {
    console.log('where actions', product)
  }
}