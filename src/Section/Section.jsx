import "./Section.css";
import investingImage from "../asset/investingImag.svg";
import power from "../asset/power.jfif";

const Section = () => {
    return (
        <div className="sectionMainContainer">
           <h1 className="heading">Our Work</h1>
           <div className="sectionContainer">
              <div className="cardContainer">
                <h4>Boosting Sale and User Onboarding for a Security Company through Seamless Integration Enhanced Security</h4>
                <button>View Case Study</button>
                <img className="imageTag" src={investingImage} alt="Investing" />
              </div>
              <div className="cardContainer">
                <h4>Mastering 100k Logs/Minute - Enhancing Compliance and Operation Efficiency for a US-Based EV Charging Network</h4>    
                <button>View Case Study</button>
                <img className="imageTag2" src={power} alt="charging network" />
              </div>
           </div>
        </div>
    )
}

export default Section;