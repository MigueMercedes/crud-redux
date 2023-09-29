import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editProductAction } from '../actions/productsActions'

function EditProduct() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [product, setProduct] = useState({
    name: '',
    price: ''
  })
  
  const productToEdit = useSelector( state => state.products.editProduct)
  
  useEffect(() => {
    setProduct(productToEdit)
  }, [productToEdit]);

  const onChangeForm = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value 
    })
  }

  const submitEditProduct = e => {
    e.preventDefault()

    dispatch( editProductAction(product))
    navigate('/')
  }

  const { name, price } = product
  

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className='card'>
          {!productToEdit ? (
            <div 
              className='d-flex flex-column justify-content-center align-content-center w-50 mx-auto' 
              style={{height: "400px"}}>
              <h3 className='text-danger text-center font-weight-bold display-4'>Error 404</h3>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={ () => navigate('/')}
              >
                Back to home
              </button>
            </div>
          ) : (
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Edit Product
              </h2>

              <form
                onSubmit={submitEditProduct}
              >
                <div className='form-group'>
                  <label>Product Name</label>
                  <input 
                    type='text'
                    className='form-control'
                    placeholder='Enter Product'
                    name='name'
                    value={name}
                    onChange={onChangeForm}
                  />
                </div>

                <div className='form-group'>
                  <label>Product Price</label>
                  <input 
                    type='text'
                    className='form-control'
                    placeholder='Enter Price'
                    name='price'
                    value={price}
                    onChange={onChangeForm}
                  />
                </div>

                <button 
                  type='submit'
                  className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                >
                  Save
                </button>
              </form>
            </div>
          )}
				</div>
			</div>
		</div>
	)
}

export default EditProduct
