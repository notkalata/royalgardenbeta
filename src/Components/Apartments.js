import { useEffect, useState } from "react";
import Apartment from "./Apartment";

export default function Apartments(){
    const [apartments, setApartments] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8080/apartments')
        .then((response) => response.json())
        .then((data) => setApartments(data));
    }, [])

    return (
        <div className="ApartmentsDisplay">
            {apartments.map((apartment) =>
                <Apartment title={apartment.title} location={apartment.location} image={apartment.image} price={apartment.price} area={apartment.area}/>
            )}
        </div>
    );
}