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

const App = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState('About Us');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, []);

  return (
    <>
    {!loading && 
      <>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/pages">
            <Page name={page}/>
            <Switch>
              <Route exact path="/pages/about-us">
                <About pageName={setPage}/>
              </Route>
              <Route exact path="/pages/services">
                <Services pageName={setPage}/>
              </Route>
              <Route exact path="/pages/hire-us-as-contractor">
               <Hireus pageName={setPage}/>
              </Route>
              <Route exact path="/pages/contact-us">
                <Contact pageName={setPage}/>
              </Route>
            </Switch>
          </Route>
        </Switch>
        <Footer/>
      </>
    }
  </>
  )
}

export default App
