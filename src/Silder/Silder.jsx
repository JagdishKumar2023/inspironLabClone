import { useRef } from "react";
import slider from "../asset/silder.png";
import slider2 from "../asset/sidler2.png";
import "./Slider.css";

const Slider = () => {
    const contentRef = useRef();
        
    const handleMouseOver = () => {
        if (contentRef.current) {
            contentRef.current.style.animationPlayState = "paused";
        }
    };
    
    const handleMouseOut = () => {
        if (contentRef.current) {
            contentRef.current.style.animationPlayState = "running";
        }
    };
            
    return (
        <div className="sliderContainer">
            <div 
                className="scrollingWrapper"
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}
            >
                <div className="scrollingContent" ref={contentRef}>
                    <img src={slider} alt="slider" className="image" />
                    <img src={slider} alt="slider" className="image" />
                    <img src={slider} alt="slider" className="image" />
                    <img src={slider} alt="slider" className="image" />
                    <img src={slider2} alt="silder2" />
                    <img src={slider2} alt="silder2" />
                    <img src={slider2} alt="silder2" />
                    <img src={slider2} alt="silder2" />
                </div>
            </div>
        </div>
    );
};

export default Slider;
