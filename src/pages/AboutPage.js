import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LargeBanner from '../components/LargeBanner.js'
import photo_head from '../images/neilfoxcroft.jpg'
import uni_logo from '../images/NWU_logo.png'
import '../App.css';
import Content from '../components/Content.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from '../components/Carousel.js';

function AboutPage(props) {

    return (
        <div id="body-tag">
            <LargeBanner title={props.title} />
            <Container fluid>
                <Row>
                    <Col sm="auto" md="auto" ld="auto" style={{marginLeft: "4rem"}}>                    
                            <img
                                    src={photo_head}
                                    alt="avatar"
                                    style={{height: '300px', marginBottom: "2.5rem"}}
                            />
                            <div className="button_cont" align="center"><a className="example_e" href="/files/NeilFoxcroftResume.pdf" download><strong>Download my Resume</strong></a></div>
                            </Col>
                    
                    <Col>
                        <Content>
                            <p>
                            Hi,
                            </p>
                            <p>
                            I'm Neil. And I am a final year BSc Information Technology student at North-West University. I will soon be completing my degree and I’m looking forward to joining the work environment in the IT space shortly.
                            </p>
                            <p>
                            I’ve always had a keen interest in anything that is TECHNOLOGY related... whether that be doing some self-learn coding or modelling a simple database solution ... or participating in a robotics development challenge.
                            </p>
                            <p>
                            In my opinion, life will be very bland if we are never faced with challenges from time to time.
                            </p>
                        </Content>
                    </Col>
                </Row>
                <Row style={{marginTop: "2.5rem"}}>
                    <Content>
                        <p>
                        In my opinion, Your success in life is determined by how you approach these challenges, your determination to solve them and what you learn and take from these challenges afterwords. This outlook might have fueled my interest in anything that is “problem-solving” related, and thus I like to ensure something is done more efficient and position myself to work “smarter”.
                        </p>
                        <p>
                        A well-balanced lifestyle is important to me. Therefore I will usually not allow for a week to pass without taking a well-deserved break and escape to my other passion which is music especially playing on my guitar.                        </p> 
                        <p>
                        My motto in life is "If you aren't proud of it, it isn't good enough."
                        </p> 
                    </Content>
                </Row>
            </Container>
            <LargeBanner title="North-West University" subTitle="BSc in Information Technology" />
            <Container fluid>
            <Row>
            <Col sm="auto" md="auto" ld="auto" style={{marginLeft: "4rem"}}>                    
                    <img
                            src={uni_logo}
                            alt="avatar"
                            style={{height: '300px', marginBottom: "2.5rem"}}
                    />
                </Col>

                <Col>
                    <Content>
                        <p>With my degree I had exposure to various technologys, projects and poeple. We covered a wide variety of Information Technology aspects and developed a strong foundation for future learning.</p>
                    </Content>
                </Col>          
            </Row>
            </Container>
            <LargeBanner title="Skills" subTitle="some of the weapons in my developer arsenal" homeText="throughout my studies, we needed to work with a variety of software, languages and interfaces"/>
            <Content>
                <p>I enjoy programming in Java, Python and C#. Recently while learning ReactJS have I acquired a taste for JavaScript, HTML and CSS as well. In my time studying BSc in Information Technology I also worked with Relational databases, SQL, Propositional Logic concerning Artificial Intelligence and Object Orientated Programming just to name a few of my favourites fields.</p>
                <p>Excel, Microsoft Office, Visual Studio Code, Emailing and Scheduling using a calendar program are set in my work routine.</p>
                <p>I have worked with Draw.io, packetTracer and other modeling software</p>
            </Content>
            <Container fluid>
            <Row style={{justifyContent:"center"}}>
                <div style={{marginTop: "1.5rem", marginBottom: "1.5rem", justifyContent: "center"}}> 
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'java']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'html5']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'css3-alt']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'js']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'aws']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'git']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'node']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'npm']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'react']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'python']} />
                </div>
            </Row>
            </Container>
            <LargeBanner title="Personal Projects" subTitle="Some projects for Personal Development" />
            <Carousel/>
            <LargeBanner title="BLEGO" subTitle="a Patent I helped create while Competing in the First-Lego League" />
            <Container fluid={true}>
                        <Row className="justify-content-center py-5">
                            <Col md={8} sm={12}>
                                <div style={{marginTop: "2.5rem", marginBottom: "2.5rem"}}>
                                <a className="effect1" href="/contact">
                                    Let's get in touch
                                    <span className="bg"></span>
                                </a>
                                </div>
                            </Col>
                        </Row>
            </Container>
        </div>     
    )
}

export default AboutPage;