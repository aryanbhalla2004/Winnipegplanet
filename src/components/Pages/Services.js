import { useEffect } from "react";
import Helmet from "react-helmet";
const Services = (props) => {
  useEffect(() => {
    props.pageName("Services")
  }, [props]);

  return (
    <>
    <Helmet>
      <title>Our Services | Winnipeg Planet Computer Repair</title>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
      <meta name="description" content="Here is a precise description of my awesome webpage."></meta>
    </Helmet>
    <div className="steps-boxes-home">
        <div className="content-sizing steps-boxes-home-content services-page-width-fix">
          <h1>Our Services</h1>
          <div className="line"></div>
          <ul>
            <li>
              <h2>IT Management</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Cloud & Networking</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Backup & Recovery</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li> 
          </ul>
          <ul>
          <li>
              <h2>Software Development</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Website Development</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Hardware & Software</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
          </ul>
        </div>
      </div>
      </>
  )
}

export default Services;