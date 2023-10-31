import { useState } from "react";
import axios from "axios";

function CrearUsuario(){

    const url = `${import.meta.env.VITE_CRUD_URL}/users`

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [hospital,setHospital] = useState('')

    const changeEmail = (evt) => {
        setEmail(evt.target.value)
    }

    const changePassword = (evt) => {
        setPassword(evt.target.value)
    }

    const changeHospital = (evt) => {
        setHospital(evt.target.value)
    }

    const guardarUsuario = (evt) =>{
        evt.preventDefault();
        axios({
            url: url,
            method: "post",
            data:{
                "email": email,
                "password": password,
                "hospital": hospital
            }
        }).then((response)=>{
           console.log(response)
        })
    }

    return(
        <div className="container">
         <h1 className="my-5 is-size-4">Vista de creacion de usuarios</h1>
            <form onSubmit={guardarUsuario}>
                <p>
                    <label>Email</label>
                    <input className="input" onChange={changeEmail} type="text" placeholder="Ingresa el correo"></input>
                </p>
                <p>
                    <label>Password</label>
                    <input className="input" onChange={changePassword} type="text" placeholder="Ingresa el password"></input>
                </p>
                <p>
                    <label>Hospital</label>
                    <input className="input" onChange={changeHospital} type="text" placeholder="Ingresa el hospital"></input>
                </p>
                <button className="mt-5 button is-link">Guardar</button>
            </form>
        </div>
    )
}

export default CrearUsuario;