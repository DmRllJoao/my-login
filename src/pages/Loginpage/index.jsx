import React, { useState, useContext } from "react"

import { AuthContext } from "../../contexts/auth";

import "./styles.css"


const LoginPage = () =>{

    const { authenticated, login } = useContext(AuthContext);

    // Ligando o Email e a Senha, criando a variavel e setando
    // Valor de leitura, e o valor que define esse campo
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // Const para dar o submit
    const handleSubmit = (e) => {
        
        //   preventDefault é para o submit sair do padrão
        e.preventDefault();
        console.log("Submit", { email, password });
        
        login( email, password ); // integração com o meu context / api
    };
    
    
    return (
        <div id="login">
            <h1 className="title">Login do sistema</h1>
            <p>{String(authenticated)}</p>
                                    {/* onSubmit para ligar o submit com sua função */}
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                                                                                    {/*Ligando o email ao get e set value={ onChange={(e)...*/}
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>


            </form>
            
        </div>



    )
}

export default LoginPage;