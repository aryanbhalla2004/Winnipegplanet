import {useEffect } from "react";

const Contact = (props) => {
  useEffect(() => {
    props.pageName("Contact Us")
  }, [props]);

  return (
    <h1>Contact Us</h1>
  )
}

export default Contact;