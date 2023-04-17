import { Link } from "react-router-dom";

export default function Navigation(){
    return (
        <div className="Navigation">
            <a href="/"><img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784__480.png"></img></a>
            <ul>
                <Link to={'/apartments'}>Apartments</Link>
                <Link to={'/gallery'}>Gallery</Link>
                <Link to={'/about'}>About</Link>
            </ul>
        </div>
    );
}