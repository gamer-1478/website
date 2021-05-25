import React from 'react'
import './AboutMe.css'
import myimg from '../../../image/logo.jpg'
import { Link } from 'react-router-dom';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
export default function AboutMe() {
  return (
    <div>
      <h1 className='aboutme'>ABOUT ME</h1>
      <img className='aboutme-image' width='400px' src={myimg} alt='myImage' />
      <p className='Text'> Hi i am aayush garg, i am 15 years old. <br></br>
        I can develop a full stack, most projects are homework or for fun<br></br>
        If you have any idea's for a fun project or a usefull one do contact using email given below</p>
      <p className='Text'>Can program in python, typescript, javascript, java, php, html and much much more.</p>
      
      <div className='Icon'>
        <Link
          class='Icon-indi'
          onClick={() => { openInNewTab("https://www.google.com/search?q=not+on+facebook") }}
          aria-label='Facebook'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-facebook fa-5x' />
        </Link>
        <Link
          class='Icon-indi'
          onClick={() => { openInNewTab("https://www.instagram.com/aayushgarg.official") }}
          aria-label='Instagram'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-instagram fa-5x' />
        </Link>
        <Link
          class='Icon-indi'
          onClick={() => { openInNewTab("https://www.google.com/search?q=not+on+youtube") }}
          aria-label='Youtube'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-youtube fa-5x' />
        </Link>
        <Link
          class='Icon-indi'
          onClick={() => { openInNewTab("https://twitter.com/AayushG_offcl") }}
          aria-label='Twitter'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-twitter fa-5x' />
        </Link>
        <Link
          class='Icon-indi'
          onClick={() => { openInNewTab("https://www.google.com/search?q=not+on+linkedin") }}
          aria-label='LinkedIn'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-linkedin fa-5x' />
        </Link>
        <Link
          className='Icon-indi'
          onClick={() => { openInNewTab("https://discord.com/users/823237564130525184") }}
          aria-label='discord'
          style={{ color: '#000000' }}
        >
          <i class='fab fa-discord fa-5x' />
        </Link>
      </div>

      <div className='aboutme' id='contact-me'>
        <hr />
        <h1 className='aboutme'>CONTACT ME</h1>
        <p className='Textp'> contact me on email:- argtech.1234@gmail.com </p>
      </div>
    </div>
  )
}