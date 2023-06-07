import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../Components/styles/apartments.css'

const Apartments = () => {
    const [apartments, setApartment] = useState([]);

    useEffect(fetchApartments, []);


    function fetchApartments() {
        fetch('logements.json')
          .then((res) => res.json())
          .then((res) => setApartment(res));
      }
      return (
        <div className="location">
          {apartments.map((apartment) => (
            <React.Fragment key={apartment.id}>
              <Card
                title={apartment.title}
                image={apartment.cover}
                id={apartment.id}
              />
            </React.Fragment>
          ))}
        </div>
      );
    }

export default Apartments;
