export default function Card({cardTitle, cardText, link, color})
{
    return(
        <a href={link} target="_blank">
        <div className="Card" style={{backgroundColor: color}}>
            <h3>{cardTitle}</h3>
            <p>{cardText}</p>
        </div>
        </a>
    );
}