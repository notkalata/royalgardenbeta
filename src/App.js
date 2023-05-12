import Navigation from './Components/Navigation.js'
import Footer from './Components/Footer.js'
import NoPage from './Components/NoPage.js'
import Homepage from './Components/Homepage.js';
import Gallery from './Components/Gallery.js'
import Apartments from './Components/Apartments.js'
import About from './Components/About.js'
import './App.css';
import './mobile.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("aktiv");
    } else {
      reveals[i].classList.remove("aktiv");
    }
  }
}

window.addEventListener('scroll', reveal);

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={
          <>
            <Homepage />
          </>}></Route>
          <Route path='/apartments' element={
          <>
            <Apartments />
          </>}></Route>
          <Route path='/gallery' element={
          <>
            <Gallery />
          </>}></Route>
          <Route path='/about' element={
          <>
            <About />
          </>}></Route>
          <Route path='*' element={
          <>
            <NoPage />
          </>}></Route>
        </Routes>
      <Footer text={"Royal Garden 2023."} />
      </BrowserRouter>
    </div>
  );
}
