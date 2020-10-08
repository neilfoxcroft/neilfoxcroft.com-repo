import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Particles from "react-tsparticles";

import LargeBanner from '../components/LargeBanner';

function HomePage(props) {

    return (
        <div style={{height: "100%", margin: "0", overflow: "hidden"}}>
            <div id="first">   
            <LargeBanner title={props.title} subTitle={props.subTitle}/>
                <div id="home-button">
                    <Container fluid={true}>
                        <Row className="justify-content-center py-5">
                            <Col md={8} sm={12}>
                                <a className="effect1" href="/about">
                                    learn more about me
                                    <span className="bg"></span>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div id="second">
            <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "white",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#434343",
            },
            links: {
              color: "#434343",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "triangle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      /></div>
        </div>
    )
}

export default HomePage;