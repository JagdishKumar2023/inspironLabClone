import { Route, Routes } from "react-router-dom"

const Route = () => {
    return (
            <Routes>
                <Route path="/servies"/>
                <Route path="/industries"/>
                <Route path="/labs"/>
                <Route path="successstories"/>
                <Route path="/aboutus" />
                <Route path="/insights" />
                <Route path="/career" />
                <Route path="/contact" />
            </Routes>
    )
}

export default Route