import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

//import {usePopper} from 'react-popper';
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
            <p
              className='social-icon-link github'
              onClick={() => { openInNewTab(github) }}
              aria-label='github'>
              <i className='fab fa-github' />
            </p>
            <p
              className='social-icon-link email'
              onClick={() => { openInNewTab(mail) }}
              aria-label='email'>
              <i className='fas fa-envelope' />
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;