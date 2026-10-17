import { useEffect } from "react";
import Helmet from "react-helmet";

const Projects = (props) => {
  useEffect(() => {
    props.pageName("Projects")
  }, [props]);

  return (
    <>
      <Helmet>
        <title>Projects | Winnipeg Planet Computer Repair</title>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <meta name="description" content="Our firm has more than 20 years of experience in this field. We've worked with companies like Canada One Travel, IntelliNet, Progitech, and many more to solve their IT challenges."></meta>
      </Helmet>
      <div className="steps-boxes-home">
        <div className="content-sizing steps-boxes-home-content services-page-width-fix">
          <h3>Websites</h3>
          <h1>Our Projects</h1>
          <div className="line"></div>
          <ul>
            <li>
              <h2>M.P.A.B Transport Company</h2>
              <p>A website for a transport and trucking company.</p>
              <a href="http://mpabtransport.ca/" target="_blank" rel="noopener noreferrer">View Website</a>
            </li>
            <li>
              <h2>Payless Trucking Repair & Parts</h2>
              <p>A parts search website for a truck repair and parts company.</p>
              <a href="http://mpabtransport.ca/" target="_blank" rel="noopener noreferrer">View Website</a>
            </li>
            <li>
              <h2>Calculus Financial</h2>
              <p>A static, informational website for a financial company.</p>
              <a href="http://mpabtransport.ca/" target="_blank" rel="noopener noreferrer">View Website</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Projects;