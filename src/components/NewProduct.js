import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Redux Actions
import { createProductAction } from '../actions/productsActions'
import { ClipLoader } from 'react-spinners'

const override = {
	display: 'block',
	margin: '4rem auto',
	borderColor: '#FF7851'
}

function NewProduct() {
	// state of the component
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)

	// useDispatch is for create a function
	const dispatch = useDispatch()

  // create redirection 
  const navigate = useNavigate()

	// Access the store state
	const stateRedux = useSelector((state) => state.products)

	// call the action
	const addProduct = (product) => dispatch(createProductAction(product))

	// when the user clic on a new product
	const submitNewProduct = (e) => {
		e.preventDefault()

		// valid form
		if (name.trim === '' || price <= 0) return
		// if not a errors

		// create a new product
		addProduct({
			name,
			price
		})

    // Redirect to the home page
    navigate('/')
	}

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">New Producto</h2>

						<form onSubmit={submitNewProduct}>
							<div className="form-group">
								<label>Product Name</label>
								<input
									type="text"
									className="form-control"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="Enter Product"
								/>
							</div>

							<div className="form-group">
								<label>Product Price</label>
								<input
									type="number"
									className="form-control"
									name="price"
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									placeholder="Enter Price"
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
							>
								Add Product
							</button>
						</form>

						{stateRedux.loading && (
							<ClipLoader
								cssOverride={override}
								size={100}
								aria-label="Loading Spinner"
							/>
						)}

            {stateRedux.error && (
              <p 
                className='alert alert-danger text-center p-2 mt-3'
              >
                it seems there was an error
              </p>
            )}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewProduct
