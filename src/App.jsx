import { useState } from 'react'
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './components/AdminPannel/components/Layout/Layout'
import Login from './components/AdminPannel/pages/login/Login';
import Dashboard from "./components/AdminPannel/pages/dashboard/Dashboard";
import Tables from "./components/AdminPannel/pages/tables/Tables";
import PanelHeader from './components/AdminPannel/components/PanelPages/Header/Header';
import PanelHeroSection from './components/AdminPannel/components/PanelPages/HeroSection/HeroSection';
import PanleStatictics from './components/AdminPannel/components/PanelPages/Statistics/Statistics';
import PanelServices from './components/AdminPannel/components/PanelPages/Services/Services';
import PanelTestimonials from './components/AdminPannel/components/PanelPages/Testimonials/Testimonials';
import PanleLocations from './components/AdminPannel/components/PanelPages/Locations/Locations';
import PanelFooter from './components/AdminPannel/components/PanelPages/Footer/Footer';
import PanelTeams from './components/AdminPannel/components/PanelPages/Teams/Teams';
import PanelCopyText from './components/AdminPannel/components/PanelPages/CopyText/CopyText';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Switch>       
        <Route path="/" component={Header} exact/>
        <Route path="/admin" component={Layout} exact/>
        <Route path="/login" component={Login} exact />
        <Route path="/app/dashboard" component={<Layout><Dashboard></Dashboard></Layout>} exact/>
        <Route path="/app/tables" component={Tables} exact  />
        <Route path="/landingpage/header" component={PanelHeader} exact  />
        <Route path="/landingpage/herosection" component={PanelHeroSection} exact  />
        <Route path="/landingpage/statistics" component={PanleStatictics} exact  />
        <Route path="/landingpage/services" component={PanelServices} exact  />
        <Route path="/landingpage/testimonials" component={PanelTestimonials} exact  />
        <Route path="/landingpage/locations" component={PanleLocations} exact  />
        <Route path="/landingpage/footer" component={PanelFooter} exact  />
        <Route path="/landingpage/teams" component={PanelTeams} exact  />
        <Route path="/landingpage/copyrighttext" component={PanelCopyText} exact  />
      </Switch> 
    </Router> 
    </>
  )
}

export default App
