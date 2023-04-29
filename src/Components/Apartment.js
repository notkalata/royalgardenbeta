export default function Apartment({title, location, image, price, area}){
    return(
        <div className="Apartment">
            <h1>{title}, ({area}m2)</h1>
            <h2><i class="fa-solid fa-location-dot"></i> {location}</h2>
            <img src={image} />
            <p><i class="fa-solid fa-wallet"></i> {price}$</p>
            <input type="button" value={"See more"} />
        </div>
    );
}