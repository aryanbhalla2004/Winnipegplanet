import { useEffect } from "react";

const Hireus = (props) => {
  useEffect(() => {
    props.pageName("Hire Us As Contractor")
  }, [props]);

  return (
    <h1>Services Page</h1>
  )
}

export default Hireus;