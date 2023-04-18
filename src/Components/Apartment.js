export default function Apartment({name, price}){
    return(
        <div className="Apartment">
            <h1>{name}</h1>
            <p>{price}</p>
            <input type="button" value={"See more"} />
        </div>
    );
}