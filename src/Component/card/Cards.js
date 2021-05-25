import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards' id='projects'>
            <h1>Check out my projects</h1>
            <div className='cards__container'>
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
                    <Carditem
                        src='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1138781799%2F0x0.jpg%3FcropX1%3D28%26cropX2%3D7436%26cropY1%3D0%26cropY2%3D4166'
                        text='Online Simulated ai for a simulated home, very narrow weak ai'
                        label='Ai-dsm'
                        path='/ai-dsm'
                    />
                </ul>
                <ul className="cards__items">
                    <Carditem
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Simple_Periodic_Table_Chart-blocks.svg/1200px-Simple_Periodic_Table_Chart-blocks.svg.png"
                        text='MCQ Periodic Table Quiz, Randomly generated 10 questions.'
                        label='Chemistry-Quiz'
                        path='/quiz-science-hhw' />
                </ul>
            </div>
        </div>
    );
}

export default Cards