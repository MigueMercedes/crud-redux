import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

// Redux
import { useDispatch } from "react-redux"
import { deleteProductAction, createProductAction, editProductAction  } from "../actions/productsActions";

function Product({product}) {

  const { name, price, id } = product;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Confirm delete product
  const confirmDeleteProduct = id => {
    
    //ask to user
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // send to action
        dispatch( deleteProductAction(id) )
      }
    }) 
  } 

  // Function to redirect the user on a schedule automatically
  const redirectToEditProduct = (product) => {
    dispatch( editProductAction(product) )
    navigate(`/products/edit/${product.id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td className="font-weight-bold"><span>$ {price}</span></td>
      <td className="acciones">
        <button 
          type="button"
          className="btn btn-primary mr-2"
          onClick={ () => redirectToEditProduct(product) }
        >
          Edit
        </button>
        
        <button
          type="button"
          className="btn btn-danger"
          onClick={ () => confirmDeleteProduct(id) }
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Product