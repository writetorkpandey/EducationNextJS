import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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
        <body>
          <Main />
          <NextScript />

          <script src="/plugins/jQuery/jquery.min.js"></script>
          <script src="plugins/bootstrap/bootstrap.min.js"></script>

          <script src="plugins/slick/slick.min.js"></script>

          <script src="plugins/aos/aos.js"></script>

          <script src="plugins/venobox/venobox.min.js"></script>

          <script src="plugins/filterizr/jquery.filterizr.min.js"></script>

          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu5nZKbeK-WHQ70oqOWo-_4VmwOwKP9YQ"></script>
          <script src="plugins/google-map/gmap.js"></script>

          <script src="js/script.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
