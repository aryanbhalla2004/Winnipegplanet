import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "../styles/homepage.css";
const Homepage = (props) => {
  return (
    <>
    <Helmet>
      <title>Home | Winnipeg Planet Computer Repair</title>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
      <meta name="description" content="Winnipeg Planet Computer & Technology is a IT Company that has more then 20 years of experience in proving services to both small and commercial sized business."></meta>
    </Helmet>
      <div className="slider-below-header">
        <div className="content-sizing slider-below-header-content">
          <ul className="slider-info-left">
            <h3>Information Technology Systems</h3>
            <h1>Creating a better and reliable <span className="bold-primary-color">IT solutions</span></h1>
            <p>Winnipeg Planet Computer & Technology is a IT Company that has more then 20 years of experience in proving services to both small and commercial sized business.</p>
            <Link to="/pages/contact-us" onClick={(e) => props.setLoading(true)}>Contact Us &nbsp; <i className="fas fa-arrow-circle-right"></i></Link>
          </ul>
          <ul className="slider-image">
            <img src="/3.png" width="500" alt="Slider containing a girl with an ipad"/>
          </ul>
        </div>
      </div>
      <div className="about-home">
        <div className="content-sizing about-home-content">
          <ul className="images-home-about-section">
            <div className="image-one">
              <img src="/about1.jpg" width="430" alt="Team meeting"/>
              <div className="absolute-box-image-about">
                <img src="/about2.jpg" width="430" alt="Programming on the laptop"/>
                <div className="experience-about-home-box">
                  <h1>20 Years of Experience</h1>
                </div> 
              </div> 
            </div>
          </ul>
          <ul className="text-home-about-section">
            <h1>We Help IT Companies & Individual Find Solutions</h1>
            <p>We won't stop until all of your IT concerns are resolved. We make your life easy by providing you with rapid service from qualified expert techs through phone or the internet.</p>
            <ul>
              <li>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="75.000000pt" height="70.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#086AD8" stroke="none">
                    <path d="M105 4756 c-37 -17 -80 -62 -94 -99 -7 -18 -11 -152 -11 -368 0 -326
                    1 -340 20 -359 24 -24 77 -27 106 -6 18 14 19 32 24 353 l5 338 2405 0 2405 0
                    3 -1847 2 -1848 -22 -5 c-13 -3 -234 -4 -493 -3 l-470 3 -3 78 -3 77 394 0
                    394 0 21 23 c22 23 22 26 22 445 0 409 -1 423 -20 442 -30 30 -83 27 -109 -6
                    -20 -26 -21 -38 -21 -390 l0 -364 -340 0 -340 0 0 165 0 165 66 0 c86 0 136
                    26 165 86 17 35 20 58 17 132 l-3 89 67 71 c114 121 114 194 1 312 -35 36 -63
                    69 -64 75 -1 5 -2 48 -3 95 -4 157 -61 209 -230 210 l-79 0 -63 60 c-124 120
                    -204 119 -324 -4 l-54 -56 -81 0 c-174 -1 -234 -60 -235 -230 l0 -86 -56 -54
                    c-122 -119 -123 -204 -6 -323 l57 -58 6 -103 c4 -82 10 -110 27 -138 28 -45
                    80 -70 155 -76 l57 -4 0 -164 0 -164 -1470 0 -1470 0 0 1545 0 1545 2100 0
                    2100 0 0 -999 c0 -995 0 -998 21 -1025 26 -33 79 -36 109 -6 20 20 20 33 20
                    1080 0 1047 0 1060 -20 1080 -20 20 -33 20 -2230 20 -2197 0 -2210 0 -2230
                    -20 -20 -20 -20 -33 -20 -1673 l0 -1654 23 -21 23 -22 1522 0 1522 0 0 -80 0
                    -80 -1609 0 c-885 0 -1616 3 -1625 6 -14 6 -16 135 -16 1358 0 1347 0 1352
                    -20 1374 -27 29 -83 29 -110 2 -20 -20 -20 -33 -20 -1382 0 -1301 1 -1365 19
                    -1403 10 -22 28 -48 39 -58 53 -48 -4 -46 1720 -47 l1622 0 0 -164 c0 -266 17
                    -284 196 -201 l98 46 98 -46 c54 -25 106 -45 117 -45 10 0 30 9 45 21 l26 20
                    0 184 0 184 508 3 508 3 43 28 c27 18 50 44 62 70 18 41 19 96 19 1905 0 1560
                    -2 1868 -14 1895 -16 39 -61 82 -99 96 -20 8 -762 11 -2450 11 -2001 -1 -2427
                    -3 -2452 -14z m3653 -2192 c71 -75 115 -94 224 -94 101 0 97 4 96 -112 0 -65
                    4 -84 28 -128 16 -29 47 -68 70 -87 23 -19 45 -41 48 -49 4 -11 -13 -35 -50
                    -72 -80 -80 -96 -116 -98 -226 l-1 -91 -106 -5 c-122 -6 -137 -13 -219 -102
                    l-55 -60 -64 67 c-36 36 -74 71 -85 78 -12 6 -68 14 -126 17 l-105 5 -5 100
                    c-7 117 -16 138 -94 215 -31 30 -56 59 -56 65 0 6 25 35 56 65 78 77 87 98 94
                    215 l5 100 100 5 c117 7 138 16 215 94 30 31 59 56 65 56 6 0 34 -25 63 -56z
                    m-73 -1174 c45 0 84 16 118 48 l27 26 0 -458 0 -457 -22 7 c-13 3 -40 15 -60
                    25 -48 24 -54 24 -122 -6 -31 -14 -61 -25 -66 -25 -6 0 -10 167 -10 454 l0
                    455 51 -35 c33 -22 63 -34 84 -34z"/>
                    <path d="M3618 2367 c-260 -73 -292 -425 -50 -544 121 -59 269 -26 352 78 49
                    62 65 108 64 189 -2 188 -186 327 -366 277z m151 -165 c44 -33 64 -69 64 -115
                    0 -55 -26 -99 -76 -127 -125 -71 -261 83 -181 205 39 60 137 79 193 37z"/>
                    <path d="M943 3830 c-44 -18 -57 -86 -23 -120 20 -20 33 -20 1345 -20 1312 0
                    1325 0 1345 20 25 25 26 71 1 101 l-19 24 -1314 2 c-745 1 -1322 -2 -1335 -7z"/>
                    <path d="M921 3354 c-28 -35 -26 -69 4 -99 l24 -25 766 0 c758 0 765 0 765 20
                    0 19 7 20 210 20 203 0 210 -1 210 -20 0 -20 7 -20 634 -20 626 0 634 0 660
                    21 34 27 36 77 3 107 l-23 22 -1616 0 -1617 0 -20 -26z"/>
                    <path d="M920 2900 c-25 -25 -26 -71 -1 -101 l19 -24 904 -3 c496 -2 918 0
                    936 3 66 12 95 82 52 125 -20 20 -33 20 -955 20 -922 0 -935 0 -955 -20z"/>
                    <path d="M1108 2439 c-23 -13 -38 -70 -38 -144 0 -140 -47 -400 -105 -584 -20
                    -63 -34 -123 -31 -136 3 -12 17 -27 31 -33 70 -32 103 -1 148 143 19 61 38
                    126 42 145 l8 35 24 -55 c34 -78 70 -120 121 -142 59 -26 117 -18 175 26 l42
                    32 46 -29 c66 -40 147 -49 451 -45 259 3 260 3 279 27 24 29 24 72 2 100 -17
                    20 -28 20 -320 23 -345 3 -339 2 -374 92 -20 55 -32 66 -69 66 -36 0 -65 -23
                    -89 -73 -26 -54 -65 -92 -86 -83 -38 14 -84 177 -115 406 -26 197 -29 207 -47
                    225 -16 17 -69 19 -95 4z"/>
                  </g>
                </svg>
                <div>
                  <h3>LIFT BBB Certification</h3>
                  <p>Our company is accredited by the Better Business Bureau (BBB), indicating that we are dependable and trustworthy.</p>
                </div>
              </li>
              <li>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="75.000000pt" height="70.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#086AD8" stroke="none">
                    <path d="M105 4756 c-37 -17 -80 -62 -94 -99 -7 -18 -11 -152 -11 -368 0 -326
                    1 -340 20 -359 24 -24 77 -27 106 -6 18 14 19 32 24 353 l5 338 2405 0 2405 0
                    3 -1847 2 -1848 -22 -5 c-13 -3 -234 -4 -493 -3 l-470 3 -3 78 -3 77 394 0
                    394 0 21 23 c22 23 22 26 22 445 0 409 -1 423 -20 442 -30 30 -83 27 -109 -6
                    -20 -26 -21 -38 -21 -390 l0 -364 -340 0 -340 0 0 165 0 165 66 0 c86 0 136
                    26 165 86 17 35 20 58 17 132 l-3 89 67 71 c114 121 114 194 1 312 -35 36 -63
                    69 -64 75 -1 5 -2 48 -3 95 -4 157 -61 209 -230 210 l-79 0 -63 60 c-124 120
                    -204 119 -324 -4 l-54 -56 -81 0 c-174 -1 -234 -60 -235 -230 l0 -86 -56 -54
                    c-122 -119 -123 -204 -6 -323 l57 -58 6 -103 c4 -82 10 -110 27 -138 28 -45
                    80 -70 155 -76 l57 -4 0 -164 0 -164 -1470 0 -1470 0 0 1545 0 1545 2100 0
                    2100 0 0 -999 c0 -995 0 -998 21 -1025 26 -33 79 -36 109 -6 20 20 20 33 20
                    1080 0 1047 0 1060 -20 1080 -20 20 -33 20 -2230 20 -2197 0 -2210 0 -2230
                    -20 -20 -20 -20 -33 -20 -1673 l0 -1654 23 -21 23 -22 1522 0 1522 0 0 -80 0
                    -80 -1609 0 c-885 0 -1616 3 -1625 6 -14 6 -16 135 -16 1358 0 1347 0 1352
                    -20 1374 -27 29 -83 29 -110 2 -20 -20 -20 -33 -20 -1382 0 -1301 1 -1365 19
                    -1403 10 -22 28 -48 39 -58 53 -48 -4 -46 1720 -47 l1622 0 0 -164 c0 -266 17
                    -284 196 -201 l98 46 98 -46 c54 -25 106 -45 117 -45 10 0 30 9 45 21 l26 20
                    0 184 0 184 508 3 508 3 43 28 c27 18 50 44 62 70 18 41 19 96 19 1905 0 1560
                    -2 1868 -14 1895 -16 39 -61 82 -99 96 -20 8 -762 11 -2450 11 -2001 -1 -2427
                    -3 -2452 -14z m3653 -2192 c71 -75 115 -94 224 -94 101 0 97 4 96 -112 0 -65
                    4 -84 28 -128 16 -29 47 -68 70 -87 23 -19 45 -41 48 -49 4 -11 -13 -35 -50
                    -72 -80 -80 -96 -116 -98 -226 l-1 -91 -106 -5 c-122 -6 -137 -13 -219 -102
                    l-55 -60 -64 67 c-36 36 -74 71 -85 78 -12 6 -68 14 -126 17 l-105 5 -5 100
                    c-7 117 -16 138 -94 215 -31 30 -56 59 -56 65 0 6 25 35 56 65 78 77 87 98 94
                    215 l5 100 100 5 c117 7 138 16 215 94 30 31 59 56 65 56 6 0 34 -25 63 -56z
                    m-73 -1174 c45 0 84 16 118 48 l27 26 0 -458 0 -457 -22 7 c-13 3 -40 15 -60
                    25 -48 24 -54 24 -122 -6 -31 -14 -61 -25 -66 -25 -6 0 -10 167 -10 454 l0
                    455 51 -35 c33 -22 63 -34 84 -34z"/>
                    <path d="M3618 2367 c-260 -73 -292 -425 -50 -544 121 -59 269 -26 352 78 49
                    62 65 108 64 189 -2 188 -186 327 -366 277z m151 -165 c44 -33 64 -69 64 -115
                    0 -55 -26 -99 -76 -127 -125 -71 -261 83 -181 205 39 60 137 79 193 37z"/>
                    <path d="M943 3830 c-44 -18 -57 -86 -23 -120 20 -20 33 -20 1345 -20 1312 0
                    1325 0 1345 20 25 25 26 71 1 101 l-19 24 -1314 2 c-745 1 -1322 -2 -1335 -7z"/>
                    <path d="M921 3354 c-28 -35 -26 -69 4 -99 l24 -25 766 0 c758 0 765 0 765 20
                    0 19 7 20 210 20 203 0 210 -1 210 -20 0 -20 7 -20 634 -20 626 0 634 0 660
                    21 34 27 36 77 3 107 l-23 22 -1616 0 -1617 0 -20 -26z"/>
                    <path d="M920 2900 c-25 -25 -26 -71 -1 -101 l19 -24 904 -3 c496 -2 918 0
                    936 3 66 12 95 82 52 125 -20 20 -33 20 -955 20 -922 0 -935 0 -955 -20z"/>
                    <path d="M1108 2439 c-23 -13 -38 -70 -38 -144 0 -140 -47 -400 -105 -584 -20
                    -63 -34 -123 -31 -136 3 -12 17 -27 31 -33 70 -32 103 -1 148 143 19 61 38
                    126 42 145 l8 35 24 -55 c34 -78 70 -120 121 -142 59 -26 117 -18 175 26 l42
                    32 46 -29 c66 -40 147 -49 451 -45 259 3 260 3 279 27 24 29 24 72 2 100 -17
                    20 -28 20 -320 23 -345 3 -339 2 -374 92 -20 55 -32 66 -69 66 -36 0 -65 -23
                    -89 -73 -26 -54 -65 -92 -86 -83 -38 14 -84 177 -115 406 -26 197 -29 207 -47
                    225 -16 17 -69 19 -95 4z"/>
                  </g>
                </svg>
                <div>
                  <h3>Dell Certified Technicians</h3>
                  <p>When it comes to handling your equipment with care, our technicians are Dell certified professionals with plenty of expertise.</p>
                </div>
              </li>
            </ul>
            <Link onClick={(e) => props.setLoading(true)} to="/pages/about-us" className="read-more-button-home-page">Read More&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></Link>
          </ul>
        </div>
      </div>
      <div className="offset-service-container">
        <div className="background-image-overlay">
          <div className="content-sizing offset-service-container-content">
            <ul className="text-holder-offset-server">
              <h3>WHY CHOOSE US</h3>
              <h1>Custom IT Solutions for Your Business</h1>
              <p>Your IT systems are critical to the success of your company. That's why it's critical to pick an IT partner you can rely on. <b>Winnipeg Planet Computer & Technology</b> aspires to be your IT partner.</p>
              <div>
                <Link to=""><i className="fas fa-arrow-right"></i></Link>
                <p>Read More</p>
              </div>
            </ul> 
            <ul className="service-holder-home-page">
              <ul className="non-offset-service-box">
                <li>
                  <h2>Quick response</h2>
                  <p>Our typical turnaround time is one to two days, which is far faster than our rivals.</p>
                </li>
                <li>
                <h2>Experienced</h2>
                  <p>Our technicians are well experienced and certified.</p>
                </li>
              </ul>
              <ul className="offset-service-box">
                <li>
                  <h2>100% Satisfaction Guarantee</h2>
                  <p>We will go above and above to ensure your satisfaction.</p>
                </li>
                <li>
                  <h2>Affordable</h2>
                  <p>We are definitely inexpensive, as seen by the amount of clients we worked with.</p>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div className="steps-boxes-home">
        <div className="content-sizing steps-boxes-home-content">
          <h3>PROCESS</h3>
          <h1>How we works</h1>
          <div className="line"></div>
          <ul>
            <li>
              <h1 className="inside-box-desgine">01</h1>
              <h2>Choose a Service</h2>
              <p>Depending on the nature of your problem, we will consult with you over the phone to discuss it and try to resolve the issue.</p>
            </li>
            <li>
              <h1 className="inside-box-desgine">02</h1>
              <h2>Request a Meeting</h2>
              <p>If the problem cannot be resolved over the phone, we will schedule an appointment with you and ask you to bring the device.</p>
            </li>
            <li>
              <h1 className="inside-box-desgine">03</h1>
              <h2>Receive Custom Plan</h2>
              <p>You will be contacted by one of our technician about the pricing, once we have finished troubleshooting your equipment</p>
            </li>
            <li>
              <h1 className="inside-box-desgine">04</h1>
              <h2>Let’s Make it Happen</h2>
              <p>You will be contacted by phone or email after the computer difficulties have been rectified to the best of our abilities.</p>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="company-logos">
        <h1>Our Clients</h1>
        <div className="line"></div>
        <ul>
          <img src="/logos/progetec.png" alt="Progetec logo" width="220"/>
          <img src="/logos/canadaone.png" alt="Canada One Travel logo" width="220"/>
          <img src="/logos/hydro.png" alt="Manitoba Hydro Logo" width="220" />
          <img src="/logos/intellinet-logo.png" alt="Intellinet logo" width="220" />
          <img src="/logos/steinbacht.png" alt="Steinbach Trailer Logo" width="220" />
        </ul>
      </div> */}
    </>
  )
}

export default Homepage;