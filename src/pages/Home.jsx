import Aside from "../Aside/Aside";
import Navbar from "../components/navbar/Navbar";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div className="container">
            <Navbar/>
            <Header/>
            <Aside/>
        </div>
    )
}

export default Home;