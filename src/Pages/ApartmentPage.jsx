import React, { useEffect, useState } from "react";
import Collaps from "../Components/Collaps";
import { unstable_HistoryRouter, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ApartmentPageTitle from "../Components/ApartmentPageTitle";
import "./styles/Apartment.css"
import Carrousel from "../Components/Carrousel";

function ApartmentPage() {
  const { id } = useParams();
  console.log("id:", id);
  const location = useLocation();
  console.log("location:", location);
  const [selectedFlat, setSelectedFlat] = useState();
  useEffect(fetchApartmentData, [location.id]);
  const navigate = useNavigate();

  function fetchApartmentData() {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === id);
        if (flat) {
          setSelectedFlat(flat);
        } else {
          navigate('/Error404'); // Redirect to Error404 page
        }
      })
      .catch(console.error);
  }
  
  if (selectedFlat == null) return <p>loading...</p>;

  return (
    <div className="Apartement-page">
        <Header />
        <Carrousel images={selectedFlat.pictures}/>
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