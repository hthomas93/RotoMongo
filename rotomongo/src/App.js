import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import First from "./pages/First";
import NavBar from './components/NavBar/NavBar';
import Dex from "./pages/Dex";
import Footer from "./components/Footer/Footer";
import TeamBuilder from './pages/TeamBuilder';



function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={First} />
        <Route exact path="/dex" component={Dex} />
        <Route exact path="/teambuilder" component={TeamBuilder} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
