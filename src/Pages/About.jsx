import React from 'react';
import Header from "../Components/Header";
import BannerAbout from '../Components/BannerAbout';
import Footer from '../Components/Footer';
import "../Pages/styles/About.css"
import Collaps from '../Components/Collaps';

const About = () => {
    return (
        <div className='about'>
            <Header />
            <BannerAbout />
            <div className='about-container'>
                <Collaps 
                    title = "Fiabilité"
                    content = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont comformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Collaps 
                    title = "Respect"
                    content = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de la plateforme."
                />
                <Collaps 
                    title = "Service"
                    content = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collaps 
                    title = "Sécurité"
                    content = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos service. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respecrés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
            <Footer />
        </div>  
    );
};

export default About;