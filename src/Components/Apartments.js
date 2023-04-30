import { useEffect, useState } from "react";
import Apartment from "./Apartment";
import './apartments.css'

export default function Apartments(){
    const [apartments, setApartments] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8080/apartments')
        .then((response) => response.json())
        .then((data) => setApartments(data));
    }, [])

    return (
        <div className="Container">
            <div className="ATop">
                <h1>Apartments</h1>
            </div>
            <div className="Categories">
                <h3>Studios</h3>
                <h3>Small Apartments</h3>
                <h3>Medium Apartments</h3>
                <h3>Bigger Apartments</h3>        
            </div>
            <div className="ApartmentsDisplay">
                {apartments.map((apartment) =>
                    <Apartment title={apartment.title} location={apartment.location} image={apartment.image} price={apartment.price} area={apartment.area}/>
                )}
            </div>
        </div>
    );
}