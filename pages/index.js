import React, { useState} from "react";
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Zen - The Agency</title>
        <meta name="description" content="Get a Website That Stands Out! From stunning designs to seamless functionality, we've got you covered." />
        <link rel="icon" href="" />
      </Head>

      <main className="">
        <nav>
          <div className="forT"><span className="a-center"></span></div>
          <div className="call"></div>
          <a href="mailto:e.nosazena@gmail.com?subject=Let's talk" className="talk hideSmall" ><span className="a-center">let&#39;s connect</span>
          </a>
        </nav>

        <section className="hero b-bottom">
          <div className="hero-copy">
            <div className="hero-copy-in">
              <h1>Welcome to Our Digital Playground: Crafting Engaging Web Experiences for You!</h1>
              <p className="copy-p">Welcome to nosazena, your go-to web development agency for creating stunning and responsive websites. Our team of experienced developers and designers are passionate about creating tailor-made solutions that help our clients achieve their business goals.
                <br/>At nosazena, we believe in delivering excellence, and that&#39;s why we use the latest technologies and industry standards to create websites that are not only visually stunning but also user-friendly and optimized for search engines.
                <br/>Whether you&#39;re a small business owner or a large corporation, we&#39;re committed to providing you with the highest quality web development services at an affordable price. Contact us today to schedule a consultation and see how we can help you take your online presence to the next level.</p>
              <a href="mailto:e.nosazena@gmail.com?subject=Let's talk" className="cta o">
                <span>Let&#39;s talk about you</span>
              </a>
            </div>
          </div>
          <div className="imgWrap"><img src="/drawWalk.webp" alt="Sagewell" /></div>
        </section>

        <section className="b-bottom ecomm">
          <div className="b-bottom">
            <p className="title">Our services include:</p>
            <ul className="">
              <li>Front-end development: From responsive design to user experience optimization, we create websites that look great and function seamlessly on all devices.</li>
              <li>E-commerce development: We can help you set up your online store, from payment gateways to product management, to ensure a seamless shopping experience for your customers.</li>
              <li>Content management system (CMS) development: We build custom CMS solutions to make it easy for you to manage and update your website content without any technical knowledge.</li>
              <li>Website maintenance and support: We offer ongoing maintenance and support to ensure your website stays up to date and runs smoothly.</li>
            </ul>
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
        <p className="copyRight">© 2023 Nosazena LLC</p>
        <p>Psalm 91</p>
      </footer>
    </div>
  )
}
