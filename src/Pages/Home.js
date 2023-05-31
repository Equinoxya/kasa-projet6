import React from "react";
import './styles/Home.css'
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Header from "../Components/Header";
import Locations from "../Components/Locations";
import Footer from "../Components/Footer";


const Home = () => {
    return(
        <div className="body">
            <Header />
            <Banner />
            <Card />
            <Footer />
        </div>
    )
}

export default Home