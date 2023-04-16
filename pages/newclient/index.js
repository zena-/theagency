import React, { useState} from "react";
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import qs from 'qs';

export default function Ad() {
  const [company, setcompany] = useState('')
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [website, setwebsite] = useState('')

   const handleSubmit = (e) => {
    e.preventDefault()
    if (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/.test(email) && /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)) {
      const data = {
        'form-name': 'clientForm',
        'Company': `${company}`,
        'Name': `${name}`,
        'Email': `${email}`,
        'Phone': `${phone}`,
        'website': `${website}`,
      }
      axios
        .post("/", qs.stringify(data))
        .then(res => {
          console.log("Form successfully submitted")
        })
        .catch(err => console.log(err));

      setcompany("")
      setname("")
      setemail("")
      setphone("")
      setwebsite("")
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Zen - The Agency</title>
        <meta name="description" content="Get a Website That Stands Out! From stunning designs to seamless functionality, we've got you covered." />
        <link rel="icon" href="" />
      </Head>

      <main className="ad">
        <nav>
          <Link href="/"><div className="forT"></div></Link>
          <div className="call"><span className="a-center"></span></div>
          <a href="#form" className="talk hideSmall" ><span className="a-center">let&#39;s talk</span>
          </a>
        </nav>

        <section className="hero b-bottom">
          <div className="hero-copy">
            <div className="hero-copy-in">
              <h1>Transform your website&nbsp;today!</h1>
              <p className="copy-p">At nosazena, we offer professional web development services that will help take your business to the next level. Our team of expert front end developers specializes in creating stunning and functional websites that are tailored to your unique needs. <br/><br/>Whether you need a new website built from scratch or an existing site redesigned, we have the skills and experience to deliver results that exceed your expectations. And with our free consultations, you can get started with no risk and no obligation. <br/><br/>Don&#39;t settle for a mediocre website. Contact nosazena today to learn more about how we can help your business thrive.</p>
              <a href="#form" className="cta o">
                <span>Let&#39;s talk</span>
              </a>
            </div>
          </div>
          <div className="heroImg"></div>
        </section>

        <section className="b-bottom landing">
          <div className="scroll">
            <div className="flex list">
              <div className="box b-right a-center">
                <a href="https://apple.com/au" target="_blank" rel="noreferrer"><img src="/apple.webp" width="100%" alt="nosazena" /></a>
              </div>
              <div className="box b-right a-center">
                <a href="https://shop.circajewels.com/" target="_blank" rel="noreferrer"><img src="/circa.webp" width="100%" alt="nosazena" /></a>
              </div>
              <div className="box b-right a-center">
                <a href="https://www.theevercake.com" target="_blank" rel="noreferrer"><img src="/cake.webp" width="100%" alt="nosazena" /></a>
              </div>
              <div className="box b-right a-center">
                <a href="https://move.all33.com" target="_blank" rel="noreferrer"><img src="/all33Screen.webp" width="100%" alt="nosazena" /></a>
              </div>
              <div className="box b-right a-center">
                <a href="https://meet.sagewellfinancial.com/national-teachers/retire-better" target="_blank" rel="noreferrer"><img src="/sagewellScreen.webp" width="100%" alt="nosazena" /></a>
              </div>
              <div className="box b-right a-center">
                <a href="https://join.pearlcertification.com/elite-contractors" target="_blank" rel="noreferrer"><img src="/pearlScreen.webp" width="100%" alt="nosazena" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="b-bottom ad_services">
          <div className="b-bottom">
            <div className="copywrap">
              <h1 className="title">Services</h1>
              <ul className="copy">
                <li>Our web development services provide businesses with custom-built websites that are both aesthetically pleasing and functional. </li>
                <li>We specialize in building unique designs that stand out in the crowded online marketplace, and our expert team ensures that every website we build is optimized for user experience and search engines. </li>
                <li>We use the latest technologies and frameworks to create fast and responsive websites that work seamlessly across all devices. </li>
                <li>What sets us apart from our competitors is our dedication to providing exceptional customer service and our commitment to delivering high-quality work on time and within budget.</li>
              </ul>
            </div>
            <div className="serviceImg"></div>
          </div>
        </section>

        <section className="b-bottom form" id="form">
          <div className="">
            <h2>skyrocket your business with our <br/>expert web development&nbsp;services</h2>
            <form name="clientForm" className="forFo formPat" onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bot-field" encType="application/x-www-form-urlencoded" >
              <input type="text" required name="Company" placeholder="Company" value={company} onChange={(e) => setcompany(e.target.value)} />
              <input type="text" required name="Name" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
              <input type="email" required name="Email" pattern = "^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
              <input type="text" required name="Phone" pattern="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$" placeholder="Phone" value={phone} onChange={(e) => setphone(e.target.value)} />
              <input type="text" required name="website" placeholder="Website" value={website} onChange={(e) => setwebsite(e.target.value)} />
              <button type="submit">Let&#39;s talk</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>Psalm 91</p>
        <p className="copyRight">© 2023 <a href="mailto:e.nosazena@gmail.com?subject=Let's talk">Nosazena LLC</a></p>
        <p>Psalm 91</p>
      </footer>
    </div>
  )
}
