import {
  ADD_PRODUCT, 
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR, 
} from '../types'
import axiosClient from '../config/axios'
import Swal from 'sweetalert2'

// create a new product
export function createProductAction(product) {
  return async (dispatch) => {
    dispatch( addProduct() )

    try {
      // insert into API endpoint
      await axiosClient.post('/products', product)

      // if already successfully, update the state
      dispatch( addProductSuccess(product) )

      // Alert success
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ready',
        text: 'Product added successfully',
        showConfirmButton: false,
        timer: 1500,
      })

    } catch (error) {
      console.log(error)

      // if something went wrong, change state
      dispatch( addProductError(true) )

      // Alert failed
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error',
        text: 'Went wrong, try again',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true
})

// if product added successfully
const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
})

// if was a error
const addProductError = status => ({
  type: ADD_PRODUCT_ERROR,
  payload: status
})