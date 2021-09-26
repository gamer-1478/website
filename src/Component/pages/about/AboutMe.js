import React from 'react'
import './AboutMe.css'
import myimg from '../../../image/logo.jpg'

const discord = "https://discord.com/users/823237564130525184";
const instagram = "https://www.instagram.com/aayushgarg.official";
const youtube = "https://www.google.com/search?q=not+on+youtube"
const twitter = "https://twitter.com/aysg_ays";
const linkedin = "https://www.google.com/search?q=not+on+linkedin";
const Facebook = "https://www.google.com/search?q=not+on+facebook";
const github = ''

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
            aria-label='Twitter'
          >
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
            onClick={() => { openInNewTab(github) }}
            aria-label='email'>
            <i className='fas fa-envelope fa-lg' />
          </p>

        </div>
      </div>
    </div>
  )
}