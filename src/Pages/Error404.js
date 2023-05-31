import React from "react";
import "./styles/Error.css"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Error = () => {
    return(
    <div>
        <Header />
        <main>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/"> Retourner sur la page d'accueil</a>
        </main>
        <Footer />
    </div>
    )
}

export default Error;