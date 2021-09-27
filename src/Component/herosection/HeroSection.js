import React from 'react'
import './HeroSection.css'
import '../../App.css'
import myimg from '../../image/logo.jpg'

const discord = "https://discord.com/users/823237564130525184";
const instagram = "https://www.instagram.com/aayushgarg.official";
const youtube = "https://www.youtube.com/channel/UC4PYDYab2Rf8Dz1VPzrCPfQ"
const twitter = "https://twitter.com/gamer_1478";
const linkedin = "https://www.linkedin.com/in/gamer1478/";
const Facebook = "https://www.facebook.com/aayush.garg.official/";
const github = 'https://github.com/gamer-1478'
const mail = 'mailto:contact@aayushgarg.net?subject=Hi%20There,%20Wanted%20To%20Contact%20You&body=message%20goes%20here'

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

function HeroSection() {
    return (
        <div className='hero-container' id='home'>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet" />
            <div className='hero-desc-img-and-text-container'>
                <img className='aboutme-image' src={myimg} alt='myImage' />
                <div className='hero-desc-img-and-text'>
                    <h1 className='aboutme'>Hey There!</h1>

                    <div className='hero-desc-text'>
                        <p className='Text'>
                            I am aayush garg, and i am a High School Student Studying in Amity International School Sector 46 Gurgaon.</p>
                        <p className='Text'>
                            I can develop a full stack Web Apps, Android and IOS apps, flutter apps, windows universal apps, etc.
                            I Like to use NodeJS, Express JS or Flask for backend, and react js, svelte or ejs for frontend.</p>
                        <p className='Text'>
                            For Mobile Apps I Like to use FLutter with VSC but can also use Android Studio and Xcode, I also like to Use Visual Studio Community for Making windows apps.<br></br></p>
                        <p className='Text'>
                            I am also very active in developing hardware and robotics, mostly i like to use arduino, esp32 and raspberry pi's.<br></br>
                            I also like to develop circuit boards, and pcb's and other barebone components.<br></br></p>
                        <p className='Text'>Can program in python, typescript, javascript, java, html, c# and much more, and i am also currently learning c++.</p>
                    </div>
                </div>
            </div>
            <div className='socialContainerIcons'>
                <div className='socialIcons'>
                    <div className='social-icons-about-me'>
                        <p
                            className='social-icon-link-about facebook'
                            onClick={() => { openInNewTab(Facebook) }}
                            aria-label='Facebook'>
                            <i className='fab fa-facebook-f fa-lg' />
                        </p>
                        <p
                            className='social-icon-link-about instagram'
                            onClick={() => { openInNewTab(instagram) }}
                            aria-label='Instagram'>
                            <i className='fab fa-instagram fa-lg' />
                        </p>
                        <p
                            className='social-icon-link-about youtube'
                            onClick={() => { openInNewTab(youtube) }}
                            aria-label='Youtube'>
                            <i className='fab fa-youtube fa-lg' />
                        </p>
                        <p
                            className='social-icon-link-about twitter'
                            onClick={() => { openInNewTab(twitter) }}
                            aria-label='Twitter'>
                            <i className='fab fa-twitter fa-lg' />
                        </p>
                        <p
                            className='social-icon-link-about linkedin'
                            onClick={() => { openInNewTab(linkedin) }}
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin fa-lg' />
                        </p>
                        <p
                            className='social-icon-link-about discord'
                            onClick={() => { openInNewTab(discord) }}
                            aria-label='discord'
                        >
                            <i className='fab fa-discord fa-lg' />
                        </p>
                        <p
                            className='social-icon-link-about github'
                            onClick={() => { openInNewTab(github) }}
                            aria-label='github'>
                            <i className='fab fa-github fa-lg' />
                        </p>
                        <p
                            className='social-icon-link-about email'
                            onClick={() => { openInNewTab(mail) }}
                            aria-label='email'>
                            <i className='fas fa-envelope fa-lg' />
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroSection
