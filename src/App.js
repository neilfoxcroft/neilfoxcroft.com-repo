//main web application

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';

import Footer from "./components/Footer.js"
import HomePage from "./pages/HomePage.js"
import AboutPage from "./pages/AboutPage.js"
import ContactPage from "./pages/ContactPage.js"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Neil Foxcroft",
      headerLinks: [
        {title: 'Home', path: "/"},
        {title: 'About', path: "/about"},
        {title: 'Contact', path: "/contact"}
      ],
      home: {
        title: 'Some random title',
        subTitle: 'Some random sub title',
        homeText: 'some random text',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact me',
      }
    }
  }

  render() {
    return (
     <Router>
       <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparrent" expand="lg">
            <Navbar.Brand>Neil Foxcroft</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>     
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} homeText={this.state.home.homeText} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} /> } />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />
        
       </Container>
      </Router>
    );
  }
}

export default App;
