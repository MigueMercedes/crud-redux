import React, { Fragment, useEffect } from 'react'
import Product from './Product'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getProductsAction } from '../actions/productsActions'
import { ClipLoader } from 'react-spinners'

const override = {
	display: 'block',
	margin: '4rem auto',
}

function Products() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    // request API
    const loadProducts = () => dispatch( getProductsAction() )
    loadProducts()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // Get state
  const products = useSelector( state => state.products)

  return (
		<Fragment>
			<h2 className="text-center my-5">Products List</h2>

			{products.error && (
				<p className="font-weight-bold alert alert-danger text-center mt-4">
					Was a error
				</p>
			)}

			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.products.length === 0 && products.loading ? (
            <ClipLoader
              cssOverride={override}
              size={100}
              aria-label="Loading Spinner"
            />
          ) : products.products.length !== 0 && !products.loading ? (
            products.products.map( product => (
              <Product 
                key={product.id} 
                product={product} 
              />
            ))
          ) : (
            <tr className="alert alert-warning text-center">
              <td colSpan="3">There are no products</td>
            </tr>
          )}
				</tbody>
			</table>
		</Fragment>
	)
}

export default Products