import React from 'react'

function NewProduct() {
	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className='card'>
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
                />
              </div>

              <div className='form-group'>
                <label>Product Price</label>
                <input 
                  type='text'
                  className='form-control'
                  placeholder='Enter Price'
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
				</div>
			</div>
		</div>
	)
}

export default NewProduct
