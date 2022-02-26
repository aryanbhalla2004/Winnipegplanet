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
      <meta name="description" content="Here is a precise description of my awesome webpage."></meta>
    </Helmet>
    <h1>Contact Us</h1>
    </>

  )
}

export default Contact;