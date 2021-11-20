import { Link } from "react-router-dom"
import "../styles/Header.css";
const Header = () => {
  return (
    <>
      <div className="top-menu">
        <div className="content-sizing top-menu-content">
          <ul>
            <li><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Winnipeg, MB</li>
            <div className="line"></div>
            <li><i class="fas fa-envelope-open-text"></i>&nbsp;&nbsp;info@winnipegplanet.com</li>
          </ul>
          <ul>
            <li><i class="fas fa-clock"></i>&nbsp;&nbsp;Office Hours: 24/7</li>
            <li className="social-media-icons-top">
              <ul>
                <li><i class="fab fa-facebook-f"></i></li>
                <li><i class="fab fa-twitter"></i></li>
                <li><i class="fab fa-linkedin-in"></i></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <header>
        <div className="content-sizing header-content">
          <ul className="logo-header">
            <img src="/logo.jpeg" width="125"/>
          </ul>
          <ul className="menu-header">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/pages/about-us">ABOUT US</Link></li>
            <li><Link to="/pages/services">SERVICES</Link></li>
            <li><Link to="/pages/hire-us-as-contractor">HIRE US AS CONTRACTOR</Link></li>
            <li><Link to="/pages/contact-us">CONTACT US</Link></li>
          </ul>
          <ul className="phone-number-header">
            <i class="fas fa-phone-alt"></i>
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