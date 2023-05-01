import Centered from './Centered.js'
import './homepage.css'

export default function Homepage(){
    return(
        <div className="Homepage">
        <Centered header={"Royal Garden"} text={"Apartment Complex"} />
        <div className="Location">
        <div className="Information reveal">
          <h1>Location & Lifestyle</h1>
          <p>Royal Garden now has "Building of the year" award. It is located near
            Mladezhki Halm, Plovdiv. This is one of the most wanted neighbourhoods in the city.
            Some of the best schools and kindergardens are located nearby.
          </p>
          <input type="button" value={"Learn more"} id='learnMore'/>
        </div>
        <img className="reveal" src='https://royalgarden.bg/images/home/Royal_Garden_map-bg.jpg' alt='On-map location'/>
      </div>
      <div className="Inovation">
        <img className="reveal" src="https://homeadore.com/wp-content/uploads/2019/02/010-modern-apartment-by-hi-light-architects.jpg" alt="Image of an apartment complex" />
        <div className="Extras reveal">
          <p>Smart home feature</p>
          <p>Floor noise cancellation</p>
          <p>High-quality windows isolation</p>
          <p>Tap water cleaning system</p>
          <p>2.85m floor height</p>
          <p>Anti-flood system</p>
          <p>Building termal isolation</p>
          <p>Building air-conditioning(PHL)</p>
          <p>Cleaned air in all apartments</p>
          <p>TEC heating</p>
        </div>
      </div>
      <div className="Apartments">
        <div className="Panorama">
          <div className="Panorama-Text reveal">
            <h1>Big Apartments & Panoram View</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <input type="button" value={"See more"} id='learnMore' />
          </div>
        </div>
        <img src="https://royalgarden.bg/images/home/panoramic-views.jpg" />
      </div>
      <div className="Landing">
        <div className="Buy reveal">
          <h1>Buy your new home.</h1>
        </div>
        <div className="Contact reveal">
          <h1>Contact us.</h1>
        </div>
      </div>
      </div>
    );
}