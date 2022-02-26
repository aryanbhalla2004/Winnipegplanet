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
        <div className="content-sizing steps-boxes-home-content">
          <h1>Out Services</h1>
          <div className="line"></div>
          <ul>
            <li>
              <h2>Choose a Service</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Request a Meeting</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Receive Custom Plan</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Let’s Make it Happen</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
          </ul>
          <ul>
            <li>
              <h2>Choose a Service</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Request a Meeting</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Receive Custom Plan</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Let’s Make it Happen</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
          </ul>
        </div>
      </div>
      </>
  )
}

export default Services;