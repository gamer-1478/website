import React, { useState } from 'react';
import './Footer.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import firebase from "../../firebase";
import { HashLink } from 'react-router-hash-link';

//import {usePopper} from 'react-popper';
const discord = "https://discord.com/users/823237564130525184";
const instagram = "https://www.instagram.com/aayushgarg.official";
const youtube = "https://www.google.com/search?q=not+on+youtube"
const twitter = "https://twitter.com/aysg_ays";
const linkedin = "https://www.google.com/search?q=not+on+linkedin";
const Facebook = "https://www.google.com/search?q=not+on+facebook";

const currentDate = new Date().toLocaleTimeString() +" " +new Date().toDateString();
const timestamp = currentDate;

firebase.firestore().collection('site-visits').add({
  time: timestamp,
  date: currentDate
})

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function Footer() {
  var regex = /^(.+)@(.+)$/;
  const [email, setemail] = useState('')
  const [successem, Setsuccessem] = useState(false)
  const [Error, SetError] = useState('')
  const [DisplayError, SetDisplayError] = useState(false)

  const emailInputHandler = (e) => {
    SetDisplayError(false);
    SetError('')
    setemail(e.target.value);
  };
  async function handleSubmit() {
    SetDisplayError(false)
    SetError('')
    const emailread = firebase.firestore().collection('email-subscriber');
    const snaapshot = await emailread.where('email', '==', email).get();
    
    if (snaapshot.empty) {
      if (regex.test(email)) {
        emailread.add({
          'email': email
        })
        Setsuccessem(true)
      }
      else {
        SetDisplayError(true)
        SetError('Email is not vaild mate, please check email!!')
      }
    }
    else {
      SetDisplayError(true)
      SetError('Email is already registered Mate, you are already getting messages!!')
    }
  };

  return (
    <div className='footer-container'>
      {successem ? (
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Thanks you for registering
      </p>
          <p className='footer-subscription-text'>
            You will now start to recieve the emails at {email} in 24 hours.
        </p>
        </section>) : (
          <>
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
                    id='emailtext'
                    onChange={emailInputHandler}
                  />
                  <Button onClick={handleSubmit} buttonStyle='btn--outline'>Subscribe</Button>
                </form>
                {DisplayError ? (<p style={{ color: '#f44a1f' }}>{Error}</p>) : (<></>)}
              </div>
            </section>
          </>)}
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
            <Link to='' onClick={() => { openInNewTab(instagram) }}>Instagram</Link>
            <Link onClick={() => { openInNewTab(Facebook) }}>Facebook</Link>
            <Link onClick={() => { openInNewTab(youtube) }}>Youtube</Link>
            <Link onClick={() => { openInNewTab(twitter) }}>Twitter</Link>
            <Link onClick={() => { openInNewTab(discord) }}>Discord</Link>
            <Link onClick={() => { openInNewTab(linkedin) }}>LinkedIn</Link>
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
            <Link
              className='social-icon-link facebook'
              onClick={() => { openInNewTab(Facebook) }}
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              onClick={() => { openInNewTab(instagram) }}
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              onClick={() => { openInNewTab(youtube) }}
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              onClick={() => { openInNewTab(twitter) }}
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              onClick={() => { openInNewTab(linkedin) }}
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            <Link
              className='social-icon-link discord'
              onClick={() => { openInNewTab(discord) }}
              aria-label='discord'
            >
              <i className='fab fa-discord' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;