import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navigation(){
    return (
        <div className="Navigation">
            <a href="/"><img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784__480.png"></img></a>
            <ul>
                <CustomLink to="/apartments">Apartments</CustomLink>
                <CustomLink to="/gallery">Gallery</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </div>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }