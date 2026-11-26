import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:site_name" content="Nosazena" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#f37021" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Static copy of the form so Netlify can detect it at deploy time */}
        <form className="none" name="clientForm" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="form-name" value="clientForm" />
          <p className="none">
            <label>
              Do not fill <input name="bot-field" />
            </label>
          </p>
          <input type="text" name="Company" />
          <input type="text" name="Name" />
          <input type="email" name="Email" />
          <input type="text" name="Phone" />
          <input type="text" name="website" />
          <button type="submit">contact me</button>
        </form>
      </body>
    </Html>
  )
}
