import { useState, useEffect } from "react";

const Services = (props) => {
  useEffect(() => {
    props.pageName("Services")
  }, []);

  return (
    <h1>Services Page</h1>
  )
}

export default Services;