import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container' id='home'>
            {/* <video src='/' autoPlay loop muted /> */}
            <h1>HELLO THERE!</h1>
            <p>I am aayush garg see my projects from below</p>
            <div className='hero-btns'>
                <Button path='/about-me' pathclassName='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    About Me
                </Button>
                <Button path='/#projects' className='btns' buttonStyle='btn--primary' buttonSize='btn--large' offset='80'>
                    MY PROJECTS
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
