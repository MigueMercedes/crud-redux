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
  GET_ONE_PRODUCT,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR, 
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

// get product from endpoint
export function getProductsAction() {
  return async (dispatch) => {
    dispatch( getProducts() )

    try {
      setTimeout( async () => {
        const response = await axiosClient.get('/products')
        dispatch( getProductsSuccess(response.data) ) 
      }, 1000);
    } catch (error) {
      console.log(error)
      dispatch( getProductError ())
    }
  }
}

const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: true
})

const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
})

const getProductError = () => ({
  type: GET_PRODUCTS_ERROR,
  payload: true
})

// Select and edit product
export function getEditProductAction(product) {
  return async (dispatch) => {
    dispatch( getEditProduct(product) )
  }
}

const getEditProduct = product => ({
  type: GET_ONE_PRODUCT,
  payload: product
})

// edit a product in the API and state
export function editProductAction(product) {
  return async (dispatch) => {
    dispatch( editProduct() )
    
    try {
      await axiosClient.put(`/products/${product.id}`, product)
      dispatch( editProductSuccess(product))
    } catch (error) {
      console.log(error)
      dispatch( editProductError() )
    }
  }
}

const editProduct = () => ({
  type: EDIT_PRODUCT,
})

const editProductSuccess = product => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product
})

const editProductError = () => ({
  type: EDIT_PRODUCT_ERROR,
  payload: true
})

// Select and delete product
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch( deleteProduct(id) )

    try {
      await axiosClient.delete(`/products/${id}`)
      dispatch( deleteProductSuccess() )
      Swal.fire(
        'Deleted!',
        'Your product has been deleted.',
        'success'
        )
      } catch (error) {
      console.log(error)
      dispatch( deleteProductError() )
    }
  }
}

const deleteProduct = id => ({
  type: DELETE_PRODUCT,
  payload: id
})

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
})

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true
})


