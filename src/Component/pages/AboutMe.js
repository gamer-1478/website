import React from 'react'
import './AboutMe.css'
import myimg from '../logo.jpg'
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
      <p className='Text'> Hi i am aayush garg, i am 15 years old and know programming. {'\n'}
    I didn't learn from any website, but if you ask me i will recommend youtube, {'\n'}
    don't even try whitehat those people deserve a special place in hell</p>
      <p className='Text'>I don't sell anything nor promote any good's. i'm not affilated with anyone,
      i just run an single person organization called openstudyindia which to say the least legally is not even an organization, it doesn't have any trademarks and is not registered anywhere.
      it has just one goal to gather content and make content detection for indian students easily, we are targeting 5-12 standard students, it will have all the content from 100's of books,
      and millions of small quizes and make it accessible to all, it will also have management like library inventory management, studnet management reportcard generation, digital notebook's etc.
        Like a google for indian students of book and study content.</p>
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