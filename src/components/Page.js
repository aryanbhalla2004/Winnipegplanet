import  "../styles/page.css";

const Page = (props) => {
  return (
    <div className="pages-title-path-holder" style={{backgroundImage: `url("/background-images-pages.jpeg")`}}>
      <div>
        <div className="content-sizing pages-title-path-holder-content">
          <ul>
            <li>
              <h1>{props.name}</h1>
            </li>
            <li>
              <h3>Home <span className="primary-color-aero">></span> Pages <span className="primary-color-aero">></span> <span className="primary-color-text">{props.name}</span></h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page