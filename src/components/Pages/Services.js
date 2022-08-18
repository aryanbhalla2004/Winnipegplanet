import { useEffect } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
const Services = (props) => {
  useEffect(() => {
    props.pageName("Services")
  }, [props]);

  return (
    <>
    <Helmet>
      <title>Our Services | Winnipeg Planet Computer Repair</title>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
      <meta name="description" content="We Provide IT Management, Cloud & Networking, Backup & Recovery, Software Development, Website Development, Hardware & Software and many more services."></meta>
    </Helmet>
    <div className="steps-boxes-home">
        <div className="content-sizing steps-boxes-home-content services-page-width-fix">
          <h1>Our Services</h1>
          <div className="line"></div>
          <ul>
            <li>
              <h2>IT Management</h2>
              <p></p>
              <Link to="/pages/services/01">View More <i className="fas fa-arrow-right"></i></Link>
            </li>
            <li>
              <h2>Cloud & Networking</h2>
              <p>We have Cisco certified technicians that can design and protect networks for commercial use.</p>
              <Link to="/pages/services/02">View More <i className="fas fa-arrow-right"></i></Link>
            </li>
            <li>
              <h2>Backup & Recovery</h2>
              <p></p>
              <Link to="/pages/services/03">View More <i className="fas fa-arrow-right"></i></Link>
            </li> 
          </ul>
          <ul>
          <li>
              <h2>Software Development</h2>
              <p>Our company has experience in building both web and desktop responsive software.</p>
              <Link to="/pages/services/04">View More <i className="fas fa-arrow-right"></i></Link>
            </li>
            <li>
              <h2>Website Development</h2>
              <p>Our website are know to be </p>
              <Link to="/pages/services/05">View More <i className="fas fa-arrow-right"></i></Link>
            </li>
            <li>
              <h2>Hardware & Software</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
              <Link to="/pages/services/06">View More <i className="fas fa-arrow-right"></i></Link>
            </li>
          </ul>
        </div>
      </div>
      </>
  )
}

export default Services;