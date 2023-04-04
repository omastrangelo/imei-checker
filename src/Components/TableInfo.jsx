import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../Assets/Button.css"

const MySwal = withReactContent(Swal)

const TableInfo = () =>{
  //1 Configurar los Hooks

  const [products,setProducts] = useState([])


  //2 Referenciar a la db de firestore
  const productsCollection = collection (db,"imei")


  //3 Funcion para mostrar los documentos
  const getProducts = async () =>{
    const data = await getDocs (productsCollection)
    //console.log(data.docs)
  
   setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))

   //console.log(products)
  }

  //4 Funcion para eliminar los documentos

  const deleteProduct = async(id) =>{
    const ProductDoc = doc(db,"imei", id)
    await deleteDoc (ProductDoc)
    getProducts()

  }


  //5 funcion para la confirmacion de eliminar con Sweet alert.
    const confirmDelete=(id)=>{
      Swal.fire({
        title: 'Estás Seguro/a?',
        text: "Una vez eliminado no se podrá revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct (id) //llamamos a la funcion eliminar.
          Swal.fire(
            'Eliminado!',
            'La informacion fue eliminada.',
            'success'
          )
        }else if (
    result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire(
        'Cancelado',
        'La informacion no fue eliminada',
        'error'
      )
      }
      

    })
  }
  //6 uso de useEffect

useEffect(()=>{
  getProducts()
},[])


  //devolver la vista

  return(
      <>
      <div className="container">
      <div className="row">
      <div className="col">
      <div className="d-grid gap-2">
        <Link to={"/create"} className="btn btn-secondary mt-2 mb-2">CREAR</Link>
      </div>
      <table className='table table-white table hover'>
        <thead>
          <tr>
            <th>Imei</th>
            <th>Ipp</th>
            <th>Departamento Judicial</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=>(
            <tr key={product.id}>
              <td>{product.imei}</td>
              <td>{product.ipp}</td>
              <td>{product.departamento}</td>
              <td className='buttonContainer'>
                <Link to={`/edit/${product.id}`} className="btn btn-primary">Editar</Link>
                <button onClick={()=>{confirmDelete(product.id)}} className="btn btn-danger">Eliminar</button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
      </div>
      </div>
      </div>
      </>

  )}

export default TableInfo
