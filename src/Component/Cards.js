import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards' id='projects'>
            <h1>Check out my projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className="cards__items">
                        <Carditem
                            src="https://i.imgur.com/mSlRkbd.png"
                            text='Cpu-Benchmark'
                            label='Personal'
                            path='/cpu-benchmark' />
                        <Carditem
                            src='https://www.researchgate.net/publication/327714444/figure/fig3/AS:672028931653638@1537235591748/Robotic-platform-used-in-this-study-a-Original-design-of-the-InMoov-robot-and-b.ppm'
                            text='Cybortics-Humanoid'
                            label='CYBORTICS'
                            path='/cybortics-humanoid' />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
