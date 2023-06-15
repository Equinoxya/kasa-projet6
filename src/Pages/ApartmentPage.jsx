import React, { useEffect, useState } from "react";
import Collaps from "../Components/Collaps";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ApartmentPageTitle from "../Components/ApartmentPageTitle";
import "./styles/Apartment.css"


function ApartmentPage() {
  const location = useLocation();
  console.log("location:", location);
    /*useState sert à initialisé selectedFlat avec la valeur null, et la fonction setSelectedFlat est utilisée pour mettre à jour cet état. */
  const [selectedFlat, setSelectedFlat] = useState();
    /*useEffect est utilisé pour effectuer une action  */
  useEffect(fetchApartmentData, [location.state.apartmentId]);

  function fetchApartmentData() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setSelectedFlat(flat);
      })
      .catch(console.error);
  }
    /*si selectedflat ont été chargé et est pas nul affiche le contenue et si il est null retourn loading en atendant */
  if (selectedFlat == null) return <div>...Loading</div>;

  return (
    <div className="Apartement-page">
        <Header />
        <div className="apartment_area">
        <ApartmentPageTitle
          title={selectedFlat.title}
          description={selectedFlat.description}
          tags={selectedFlat.tags}
          location={selectedFlat.location}
          host={selectedFlat.host}
          rating={selectedFlat.rating}
        />
        <div className="bloc_description">
          <Collaps
            content={selectedFlat.description}
            title="Description"
          />
          <Collaps
            title="Equipement"
            content={selectedFlat.equipments.map((eq, i) => (
              <li key={i}> {eq} </li>
            ))}
          />
          </div>
        </div>
        <Footer />
    </div>
  );
}
export default ApartmentPage;