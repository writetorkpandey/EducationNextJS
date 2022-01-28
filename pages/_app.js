import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>The Agile Masters</title>
        {/* <!-- ** Plugins Needed for the Project ** --> */}
        {/* <!-- Bootstrap --> */}
        <link rel="stylesheet" href="/plugins/bootstrap/bootstrap.min.css" />
        {/* <!-- slick slider --> */}
        <link rel="stylesheet" href="/plugins/slick/slick.css" />
        {/* <!-- themefy-icon --> */}
        <link
          rel="stylesheet"
          href="/plugins/themify-icons/themify-icons.css"
        />
        {/* <!-- animation css --> */}
        <link rel="stylesheet" href="/plugins/animate/animate.css" />
        {/* <!-- aos --> */}
        <link rel="stylesheet" href="/plugins/aos/aos.css" />
        {/* <!-- venobox popup --> */}
        <link rel="stylesheet" href="/plugins/venobox/venobox.css" />

        {/* <!-- Main Stylesheet --> */}
        <link href="/css/style.css" rel="stylesheet" />

        {/* <!--Favicon--> */}
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
