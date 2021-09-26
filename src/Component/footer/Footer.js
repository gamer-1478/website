import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

//import {usePopper} from 'react-popper';
const discord = "https://discord.com/users/823237564130525184";
const instagram = "https://www.instagram.com/aayushgarg.official";
const youtube = "https://www.google.com/search?q=not+on+youtube"
const twitter = "https://twitter.com/aysg_ays";
const linkedin = "https://www.google.com/search?q=not+on+linkedin";
const Facebook = "https://www.google.com/search?q=not+on+facebook";

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='about-me'><h2>About Me</h2></Link>
            <Link to='github-repos'>Github Repositories</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <a href='/TOS.txt' target='_blank'>Terms of Service</a>
          </div>
          <div className='footer-link-items'>
            <HashLink smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }} to='/about-me#contact-me'><h2>Contact Me</h2></HashLink>
            <HashLink to='/about-me#contact-me' smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }}>Contact</HashLink>
            <HashLink to='/about-me#contact-me' smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }}>Support</HashLink>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <p onClick={() => { openInNewTab(instagram) }}>Instagram</p>
            <p onClick={() => { openInNewTab(Facebook) }}>Facebook</p>
            <p onClick={() => { openInNewTab(youtube) }}>Youtube</p>
            <p onClick={() => { openInNewTab(twitter) }}>Twitter</p>
            <p onClick={() => { openInNewTab(discord) }}>Discord</p>
            <p onClick={() => { openInNewTab(linkedin) }}>LinkedIn</p>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Aayush Garg
            </Link>
          </div>
          <small className='website-rights'>Aayush Garg © 2020</small>
          <div className='social-icons'>
            <p
              className='social-icon-link facebook'
              onClick={() => { openInNewTab(Facebook) }}
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </p>
            <p
              className='social-icon-link instagram'
              onClick={() => { openInNewTab(instagram) }}
              aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </p>
            <p
              className='social-icon-link youtube'
              onClick={() => { openInNewTab(youtube) }}
              aria-label='Youtube'>
              <i className='fab fa-youtube' />
            </p>
            <p
              className='social-icon-link twitter'
              onClick={() => { openInNewTab(twitter) }}
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </p>
            <p
              className='social-icon-link linkedin'
              onClick={() => { openInNewTab(linkedin) }}
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </p>
            <p
              className='social-icon-link discord'
              onClick={() => { openInNewTab(discord) }}
              aria-label='discord'
            >
              <i className='fab fa-discord' />
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;