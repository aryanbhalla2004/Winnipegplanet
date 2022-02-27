import { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
const About = (props) => {
  useEffect(() => {
    props.pageName("About Us")
  }, [props]);

  return (
    <>
    <Helmet>
      <title>About Us | Winnipeg Planet Computer Repair</title>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
      <meta name="description" content="Here is a precise description of my awesome webpage."></meta>
    </Helmet>
    <div className="about-home">
    <div className="content-sizing about-home-content">
      <ul className="images-home-about-section">
        <div className="image-one">
          <img src="/about1.jpg" width="430" alt="about 1"/>
          <div className="absolute-box-image-about">
            <img src="/about2.jpg" width="430" alt="about 2"/>
            <div className="experience-about-home-box">
              <h1>20 Years of Experience</h1>
            </div> 
          </div> 
        </div>
      </ul>
      <ul className="text-home-about-section">
        <h1>We Help IT Companies Scale Engineering Capacity</h1>
        <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose.</p>
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
              <h3>Certified Company</h3>
              <p>Assurance yet bed was improving furniture man. Distrusts delighted she listening.</p>
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
              <h3>Certified Company</h3>
              <p>Assurance yet bed was improving furniture man. Distrusts delighted she listening.</p>
            </div>
          </li>
        </ul>
        <Link to="" className="read-more-button-home-page">Read More&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></Link>
      </ul>
    </div>
  </div>
  <div className="steps-boxes-home">
        <div className="content-sizing steps-boxes-home-content services-page-width-fix">
          <h3>Certification / Licences</h3>
          <h1>Proof of Education</h1>
          <div className="line"></div>
          <ul>
            <li>
              <h2>Dell Certified Technicians</h2>
              <p>When it comes to handling your equipment with care, our technicians are Dell certified professionals with plenty of expertise.</p>
            </li>
           
            <li>
              <h2>Better Business Bureau (BBB)</h2>
              <p>Our company is accredited by the Better Business Bureau (BBB), indicating that we are dependable and trustworthy.</p>
            </li>
            <li>
              <h2>Lenovo Certified Technicians</h2>
              <p>When it comes to handling your equipment with care, our technicians are Lenovo certified professionals with plenty of expertise.</p>
            </li>
          </ul>
        </div>
      </div>
  </>
  )
}

export default About;