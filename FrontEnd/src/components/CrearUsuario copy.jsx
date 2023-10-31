import { useState } from "react";
import axios from "axios";

function CrearSpecialization(){

    const url = `${import.meta.env.VITE_CRUD_URL}/specializations`

    const [name,setName] = useState('')
    const [hospital_id,setIdHospital] = useState('')

    const changeName = (evt) => {
        setName(evt.target.value)
    }

    const changeHospital = (evt) => {
        setIdHospital(evt.target.value)
    }

    const guardarSpecialization = (evt) =>{
        evt.preventDefault();
        axios({
            url: url,
            method: "post",
            data:{
                "name": name,
                "hospital_id": hospital_id
            }
        }).then((response)=>{
           console.log(response)
        })
    }

    return(
        <div className="container">
         <h1 className="my-5 is-size-4">Vista de creacion de usuarios</h1>
            <form onSubmit={guardarSpecialization}>
                <p>
                    <label>Nombre Especializaciòn</label>
                    <input className="input" onChange={changeName} type="text" placeholder="Ingrese el nombre de la Especialización"></input>
                </p>
                <p>
                    <label>Id Hospital</label>
                    <input className="input" onChange={changeHospital} type="text" placeholder="Ingresa el Id del Hospital"></input>
                </p>
                <button className="mt-5 button is-link">Guardar</button>
            </form>
        </div>
    )
}

export default CrearSpecialization;