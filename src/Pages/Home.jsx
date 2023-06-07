import React from "react";
import './styles/Home.css'
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Apartments from "../Components/Apartments";



const Home = () => {
    return(
        <div className="body">
            <Header />
            <Banner />
            <Apartments />
            <Footer />
        </div>
    )
}

export default Home