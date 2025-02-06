import "./Header.css";
import logo from "../asset/home-page-banner-svg.svg";

//#41c476

const Header = () => {
    return (
        <>            
         <div className="mainHeaderContainer">
         <div className="headerContainer">  
            <div className="headerContent" >
               <h1><span>Design Thinking & GenAI</span></h1>
               <h3>led product engineering with total exprerience</h3>
               <p>Blending omichannel strategies with cutting-edge technology and exceptional talent.</p>
            </div>
            <div className="imageContainer">
              <img src={logo} alt="" />
            </div>
          </div>
          <button>Lets Connect</button>
         </div>
       </>
    )
}

export default Header;