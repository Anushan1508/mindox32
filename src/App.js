import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
// import Services from "./pages/Services/Services";
// import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";
import Features from "./pages/Features/Features";
import SmartPOP from "./pages/SmartPOP/SmartPOP";
import ContactUS from "./pages/ContactUS/ContactUS";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/smart-pop" component={SmartPOP} />
        <Route path="/contactus" component={ContactUS} />
        {/* <Route path="/services" component={Services} /> */}
        {/* <Route path="/products" component={Products} /> */}
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
