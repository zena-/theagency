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
          <div className="call"><p>...zena</p></div>
          <a href="mailto:e.nosazena@gmail.com?subject=Let's talk" className="talk hideSmall" ><span className="a-center">let connect  
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
          </svg>
            </span>
          </a>
        </nav>

        <section className="hero b-bottom">
          <div className="hero-copy">
            <div className="hero-copy-in">
              <h3>Businesses: spend your time thinking about your customers, we&#39;ll take care of your site</h3>
              <p className="copy-p">You may not know where to start, what can or can not be done, ot what&#39;s needed. <strong>I&#39;m here to help.</strong> 
                <br/>A front end web developers that specialize in user interaction. 
                <br/>I build landing pages, e-commerce sites, Ads, and more. We&#39;ll also update and maintain your existing site if needed.
                <br/>Using HTML, CSS, Javascript, React, and Next.</p>
              <a href="mailto:e.nosazena@gmail.com?subject=Let's talk" className="cta o">
                <span>Let&#39;s talk about you 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-heart" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l3.235 1.94a2.76 2.76 0 0 0-.233 1.027L1 5.384v5.721l3.453-2.124c.146.277.329.556.55.835l-3.97 2.443A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741l-3.968-2.442c.22-.28.403-.56.55-.836L15 11.105V5.383l-3.002 1.801a2.76 2.76 0 0 0-.233-1.026L15 4.217V4a1 1 0 0 0-1-1H2Zm6 2.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
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
