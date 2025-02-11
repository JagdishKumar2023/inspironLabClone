import Aside from "../Aside/Aside";
import CommentSilder from "../CommentSilder/CommentSilder";
import Navbar from "../components/navbar/Navbar";
import Header from "../Header/Header";
import Section from "../Section/Section";
import Silder from "../Silder/Silder";
import Technology from "../Technology/Technology";

const Home = () => {
    return (
        <div className="container">
            <Navbar/>
            <Header/>
            <Aside />
            <Section/>
            <div style={{color: "white", textAlign: "center"}}>
            <Silder/>
            <Technology/>
            {/* <CommentSilder/> */}
            </div>
        </div>
    )
}

export default Home;