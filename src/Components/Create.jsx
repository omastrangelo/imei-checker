import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection,addDoc } from "firebase/firestore";
import {db} from "../firebaseConfig/firebase.js"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import "../Assets/Button.css"

const Create = () =>{

    const[imei,setImei]= useState ()
    const[departamento,setDepartamento]= useState ("")
    const[ipp,setIpp]= useState ("")

    const navigate = useNavigate()

    const productsCollection = collection (db,"imei")

    const store = async (e)=>{
        e.preventDefault()

        await addDoc (productsCollection,{
            imei: imei,
            departamento: departamento,
            ipp: ipp,
        })
        navigate("/")
    }

    return(
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1>Crear</h1>
                  <form onSubmit={store}>
                    <div className="mb-3">
                      <label className="form-label">Imei</label>
                      <input type="number" className="form-control"
                      value={imei}
                      onChange={(e)=>setImei(e.target.value)}
                      required minLength="15" maxLength="15"/>
                    </div>
        
                    <div className="mb-3">
                      <label className="form-label">Departamento</label>
                      <select type="text" className="form-control"
                      value={departamento}
                      onChange={(e)=>setDepartamento(e.target.value)} required >
                         <option value="Azul">Azul</option>
                         <option value="Olavarria">Olavarria</option>
                         <option value="Tandil">Tandil</option>
                         <option value="Bolivar">Bolivar</option>
                         <option value="Mar del Plata">Mar del Plata</option>
                         <option value="Bahia Blanca">Bahia Blanca</option>
                         <option value="Lanus">Lanus</option>



                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Ipp</label>
                      <input text="text"className="form-control"
                      value={ipp}
                      onChange={(e)=>setIpp(e.target.value)}
                      required minlength="18" maxLength="18" placeholder="00-00-000000-00/00"/> 
                    </div>
                    <div className="buttonContainerCrear">
                      <button type="submit" className="btn btn-primary">Crear</button>
                      <Link className="link" to="/"> {}
                        <Button variant="warning" className="buttonBack">Atrás</Button>
                    </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        };
        
        export default Create;