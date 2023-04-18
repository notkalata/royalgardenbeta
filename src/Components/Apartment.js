export default function Apartment({title, location, image, price, area}){
    return(
        <div className="Apartment">
            <h1>{title}, ({area}m2)</h1>
            <h2><i class="fa-solid fa-location-dot"></i> {location}</h2>
            <img src={image} />
            <p>{price} <i class="fa-regular fa-money-bill-1"></i></p>
            <input type="button" value={"See more"} />
        </div>
    );
}