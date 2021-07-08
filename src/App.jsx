import React from "react";
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import CarouselComponent from "./components/Carousel/carousel.component";
import Inspo from "./components/Inspo/Inspo.jsx"
import Footer from "./components/Footer/Footer"



function App(){
    return( <div>
    <Navbar />
    <Inspo />
    <CarouselComponent/>
    <Footer />
    </div>
    )};

export default App;