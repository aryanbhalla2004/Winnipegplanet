import { useEffect } from "react";
import { Link } from "react-router-dom";
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
        <meta name="description" content="Our firm has more than 20 years of experience in this field. We've worked with companies like Canada One Travel, IntelliNet, Progitech, and many more to address their difficulties."></meta>
      </Helmet>
      <div className="steps-boxes-home">
        <div className="content-sizing steps-boxes-home-content services-page-width-fix">
          <h3>Websites</h3>
          <h1>Our Projects</h1>
          <div className="line"></div>
          <ul>
            <li>
              <h2>M.P.A.B Transport Company</h2>
              <p>This website is base on a transport trucking company</p>
              <Link to="http://mpabtransport.ca/">View Website</Link>
            </li>
            <li>
              <h2>Payless Trucking Repair & Parts</h2>
              <p>This website is a trucking part search company.</p>
              <Link to="http://mpabtransport.ca/">View Website</Link>
            </li>
            <li>
              <h2>Calculus Financial</h2>
              <p>This website is financial static website just for information. </p>
              <Link to="http://mpabtransport.ca/">View Website</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Projects;