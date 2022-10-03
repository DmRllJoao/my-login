// Criação de contexto, é como se fosse um área reservada do sistema que ele vai deixar disponivel,
// para gravar certas informações globais, porque o usuário é global

// useEffect ele roda todas as vezes que a minha aplicação inicializa
import React, { useState, useEffect, createContext } from "react"

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    // Loading ajuda a controlar a tela de informações carregando
    const [loading, setLoading] = useState(true);

            // Recuperar o usuário, quando dar o refresh, para saber se ele está logado ou não
            useEffect(() =>{
                const recoveredUser = localStorage.getItem("user");
            
                if(recoveredUser){
                    setUser(JSON.parse(recoveredUser));
                }

                setLoading(false);
            }, []);
    
    // Função para entrar
    const login = (email, password) => {
        console.log("login auth", { email, password });

        // api criar uma session

        const loggedUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));



                // Autenticando e navegando para o HomePage
        if( password === "secret"){
            setUser(loggedUser);
            navigate("/");
        }
    
    
        
    };
    

    // Função para sair
    const logout = () => {
        console.log("logout");
        // Caso o usuário seja setado como nulo, ele voltara para a pagina de Login
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    // user != null
    // authenticated = true
    // user == null
    // authenticated = false

    return(
    <AuthContext.Provider
        value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
    </AuthContext.Provider>
    )

}