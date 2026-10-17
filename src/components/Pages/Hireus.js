import { useEffect } from "react";
import Helmet from "react-helmet";
const Hireus = (props) => {
  useEffect(() => {
    props.pageName("Hire Us as a Contractor")
  }, [props]);

  return (
    <>
    <Helmet>
      <title>Hire Us | Winnipeg Planet Computer Repair</title>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
      <meta name="description" content="Hire Winnipeg Planet Computer & Technology as your IT contractor."></meta>
    </Helmet>
    <h1>Hire Us as a Contractor</h1>
    </>
  )
}

export default Hireus;