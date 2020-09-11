import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Footer() {

       return (
        <footer id="footer-bar" className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Neil Foxcroft
                    </Col>
                    <Col className="p-0 d-flex justify-content-centre" md={1} sm={12}>
                        <button id="icon-b" onClick={()=> window.open("https://github.com/FoxcroftN", "_blank")}>
                        <FontAwesomeIcon id="font-icon" className="p-2.5" icon={['fab', 'github']} /> 
                        </button>
                        <button id="icon-b" onClick={()=> window.open("https://www.linkedin.com/in/neil-foxcroft-39a7991a1/", "_blank")}>
                        <FontAwesomeIcon id="font-icon" className="p-2.5" icon={['fab', 'linkedin']} />
                        </button>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Neil Foxcroft © 2020
                    </Col>
                </Row>
            </Container>
        </footer>
        )

}

export default Footer;