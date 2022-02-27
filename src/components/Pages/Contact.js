import {useEffect } from "react";
import Helmet from "react-helmet";
const Contact = (props) => {

  useEffect(() => {
    props.pageName("Contact Us")
  }, [props]);

  return (
    <>    
      <Helmet>
        <title>Contact Us | Winnipeg Planet Computer Repair</title>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <meta name="description" content="Your IT systems are critical to the success of your company. That's why it's critical to pick an IT partner you can rely on. <b>Winnipeg Planet Computer & Technology</b> aspires to be your IT partner."></meta>
      </Helmet>
      <div className="contact-col">
        <div className="content-sizing contact-col-info">
          <div className="left-col">
            <span>LET'S TALK</span>
            <h2>Speak With Expert Engineers.</h2>
            <div className="contact-info-form-col">
              <div className="contact-icon">
                <i className="bi bi-house-door-fill"></i>
              </div>
              <div>
                <h3>Email:</h3>
                <p>info@winnipegplanet.com</p>
              </div>
            </div>
            <div className="contact-info-form-col">
              <div className="contact-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h3>Address:</h3>
                <p>1129 Waller Ave, Winnipeg MB R3T 1P4, Canada</p>
              </div>
            </div>
            <div className="contact-info-form-col">
              <div className="contact-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <h3>Phone:</h3>
                <p>+1 (204)-890-7313</p>
              </div>
            </div>
          </div>
          <form className="form-contact">
            <span>GET IN TOUCH</span>
            <h2>Fill The Form Below</h2>
            <div className="col-2-filed">
              <input placeholder="Name" value=""/>
              <input placeholder="Email" value=""/>
            </div>
            <div className="col-2-filed">
              <input placeholder="Phone Number" value=""/>
              <input placeholder="Subject" value=""/>
            </div>
            <textarea placeholder="Your Message Here" value=""></textarea>
            <button>Send Inquiry</button>
          </form>
        </div>
      </div>
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2100546210945!2d-97.15865668432951!3d49.838510539148565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea75cb280a329b%3A0x2c73c2ae077b2283!2s1129%20Waller%20Ave%2C%20Winnipeg%2C%20MB%20R3T%201P4!5e0!3m2!1sen!2sca!4v1645943246766!5m2!1sen!2sca"
              width="100%"
              height="450"
              frameBorder="0"
              title="map for the contact"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
    </>

  )
}

export default Contact;