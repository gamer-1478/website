import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive info on my projects
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='about-me'><h2>About Me</h2></Link>
            <Link to='github-repos'>Github Repositories</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <a href='/LICENSE.txt' target='_blank'>Terms of Service</a>
          </div>
          <div class='footer-link-items'>
            <Link to='/contact-me'><h2>Contact Me</h2></Link>
            <Link to='/contact-me'>Contact</Link>
            <Link to='/contact-me'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='' onClick={() => { openInNewTab("https://www.instagram.com/aayushgarg.official") }}>Instagram</Link>
            <Link onClick={() => { openInNewTab("https://www.facebook.com/aayush.garg.official") }}>Facebook</Link>
            <Link onClick={() => { openInNewTab("https://youtube.com/404lolIamNotOnYoutube") }}>Youtube</Link>
            <Link onClick={() => { openInNewTab("https://twitter.com/aayushg36875133") }}>Twitter</Link>
            <Link onClick={() => { openInNewTab("https://discord.gg/dRw2RHDM") }}>Discord</Link>
            <Link onClick={() => { openInNewTab("https://linkedin.com/404lolIamNotOnLinkedIn") }}>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Aayush Garg
            </Link>
          </div>
          <small class='website-rights'>Aayush Garg © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              onClick={() => { openInNewTab("https://www.facebook.com/aayush.garg.official") }}
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              onClick={() => { openInNewTab("https://www.instagram.com/aayushgarg.official") }}
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              onClick={() => { openInNewTab("https://youtube.com/404lolIamNotOnYoutube") }}
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              onClick={() => { openInNewTab("https://twitter.com/aayushg36875133") }}
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              onClick={() => { openInNewTab("https://linkedin.com/404lolIamNotOnLinkedIn") }}
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              className='social-icon-link discord'
              onClick={() => { openInNewTab("https://discord.gg/dRw2RHDM") }}
              aria-label='discord'
            >
              <i class='fab fa-discord' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;