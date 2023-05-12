import { useEffect, useState } from "react";
import Apartment from "./Apartment";
import './apartments.css'

export default function Apartments(){
    const [apartments, setApartments] = useState([]);
    const [type, setType] = useState(" ");

    useEffect(() =>{
        fetch('http://localhost:8080/apartments')
        .then((response) => response.json())
        .then((data) => setApartments(data));
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8080/apartments/${type}`)
        .then((response) => response.json())
        .then((data) => setApartments(data));
    }, [type])

    return (
        <div className="Container">
            <div className="ATop">
                <h1>Apartments</h1>
            </div>
            <div className="Categories">
                <h3 onClick={() => setType("studios")}>Studios</h3>
                <h3 onClick={() => setType("small")}>Small Apartments</h3>
                <h3 onClick={() => setType("medium")}>Medium Apartments</h3>
                <h3 onClick={() => setType("big")}>Bigger Apartments</h3>        
            </div>
            <div className="ApartmentsDisplay">
                {apartments.map((apartment) =>
                    <Apartment title={apartment.title} location={apartment.location} image={apartment.image} price={apartment.price} area={apartment.area}/>
                )}
            </div>
        </div>
    );
}