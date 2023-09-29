import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function NewProduct() {

  const stateRedux = useSelector( state => state.products)
  const navigate = useNavigate()

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className='card'>
          {!stateRedux.editProduct || !stateRedux ? (
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

              <form>
                <div className='form-group'>
                  <label>Product Name</label>
                  <input 
                    type='text'
                    className='form-control'
                    placeholder='Enter Product'
                    value={stateRedux.editProduct.name}
                  />
                </div>

                <div className='form-group'>
                  <label>Product Price</label>
                  <input 
                    type='text'
                    className='form-control'
                    placeholder='Enter Price'
                    value={stateRedux.editProduct.price}
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

export default NewProduct
