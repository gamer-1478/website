import React, { useState, useEffect } from 'react'
import { isProfane } from '../../bad-words/badwords'
//import { Button } from '../Button';
import firebase from '../../firebase'
import './testimonial.css'

var alldoc = []
function Testimonials() {
  const [name, setname] = useState('')
  const [Testimonial, setTestimonial] = useState('')
  const [successem, Setsuccessem] = useState(false)
  const [Errorr, SetErrorr] = useState('')
  const [DisplayError, SetDisplayError] = useState(false)
  const testimonyread = firebase.firestore().collection('testimonies')
  const [condi, setcondi] = useState(false)
  const TestimonialInputHandler = (e) => {
    SetDisplayError(false)
    SetErrorr('')
    setTestimonial(e.target.value)
  }
  const NameInputHandler = (e) => {
    SetDisplayError(false)
    SetErrorr('')
    setname(e.target.value)
  }
  async function handleTestimonySubmit() {
    SetDisplayError(false)
    SetErrorr('')
    const snaapshot = await testimonyread.where('name', '==', name).get()
    if (isProfane(name).length > 0) {
      SetDisplayError(true)
      SetErrorr(
        'This name "' +
          String(name) +
          '" has been identified as profane ,if this is a mistake contact-me!!',
      )
    } else {
      if (isProfane(Testimonial).length > 0) {
        SetDisplayError(true)
        SetErrorr(
          'This testimonial word "' +
            String(isProfane(Testimonial)) +
            '" has been identified as profane ,if this is a mistake contact-me!!',
        )
      } else {
        if (Testimonial.length > 10 || name.length> 5) {
          if (snaapshot.empty === true) {
            testimonyread.add({
              name: name,
              testimony: Testimonial,
            })
            Setsuccessem(true)
          } else {
            SetDisplayError(true)
            SetErrorr(
              'This name has alread added an testimony, if this is a mistake contact-me!!',
            )
          }
        } else {
          SetDisplayError(true)
          SetErrorr(
            'Your name or testimony is too short, please write testimony or name that is longer than a single word.',
          )
        }
      }
    }
  }
  async function Gettestimon() {
    alldoc = []
    const snapshot = await testimonyread.where('testimony', '!=', null).get()
    if (!snapshot.empty) {
      snapshot.forEach((doc) => {
        alldoc.push(doc.data())
      })
    }
  }
  useEffect(() => {
    async function getTok() {
      await Gettestimon();
      alldoc.map((forget) => console.log(forget.name));
      setcondi(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    getTok()
  }, [alldoc])
  return (
    <>
      <h1 className="testimonials">Testimonies</h1>
      {condi ? (
        alldoc.map((forget, index) => (
          <h2 className="decide">
            {index + 1}. "{forget.name}" say's, "{forget.testimony}"
          </h2>
        ))
      ) : (
        <p>Getting them Please wait</p>
      )}
      <hr />
      <div className="testimonials-text">
        <h1>
          Enter your Testimonials below, pending automatic moderation they will
          be added.
        </h1>
        {successem ? (
          <>
            <h2>
              Testimonial "{String(Testimonial)}" by "{String(name)}" has been
              Moderated and added, thank you for sharing, (if spam will be
              deleted with 24 hours)
            </h2>
          </>
        ) : (
          <div className="temon">
            <input
              className="temoninput"
              type="text"
              placeholder="Your Full Name"
              id="nametext"
              onChange={NameInputHandler}
            />
            <input
              className="temoninput"
              type="text"
              placeholder="Your Testimonial"
              id="testimonialtext"
              onChange={TestimonialInputHandler}
            />
            <button
              className="mybtn"
              type="button"
              onClick={() => handleTestimonySubmit()}
            >
              Submit Testimonial
            </button>

            {DisplayError ? (
              <p style={{ color: '#f44a1f' }}>{Errorr}</p>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Testimonials
