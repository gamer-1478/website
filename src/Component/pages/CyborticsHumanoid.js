import React from 'react'
import './cybortics.css'

export default function CyborticsHumanoids() {
  return (
    <>
      <h1 className="cybortics-humanoid">
        CYBORTICS HUMANOID
      </h1>
      <div className="centerp">
        <p className="centerp">
          This project is inspired by inmoov humanoid by Gael Langevin. His
          project took a very different so, we studied it and made a new better
          suited approach as to form a real competent product that can be sold,
          But we are just in RnD stage right now, We would like to give out
          information, but i'm afraid we can't do that too much.
        </p>
        <p className="centerp">
          What I can disclose is that the project will be open source when we
          start high speed devlopment on it. Currently we are working on the
          software that is NOT GOING TO BE OPEN-SOURCE, we will make the
          hardware open source,
        </p>
        <p className="centerp">
          What we are doing in software is making an vision detection library
          that has massive collection, is fast enough to be used in real world,
          and can segment and group object's, and without always being consious
          about all the stuff the server deems unnecessary, we are working in
          real time video encoding decoding, image recognition ml and ai, we
          also have a blog post on what is ai,{' '}
          {<a href="/ai">(to see click here)</a>} and btw that was also my
          homework is cbse ai class, but anyway's ml is mainly done in python
          and javascript and some c# and c++ mainly c++17.
        </p>
        <p className="centerp">
          The approach we are taking is braking down, the big ai into some small
          ai's and we are also experimenting with self dataset increasing ai's
          that need to be trained intitially but will automatically increase
          their data set's, so that we can takle one module at once, we have
          started with sound recognition module, that is self training and self
          correcting with multiple dialects of multiple language's mainly hindi
          and english. we have also started work on image recognition ai as we
          didn't want to use google's vision api or of any third party for that
          matter.
        </p>
      </div>
      <div className="centerlp">
        <h1 className="centerlph1">
          So this is what we are breaking down our ai's into
        </h1>
        <p className="centerlp">
          1. vision module:- it detects human emotion, with all surrounding
          objects, human movement and orientation, hand movement nervousness
          etc. and gives you that data.
        </p>
        <p className="centerlp">
          2. Sound module:- like rtx voice technology, it removes all noise
          first then tries to see commands, listens for human emotion like
          sadness, anger, pain annoyance etc.
        </p>
        <p className="centerlp">
          3. chat module:- a module that has passed turing test and can add
          imperfections as humans in chat and also add emotion in chat.
        </p>
        <p className="centerlp">
          4. writing module:- this module can use humanoids hand to pick up a
          writing instrument and start writing with the ability to write with
          human imperfections causing it to be indistinguishable than human
          writing.{' '}
        </p>
        <p className="centerlp">
          5. Hand module:- it can receive information as to move the hands to
          this location based on vision dat, let's say to pour a glass of juice.
        </p>
        <p className="centerlp">
          6. movement module:- with this module our humanoid has the ability to
          move using legs and hands in the real world with human imperfection
          and be non distinguishable movement from humans.
        </p>
        <p className="centerlp">
          7. data modules:- these modules can be downloaded to add specific data
          to a robot such as doctor module or lawyer module or teacher module
          etc.
        </p>
        <p className="centerlp">
          8. master module:- it has the ability to combine data from all other
          machine learning based modules that can keep on learning and give that
          data to another module and learn in the process. this master module
          also has emotion module to simulate and feel human emotion.<br></br>
        </p>
        <p className="centerlp">
          <a href="https://github.com/aayushGarg-1748/inmoov-humanoid-robot">Link to hardware files</a> = https://github.com/aayushGarg-1748/inmoov-humanoid-robot
        </p>
      </div>
    </>
  )
}
