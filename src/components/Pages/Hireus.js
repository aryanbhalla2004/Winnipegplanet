import { useState, useEffect } from "react";

const Hireus = (props) => {
  useEffect(() => {
    props.pageName("Hire Us As Contractor")
  }, []);

  return (
    <h1>Services Page</h1>
  )
}

export default Hireus;