import React from "react"
import "./styles.css"


const LoginPage = () =>{

    // Const para dar o submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit")
    };
    
    
    return (
        <div id="login">
            <h1 className="title">Login do sistema</h1>
                                    {/* onSubmit para ligar o submit com sua função */}
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>


            </form>
            
        </div>



    )
}

export default LoginPage;