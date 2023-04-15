import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="nosazena" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <form className="none" role="form" name="clientForm" method="POST" encType="application/x-www-form-urlencoded" netlify-honeypot="bot-field" data-netlify="true" >
          <input type="hidden" name="form-name" value="clientForm" />
          <p className="none"><label >Do not fill <input name="bot-field" /></label></p>
          <input type="text" name="Company" placeholder="Company" />
          <input type="text" name="Name" placeholder="Name" />
          <input type="email" name="Email" placeholder="Job Email" />
          <input type="text" name="Phone" placeholder="Phone" />
          <input type="text" name="website" placeholder="website" />
          <button type="submit">contact me</button>
        </form>
      </body>
    </Html>
  )
}