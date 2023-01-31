import React, { useState} from "react";
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Zen - The Agency</title>
        <meta name="description" content="I'll build the website with your peace in mind" />
        <link rel="icon" href="" />
      </Head>

      <main className="">
        <nav>
          <div className="forT"><span className="a-center"></span></div>
          <div className="call"><p>Zen: The&nbsp;Agency</p></div>
          <a href="mailto:e.nosazena@gmail.com?subject=Let's talk" className="talk hideSmall" ><span className="a-center">let&#39;s talk about you <svg width="15" height="15" className="a-center" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8.69596L1.29935 7.5097L7.08124 12.7885L7.08124 0L8.91882 0V12.7885L14.7006 7.5097L16 8.69596L7.99997 16L0 8.69596Z" fill="white"/>
            </svg>
            </span>
          </a>
        </nav>

        <section className="hero b-bottom">
          <div className="hero-copy">
            <div className="hero-copy-in">
              <h3>Businesses: spend your time thinking about your customers, I&#39;ll take care of your website</h3>
              <p className="copy-p">You may not know where to start, what can or can not be done, ot what&#39;s needed. <strong>I&#39;m here to help.</strong> 
                <br/>A front end web developers that specialize in user interaction. 
                <br/>I build landing pages, e-commerce sites, Ads, and more. We&#39;ll also update and maintain your existing site if needed.
                <br/>Using HTML, CSS, Javascript, React, and Next.</p>
              <a href="mailto:e.nosazena@gmail.com?subject=Let's talk" className="cta o">
                <span>Let&#39;s talk about you 
                  <svg width="15" height="15" className="a-center" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8.69596L1.29935 7.5097L7.08124 12.7885L7.08124 0L8.91882 0V12.7885L14.7006 7.5097L16 8.69596L7.99997 16L0 8.69596Z" fill="white"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="imgWrap"><img src="/drawWalk.webp" alt="Sagewell" /></div>
        </section>

        <section className="b-bottom ecomm">
          <div className="b-bottom">
            <p className="title">E-Commerce Sites:</p>
          </div>
          <div className="flex boxes">
            <div className="box b-right a-center">
              <p><a href="https://apple.com/au" target="_blank" rel="noreferrer">Apple</a> <br/>Localization of web pages on Apple.com for Australia, New Zealand, South East Asia, Canada and other geolocations.</p>
              <img src="/apple.webp" width="100%" alt="nosazena" />
            </div>
            <div className="box b-right a-center">
              <p><a href="https://shop.circajewels.com/" target="_blank" rel="noreferrer">Circa</a> <br/>Maintained and update this Shopify site based on client requests.</p>
              <img src="/circa.webp" width="100%" alt="nosazena" />
            </div>
            <div className="box b-right a-center">
              <p><a href="https://www.theevercake.com" target="_blank" rel="noreferrer">The Ever Cake</a> <br/>Maintained and update this Shopify site based on client requests.</p>
              <img src="/cake.webp" width="100%" alt="nosazena" />
            </div>
          </div>
        </section>

        <section className="b-bottom landing">
          <div className="b-bottom">
            <p className="title">Landing Pages: <span>A landing page is a standalone web page that a person lands on after clicking through from an email, ad, or other digital location. Every content strategy should include the use of landing pages to convert more traffic and increase conversions.</span></p>
          </div>
          <div className="flex boxes">
            <div className="box b-right a-center">
              <p><a href="https://move.all33.com" target="_blank" rel="noreferrer">All33</a> <br/>Built with React.js and Netlify and with the Shopify buy button that took users directly to their Shopify checkout.</p>
              <img src="/all33Screen.webp" width="100%" alt="nosazena" />
            </div>
            <div className="box b-right a-center">
              <p><a href="https://meet.sagewellfinancial.com/national-teachers/retire-better" target="_blank" rel="noreferrer">Sagewell</a> <br/>Built with React.js and Netlify.</p>
              <img src="/sagewellScreen.webp" width="100%" alt="nosazena" />
            </div>
            <div className="box b-right a-center">
              <p><a href="https://join.pearlcertification.com/elite-contractors" target="_blank" rel="noreferrer">Pearl Certification</a> <br/>Built with React.js and Netlify. A Landing page that takes the user on a journey while they fill out a form, to see if they qualify or not.</p>
              <img src="/pearlScreen.webp" width="100%" alt="nosazena" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Psalm 91</p>
        <p className="copyRight">Copyright 2022 Nosazena LLC</p>
        <p>Psalm 91</p>
      </footer>
    </div>
  )
}
