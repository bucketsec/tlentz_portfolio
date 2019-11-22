import React from 'react'
import Head from 'next/head'
import VisibilitySensor from 'react-visibility-sensor'
import LazyImg from "../components/LazyImg";


const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <section className={`white flex flex-column justify-center items-center pb4`} style={{height: 400, backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: 'linear-gradient(rgba(242,104,35,0.8), rgba(242,104,35,0.8)), url("/code-bg.jpg")'}}>
      <h1 className={`f1 mb0 pb0 ph3 tc`}>
          HI, MY NAME IS TIM LENTZ
      </h1>
      <hr style={{borderBottom: '5px solid white', width: 80, height: 0}} className={`mv4`} />
      <p className={`ph3 tc`} style={{paddingTop: 5}}>
          DID I GET YOUR ATTENTION?
      </p>
    </section>

    <section className={`w-100 ma0 pt6 pb5 flex flex-column items-center`}>
      <h2 className={`f2 ph3 tc`}>Tim Lentz: Why you should hire me</h2>
      <div className={`w-100 mw8 flex flex-row flex-wrap flex-nowrap-l justify-between relative pa0 na3 pv4`}>
        <div style={{minHeight: 300}} className={`card--border--top card--hover bg-white w-100 w-third-l ma3 pa4 f4`}>
          <i className="fa fa-handshake-o f1 mb2" aria-hidden="true"></i>
          <h3 className={`f3 mb2`}>
            Dependability
          </h3>
          <p>
            Are you looking for someone who isn't afraid of extra hours? Someone who doesn't have a dog to walk, or a baby to run home to? Let's Talk!
          </p>
        </div>
        <div style={{minHeight: 300}} className={`card--border--top card--hover bg-white w-100 w-third-l ma3 pa4 f4`}>
          <i className="fa fa-pencil f1 mb2" aria-hidden="true"></i>
          <h3 className={`f3 mb2`}>
            Creativity
          </h3>
          <p>
            Would you call developing an identical website to your own with content about why you should hire someone competitive?
          </p>
        </div>
        <div style={{minHeight: 300}} className={`card--border--top card--hover bg-white w-100 w-third-l ma3 pa4 f4`}>
          <i className="fa fa-fire f1 mb2" aria-hidden="true"></i>
          <h3 className={`f3 mb2`}>
            Modern
          </h3>
          <p>
            This website was built with server side ReactJS using the NextJS framework. Learning the "new stuff" is my passion.
          </p>
        </div>
      </div>
    </section>

    <section className={`w-100 ma0 pb6 mb4 flex flex-column items-center`}>
      <h2 className={`f2`}>How I got here</h2>
      <div style={{lineHeight: '1.6em', textAlign: 'justify', textJustify: 'inter-word'}} className={`w-100 mw8 pa3`}>
        <p className={`mv2 pv1 f4 fw1`}>
          Vaguely getting into web development as an answer to a problem has quickly turned into a career. Once
          upon a time, 14 year old Tim was asked to do AV work at a church. <em>(No, I'm not religious)</em>. Little
          did I know that they would also ask me to find a way to live stream videos directly onto their website. A few
          months later, I was writing php and using AWS to stream videos via rtmp.
        </p>
        <p className={`mv2 pv1 f4 fw1`}>
          My next journey led me into working for a non-profit education company as their IT director. In the 6 years I
          held that position, I had the opportunity to: Write, shoot, direct, and edit videos, design, develop, and
          maintain websites, and communicate, present, and pitch to professionals. But something held my attention more
          than anything else. <strong>Web development</strong>.
        </p>
        <p className={`mv2 pv1 f4 fw1`}>
          So I embarked on that journey for a few months until I found a position at The Spokesman Review here in
          Spokane WA. I fell in love with the location, the work, and the weather. Spokesman wasn't my first choice
          though. I sent you a resume too, and that didn't get your attention. So here I am. I've moved to Spokane,
          I've picked up a bunch of experience in my time at Spokesman, and now, I'm going to try again.
        </p>
        <p className={`mv2 pv1 f4 fw1`}>
          Did I mention, I moved within a two minute walk of your office?
        </p>
      </div>
      <h2 className={`mt5 f2 ph3 tc`}>Oh... and I think I'm pretty cool.</h2>
    </section>

    <section className={`pv4 w-100 bg-white flex flex-column items-center`}>

      <div style={{marginTop: '-10em'}} className={`mw8 ph3`}>
        <LazyImg  imgSrc={'cool.jpg'} />
      </div>
      <div style={{lineHeight: '1.6em', textAlign: 'justify', textJustify: 'inter-word'}} className={`w-100 mw8 pa3`}>
        <p className={`mv2 pv1 f4 fw1`}>I'm just an introverted extrovert who's obsessed with coffee. Black cold brew to be specific. I don't have
        anything besides my apartment, car, and fiance. I was going to try to fill this section with a bunch of random
        stuff about be, because... you know. but, I guess I'm just Tim. Hello.</p>
      </div>
    </section>

    <section className={`w-100 flex justify-center items-center flex-column pv5 ph3`}>
      <h3 className={`f3 mb4 tc`}>
        So you're ready to meet me? GREAT!
      </h3>
      <a href="/contact" className={`hover--icon--toggle white flex justify-center items-center`} style={{backgroundColor: '#f26823', width: `200px`, height: 50}}>
        <h2 className={`f4`}>Contact me </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
      </a>
    </section>
  </>
)

export default Home
