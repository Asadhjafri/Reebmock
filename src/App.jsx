import React from "react";
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import CarouselComponent from "./components/Carousel/carousel.component";
import Inspo from "./components/Inspo/Inspo.jsx"




function App(){
    return( <div>
    <Navbar />
    <Inspo />
    <CarouselComponent/>
    </div>
    )};

export default App;
