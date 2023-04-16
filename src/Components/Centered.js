export default function Centered({header, text}){
    return(
        <div className="darken">
            <div className="centered">
                <h1>{header}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}