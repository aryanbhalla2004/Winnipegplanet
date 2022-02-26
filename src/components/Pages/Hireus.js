import { useEffect } from "react";
import Helmet from "react-helmet";
const Hireus = (props) => {
  useEffect(() => {
    props.pageName("Hire Us As Contractor")
  }, [props]);

  return (
    <>
    <Helmet>
      <title>Hire Us | Winnipeg Planet Computer Repair</title>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
      <meta name="description" content="Here is a precise description of my awesome webpage."></meta>
    </Helmet>
    <h1>Services Page</h1>
    </>
  )
}

export default Hireus;