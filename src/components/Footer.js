import {Link} from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => { 
  return (
    <>
      <footer>
        <div className="overlay-footer-image">
          <img src="../map.svg" alt="map-background"></img>
          <div className="content-sizing footer-content">
            <ul>
              <li className="form-footer-company-info">
                <h2>Get In Touch</h2>
                <p>Happen active county. Winding for the morning am shyness evident to poor. Garrets because elderly new.</p>
                <form>
                  <input type="email" placeholder="Your Email"/>
                  <button><i className="fas fa-arrow-right"></i></button>
                </form>
              </li>
              <li className="footer-links">
                <h2>Company</h2>
                <ul>
                  <li><Link to="">About Us</Link></li>
                  <li><Link to="">Our Projects</Link></li>
                  <li><Link to="">Contact Us</Link></li>
                  <li><Link to="">Our Clients</Link></li>
                </ul>
              </li>
              <li className="footer-links"> 
                <h2>Solutions</h2>
                <ul>
                  <li><Link to="">IT Management</Link></li>
                  <li><Link to="">Cloud & Networking</Link></li>
                  <li><Link to="">Backup & Recovery</Link></li>
                  <li><Link to="">Software Development</Link></li>
                  <li><Link to="">Website Development</Link></li>
                  <li><Link to="">Mobile Development</Link></li>
                </ul>
              </li>
              <li className="addressing-footer">
                <h2>Contact Info</h2>
                <ul>
                  <li>
                    <h4>ADDRESS:</h4>
                    <p>1129 Waller Ave, Winnipeg MB R3T 1P4, Canada</p>
                  </li>
                  <li>
                    <h4>EMAIL:</h4>
                    <p>info@winnipegplanet.com</p>
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
              <Link to="">Terms</Link>
              <div className="line"></div>
              <Link to="">Privacy</Link>
              <div className="line"></div>
              <Link to="">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer;