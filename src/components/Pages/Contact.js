import { useState, useEffect } from "react";

const Contact = (props) => {
  useEffect(() => {
    props.pageName("Contact Us")
  }, []);

  return (
    <h1>Contact Us</h1>
  )
}

export default Contact;