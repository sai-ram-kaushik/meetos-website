import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./ui/Navbar";
import HomePage from "./ui/HomePage";
import data from './data/landing-page.json'
function App() {
    return (
        <BrowserRouter className="min-h-screen px-5 lg:px-10">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage homePage={data.homePage} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
