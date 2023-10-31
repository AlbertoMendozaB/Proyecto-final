import { useState } from "react";
import axios from "axios";

function CrearHospital(){

    const url = `${import.meta.env.VITE_CRUD_URL}/hospitals`


    const [name,setName] = useState('')

    const changeName = (evt) => {
        setName(evt.target.value)
    }

    const guardarHospital = (evt) =>{
        evt.preventDefault();
        axios({
            url: url,
            method: "post",
            data:{
                "name": name
            }
        }).then((response)=>{
           console.log(response)
        })
    }

    return(
        <div className="container">
         <h1 className="my-5 is-size-4">Vista de creacion de usuarios</h1>
            <form onSubmit={guardarHospital}>
                <p>
                    <label>Hospital</label>
                    <input className="input" onChange={changeName} type="text" placeholder="Ingresa el nombre del Hospital"></input>
                </p>
                <button className="mt-5 button is-link">Guardar</button>
            </form>
        </div>
    )
}

export default CrearHospital;