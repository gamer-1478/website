import React from 'react'
import './AboutMe.css'
import myimg from '../../../image/logo.jpg'
import { Link } from 'react-router-dom';


const Twitter = "https://twitter.com/aysg_ays";
const Discord = "https://discord.com/users/823237564130525184";
const Instagram = "https://www.instagram.com/aayushgarg.official";
const LinkedIn = "https://www.linkedin.com/in/aayush-garg-585b6718b/";
const Youtube = "https://www.google.com/search?q=not+on+youtube";
const Facebook = "https://www.google.com/search?q=not+on+facebook";

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
export default function AboutMe() {
  return (
    <div>
      <h1 className='aboutme'>ABOUT ME</h1>
      <img className='aboutme-image' width='400px' src={myimg} alt='myImage' />
      <p className='Text'> Hi i am aayush garg, and i am a High School Student. <br></br>
        I can develop a full stack, most projects are homework or for fun<br></br>
        If you have any idea's for a fun project or a usefull one do contact using email given below</p>
      <p className='Text'>Can program in python, typescript, javascript, java, php, html and many more.
      </p>

      <div className='Icon'>
        <Link
          class='Icon-indi'
          onClick={() => { openInNewTab(Facebook) }}
          aria-label='Facebook'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-facebook fa-5x' />
        </Link>
        <Link
          class='Icon-indi'
          onClick={() => { openInNewTab(Instagram) }}
          aria-label='Instagram'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-instagram fa-5x' />
        </Link>
        <Link
          class='Icon-indi'
          onClick={() => { openInNewTab(Youtube) }}
          aria-label='Youtube'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-youtube fa-5x' />
        </Link>
      </div>
      <div className='Icon'>
        <Link
          class='Icon-indi'
          onClick={() => { openInNewTab(Twitter) }}
          aria-label='Twitter'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-twitter fa-5x' />
        </Link>
        <Link
          class='Icon-indi'
          onClick={() => { openInNewTab(LinkedIn) }}
          aria-label='LinkedIn'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-linkedin fa-5x' />
        </Link>
        <Link
          className='Icon-indi'
          onClick={() => { openInNewTab(Discord) }}
          aria-label='discord'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-discord fa-5x' />
        </Link>
      </div>

      <div className='aboutme' id='contact-me'>
        <hr />
        <h1 className='aboutme'>CONTACT ME</h1>
        <p className='Textp'> contact me on email:- [contact][@][aayushgarg][.net] </p>
      </div>
    </div>
  )
}