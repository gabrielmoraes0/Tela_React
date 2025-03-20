import React, { use } from 'react'
import { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import "./Login.css"



const Login = () => {
     const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")

     const handleSubmit = (event) => {
        event.preventDefault();
        console.log("envio")
     }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
           <h1>Acesse o sistema</h1>
           <div className='input-field'>
            <input type="text" placeholder='Digite o login' onChange={ (e) =>setUsername (e.target.value)}/>
            <FaUser className="icon"/>
           </div>
           <div className='input-field'>
            <input type="text" placeholder='Digite a senha' onChange={ (e) =>setPassword (e.target.value)}/>
            <FaLock className='icon'/>
           </div>

            <div className="recall-forget">
                <label className='remember'>
                    <input type="checkbox" />
                    Lembrar de mim ?
                </label>
                <br />
                <a href="">Esqueceu a senha?</a>
            </div>
            <div className=''></div>
           <button className='btn'>Entrar</button>
        </form>
        <p className='account' >Não tem uma conta? <a href="">Registrar</a></p>
    </div>
  )
}

export default Login