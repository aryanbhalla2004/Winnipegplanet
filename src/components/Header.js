import { Link } from "react-router-dom"
import "../styles/Header.css";
const Header = (props) => {
  return (
    <>
      <div className="top-menu">
        <div className="content-sizing top-menu-content">
          <ul>
            <li><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Winnipeg, MB</li>
            <div className="line"></div>
            <li><i className="fas fa-envelope-open-text"></i>&nbsp;&nbsp;info@winnipegplanet.com</li>
          </ul>
          <ul>
            <li><i className="fas fa-clock"></i>&nbsp;&nbsp;Office Hours: 24/7</li>
            <li className="social-media-icons-top">
              <ul>
                <li><i className="fab fa-facebook-f"></i></li>
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-linkedin-in"></i></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <header>
        <div className="content-sizing header-content">
          <ul className="logo-header">
            <img src="/logo.jpeg" width="125" alt="Logo"/>
          </ul>
          <ul className="menu-header">
            <li><Link to="/" onClick={(e) => props.setLoading(true)}>HOME</Link></li>
            <li><Link to="/pages/about-us" onClick={(e) => props.setLoading(true)}>ABOUT US</Link></li>
            <li><Link to="/pages/projects" onClick={(e) => props.setLoading(true)}>PROJECTS</Link></li>
            <li><Link to="/pages/services" onClick={(e) => props.setLoading(true)}>SERVICES</Link></li>
            <li><Link to="/pages/contact-us" onClick={(e) => props.setLoading(true)}>CONTACT US</Link></li>
          </ul>
          <ul className="phone-number-header">
            <i className="fas fa-phone-alt"></i>
            <div className="line-number-header"></div>
            <li>
              <p>Call us today!</p>
              <h4>+1 (204)-890-7313</h4>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header