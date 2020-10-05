import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LargeBanner from '../components/LargeBanner.js'
import photo_head from '../images/neilfoxcroft.jpg'
import '../App.css';
import Content from '../components/Content.js'



function AboutPage(props) {

    return (
        <div id="body-tag">
            <LargeBanner title={props.title} />
            <Container fluid>
                <Row>
                    <Col sm="auto" md="auto" ld="auto" style={{marginLeft: "2.5rem"}}>                    
                            <img
                                    src={photo_head}
                                    alt="avatar"
                                    style={{height: '300px', marginBottom: "2.5rem"}}
                            />
                            <div class="button_cont" align="center"><a class="example_e" href="/files/NeilFoxcroftResume.pdf" download><strong>Download my Resume</strong></a></div>                    </Col>
                    
                    <Col>
                        <Content>
                            <p>
                              Hello, my name is Neil. I'm a student at the University of the North-West currently finishing my final year in my degree of BSc in Information Technology.  
                            </p>
                            <p>
                            From an early age, I loved anything IT related. From learning myself programming languages and databases as a kid to participating in robotics competitions, I would say my passion for technology is one that is nested within my development.                            </p>
                            <p>
                            I am a sucker for challenges. If I'm faced with a difficult problem I do not get discouraged but rather get more motivated to solve the problem. I am a critical thinker and have a good sense of humour. *except for my dry puns
                            </p>
                        </Content>
                    </Col>
                </Row>

            </Container>
        </div>  
    )
}

export default AboutPage;