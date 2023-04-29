export default function AboutCard({icon, title, text, buttonText}){
    return(
        <div className="AboutCard">
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{text}</p>
            <button>{buttonText}</button>
        </div>
    );
}