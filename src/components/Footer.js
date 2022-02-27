import {Link} from "react-router-dom";
import "../styles/Footer.css";
const Footer = (props) => { 
  return (
    <>
      <footer>
        <div className="overlay-footer-image">
          <img src="../map.svg" alt="World Map Background"></img>
          <div className="content-sizing footer-content">
            <ul>
              <li className="form-footer-company-info">
                <h2>Get In Touch</h2>
                <p>Our goal is to provide the best customer service and to answer all of your questions in a timely manner.</p>
                <form>
                  <input type="email" placeholder="Your Email"/>
                  <button><i className="fas fa-arrow-right"></i></button>
                </form>
              </li>
              <li className="footer-links">
                <h2>Quick Link</h2>
                <ul>
                  <li><Link to="/pages/about-us" onClick={(e) => props.setLoading(true)}>About Us</Link></li>
                  <li><Link to="/pages/projects" onClick={(e) => props.setLoading(true)}>Our Projects</Link></li>
                  <li><Link to="/pages/services" onClick={(e) => props.setLoading(true)}>Services</Link></li>
                  <li><Link to="/pages/contact-us" onClick={(e) => props.setLoading(true)}>Contact Us</Link></li>
                </ul>
              </li>
              <li className="footer-links"> 
                <h2>Solutions</h2>
                <ul>
                  {props.services.map(item => (
                    <li key={item.id}><Link to={`/pages/services/${item.id}`}>{item.name}</Link></li>
                  ))}
                </ul>
              </li>
              <li className="addressing-footer">
                <h2>Contact Info</h2>
                <ul>
                  <li>
                    <h4>ADDRESS:</h4>
                    <p>1129 Waller Ave, Winnipeg MB R3T 1P4, Canada</p>
                  </li>
                  <li className="email">
                    <h4>EMAIL:</h4>
                    <p onClick={() => window.location = 'mailto:yourmail@gmail.com'}>info@winnipegplanet.com</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright-container">
        <div className="content-sizing copyright-container-content">
          <ul>
            <li>Copyright © 2015. All rights reserved</li>
            <li className="footer-link-buttons">
              <Link to="/pages/term-and-condition">Terms</Link>
              <div className="line"></div>
              <Link to="">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer;