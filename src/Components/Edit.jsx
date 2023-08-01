import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import "../Assets/Button.css"

const Edit = ()=>{
    const [ departamento, setDepartamento ] = useState('')
    const [ ipp, setIpp] = useState(0)
    const[imei,setImei] = useState (0)

    const navigate = useNavigate()

    const {id} = useParams()

    const update = async (e)=>{
        e.preventDefault()
        const product = doc(db,"imei",id)
        const data= {
            departamento: departamento,
            ipp: ipp,
            imei: imei,
        }
        await updateDoc (product,data)
        navigate("/table")
    }

    const getProductById= async (id)=>{
        const product = await getDoc(doc(db,"imei",id))
        if(product.exists()){
setDepartamento(product.data().departamento)
setIpp(product.data().ipp)
setImei(product.data().imei)
        }else{
            console.log("el imei no existe")
        }
    }
useEffect(()=>{
    getProductById(id)
},[])

return (
    
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Edita informacion</h1>
                 <form onSubmit={update}>
                 <div className='mb-3'>
                        <label className='form-label'>Imei</label>
                        <input
                            value={imei}
                            onChange={ (e)=> setImei(e.target.value)} 
                            type="text"
                            className='form-control'
                        />               
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Departamento</label>
                        <select
                            value={departamento}
                            onChange={ (e) => setDepartamento(e.target.value)} 
                            type="text"
                            className='form-control'>
                                <option value="Azul">Azul</option>
                                <option value="Olavarria">Olavarria</option>
                                <option value="Tandil">Tandil</option>
                                <option value="Bolivar">Bolivar</option>
                                <option value="Mar del Plata">Mar del Plata</option>
                                <option value="Bahia Blanca">Bahia Blanca</option>
                                <option value="Dolores">Dolores</option>
                                <option value="Junin">Junin</option>
                            </select>
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Ipp</label>
                        <input
                            value={ipp}
                            onChange={ (e)=> setIpp(e.target.value)} 
                            type="text"
                            className='form-control' minlength="18" maxLength="18"
                        />                 
                    </div>
                    <div className="buttonContainerEdit">  
                    <button type='submit' className='btn btn-danger'>Aceptar</button>
                    <Link className="link" to="/table"> {}
                        <Button variant="primary" className="buttonBack">Atrás</Button>
                    </Link>
                    </div>
                 </form>   
            </div>
        </div>
    </div> 
)
}

export default Edit