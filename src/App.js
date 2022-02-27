import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";
import Homepage from "./components/Homepage";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import Hireus from "./components/Pages/Hireus";
import Terms from "./components/Terms";
import Projects from "./components/Pages/projects";
import ServiceType from "./components/Pages/ServiceType";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState('About Us');
  const [services] = useState([
    {
      id: '01',
      name: "IT Management",
      desc: ""
    },
    {
      id: '02',
      name: "Cloud & Networking",
      desc: ""
    },
    {
      id: '03',
      name: "Backup & Recovery",
      desc: ""
    },
    {
      id: '04',
      name: "Software Development",
      desc: ""
    },
    {
      id: '05',
      name: "Website Development",
      desc: ""
    },
    {
      id: '06',
      name: "Hardware & Software",
      desc: ""
    }
  ])
  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading]);

  

  return (
    <>
    
    {!loading ?
      <>
        <Header setLoading={setLoading}/>
        <Switch>
          <Route exact path="/">
            <Homepage setLoading={setLoading}/>
          </Route>
          <Route path="/pages">
            <Page name={page}/>
            <Switch>
              <Route exact path="/pages/about-us">
                <About pageName={setPage}/>
              </Route>
              <Route exact path="/pages/projects">
                <Projects pageName={setPage}/>
              </Route>
              <Route exact path="/pages/services">
                <Services pageName={setPage}/>
              </Route>
              <Route exact path="/pages/services/:service-type">
                <ServiceType pageName={setPage}/>
              </Route>
              <Route exact path="/pages/hire-us-as-contractor">
               <Hireus pageName={setPage}/>
              </Route>
              <Route exact path="/pages/contact-us">
                <Contact pageName={setPage}/>
              </Route>
              <Route exact path="/pages/term-and-condition">
                <Terms pageName={setPage}/>
              </Route>
            </Switch>
          </Route>
        </Switch>
        <Footer setLoading={setLoading} services={services}/>
      </> :
      <div className="loading-an-center">
        <div className="lds-facebook"><div></div><div></div><div></div></div>
      </div>
    }
  </>
  )
}

export default App
