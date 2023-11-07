import AboutUs from "./components/AboutUs/AboutUs";
import CarouselHome  from "./components/CarouselHome/CarouselHome";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";

import {Container} from "react-bootstrap";

function App() {

  return (
    <>
    <Router>
    <Header/>
    <Container style={{minHeight: '100vh', minWidth: '100%', padding: '0'}}></Container>
         <AppRoutes/>
         <CarouselHome/>
    <AboutUs/>
    <Footer/>
    </Router>
    </> 
  )
}

export default App
