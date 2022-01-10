import { useEffect } from "react";

const Services = (props) => {
  useEffect(() => {
    props.pageName("Services")
  }, [props]);

  return (
    <>
    <div className="steps-boxes-home">
        <div className="content-sizing steps-boxes-home-content">
          <h1>Out Services</h1>
          <div className="line"></div>
          <ul>
            <li>
              <h2>Choose a Service</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Request a Meeting</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Receive Custom Plan</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Let’s Make it Happen</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
          </ul>
          <ul>
            <li>
              <h2>Choose a Service</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Request a Meeting</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Receive Custom Plan</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
            <li>
              <h2>Let’s Make it Happen</h2>
              <p>Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.</p>
            </li>
          </ul>
        </div>
      </div>
      </>
  )
}

export default Services;