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
        <meta name="description" content="Winnipeg Planet Computer & Technology is a Winnipeg-based company that may assist you in repairing your computer. Our technicians have extensive knowledge and are certified by both Lenovo and Dell."></meta>
      </Helmet>
      <div className="about-home">
        <div className="content-sizing about-home-content">
          <ul className="images-home-about-section">
            <div className="image-one">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" width="430" alt="Team Meeting"/>
              <div className="absolute-box-image-about">
                <img src="https://images.unsplash.com/photo-1552582305-6b778426ab60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" width="430" alt="Software developer working"/>
                <div className="experience-about-home-box">
                  <h1>20 Years of Experience</h1>
                </div> 
              </div> 
            </div>
          </ul>
          <ul className="text-home-about-section">
            <h1>What is Winnipeg Planet?</h1>
            <p>Winnipeg Planet Computer & Technology is a Winnipeg-based company that may assist you in repairing your computer. Our technicians have extensive knowledge and are certified by both Lenovo and Dell.</p>
            <br/>
            <p>Our firm has more than 20 years of experience in this field. We've worked with companies like Canada One Travel, IntelliNet, Progitech, and many more to address their difficulties.</p>
            <br/>
            <Link to="" className="read-more-button-home-page">Get In Touch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></Link>
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