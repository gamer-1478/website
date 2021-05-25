import React from 'react';
import '../../App.css';
import Cards from '../card/Cards';
import HeroSection from '../herosection/HeroSection';

function Home (){
    return(
        <>
        <HeroSection/>
        <Cards/>
        </>
    )
}

export default Home;