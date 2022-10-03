import React, { useContext } from "react";
// Estrutura de rotas


import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom"

import LoginPage from './pages/Loginpage';
import HomePage from './pages/HomePage';

import { AuthProvider, AuthContext } from "./contexts/auth";



const AppRoutes = () =>{
    // Elemento privado, ele vai puxar a informação
    // se ta autenticado ou não, se tiver autenticado retorna children, se não, manda de volta pra onde ele veio
    
    const Private = ({children}) =>{
        const { authenticated, loading } = useContext(AuthContext);
        
        if (loading){
            return <div className="loading">Carregando...</div>
        };


        if(!authenticated) {
            return <Navigate to="/login"/>;
        }
    
        return children;
    
    }



    return(
        <Router>
            {/* Para consumir as informações o Auth, vai saber se o uruário ta logado ou não */}
                                                        {/* Essas duas !! em casting de boolean */}
            <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>} />
                <Route exact path="/" element={<Private><HomePage/></Private>} />
            </Routes>
            </AuthProvider>
        </Router>

    );


};

export default AppRoutes;