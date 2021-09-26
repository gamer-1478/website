import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

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