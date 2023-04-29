import AboutCard from "./AboutCard";
import './about.css'

export default function About(){
    return(
        <div className="About">
            <div className="AboutText">
                <p>Welcome to our building company, where we specialize in creating modern and luxurious living spaces for our clients. Our passion for design and construction is evident in every project we undertake, and our newly built apartment complex is no exception.
                <br />
                Located in the heart of a vibrant community, our apartment complex boasts a prime location with easy access to local amenities, transportation, and entertainment options. Each apartment has been meticulously crafted with the utmost attention to detail, from the high-quality finishes to the state-of-the-art appliances.
                <br />
                We believe that living spaces should be both functional and aesthetically pleasing, which is why we have incorporated innovative design elements into every unit. Our apartments are spacious and light-filled, with open-plan layouts that encourage a sense of community and connection.
                <br />
                We also understand the importance of sustainability and eco-friendliness, which is why we have implemented green building practices throughout our apartment complex. From energy-efficient appliances to sustainable building materials, we have taken every step to reduce our environmental footprint and create a healthier living space for our residents.
                <br />
                At our building company, we are committed to providing our clients with the highest level of service and expertise. Our team of experienced professionals is dedicated to ensuring that every project we undertake is completed on time, on budget, and to the highest standards of quality.
                </p>
                <p>Contact information:
                <br />
                <b><i class="fa-solid fa-phone"></i>: +1 (555) 123-4567
                <br />
                <i class="fa-solid fa-envelope"></i>: info@buildingcompany.com
                <br />
                <i class="fa-solid fa-location-dot"></i>: 123 Main Street, Anytown USA 12345</b>
                <br />

                If you would like to schedule a tour of our apartment complex, please feel free to call or email us to arrange a visit. We would be happy to show you around and answer any questions you may have about our living spaces and community.
                <br />
                We value our residents' feedback and are always looking for ways to improve our services. If you have any comments or suggestions, please do not hesitate to reach out to us. We appreciate your input and strive to provide the best possible living experience for our community.
                <br />
                Thank you for considering our building company and apartment complex. We look forward to hearing from you soon.</p>
            </div>
            <div className="AboutCards">
                <AboutCard icon={"fa-solid fa-building"} title={"Modern building"} text={"Royal Garden is built with modern materials."} buttonText={"See more"} />
                <AboutCard icon={"fa-solid fa-building-user"} title={"Smart control"} text={"Every apartment comes with smart control feature."} buttonText={"See more"} />
                <AboutCard icon={"fa-solid fa-tree-city"} title={"Local park"} text={"Inside the residence lies a green park."} buttonText={"See more"} />
                <AboutCard icon={"fa-solid fa-wallet"} title={"Reasonable price"} text={"Prices are calculated to be as friendly as possible."} buttonText={"See more"} />
            </div>
        </div>
    );
}