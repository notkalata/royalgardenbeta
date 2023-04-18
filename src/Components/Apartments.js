import { useEffect, useState } from "react";
import Apartment from "./Apartment";

export default function Apartments(){
    const [apartments, setApartments] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8080/people')
        .then((response) => response.json())
        .then((data) => setApartments(data));
    }, [])

    return (
        <div className="ApartmentsDisplay">
            {apartments.map((apartment) =>
                <Apartment name={apartment.name} price={apartment.age} />
            )}
        </div>
    );
}