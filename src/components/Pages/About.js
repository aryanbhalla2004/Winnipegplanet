import { useState, useEffect } from "react";

const About = (props) => {
  useEffect(() => {
    props.pageName("About Us")
  }, []);

  return (
    <h1>About Us Page</h1>
  )
}

export default About;