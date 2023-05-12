import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './navigation.css'

export default function Navigation(){

function dropDownMenu(){
  const navbarLinks = document.getElementsByClassName("navbar")[0];
  const navbar = document.getElementsByClassName("Navigation")[0];
  navbarLinks.classList.toggle('open');
  navbar.classList.toggle('open');
}

return (
  <div className="Navigation">
    <a href="/"><img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784__480.png"></img></a>
    <a href="#" id="toggle-button" onClick={dropDownMenu}><i class="fa-solid fa-bars"></i></a>
    <ul className="navbar">
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