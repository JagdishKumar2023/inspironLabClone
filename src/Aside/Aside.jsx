import asset from "../asset/aside.png";
import "./Aside.css";

const Aside = () => {
    return (
        <div className="asideContainer">
            <h1 className="heading">We are do</h1>
            <img src={asset} alt="" />
        </div>
    )
}

export default Aside