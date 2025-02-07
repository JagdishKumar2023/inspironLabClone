import Aside from "../Aside/Aside";
import Navbar from "../components/navbar/Navbar";
import Header from "../Header/Header";
import Section from "../Section/Section";


const Home = () => {
    return (
        <div className="container">
            <Navbar/>
            <Header/>
            <Aside/>
            <Section/>
        </div>
    )
}

export default Home;