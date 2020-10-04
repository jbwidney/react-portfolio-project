import React from 'react'
import {Container, Row, Col, Media} from 'reactstrap'

function WhyKungFu() {
    return(
    <>
    <Container className="whykungfu">
        <Row>
            <Col className="text-center">
                <h1 className="whykungfutitle">Why Kung Fu?</h1>
            </Col>
        </Row>
        <Media>
            <Media right href='#'>
                <iframe title="Kung Fu Video"className="align-self-end" width="450" height="300" src="https://www.youtube.com/embed/BSPu-1C10eE?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen=""></iframe>
            </Media>
            <Media body>
                <Media heading>
               
                </Media>
                <Container> 
                    <Row>
                        <Col md={12}>
                        <p>For thousands of years, the Chinese people have practiced Kung Fu with emphasis on health, art and self-defense. Today Kung Fu and Tai Chi are practiced at Goh's Kung Fu with the same values still holding true. At our school you can study traditional kung fu, tai chi, contemporary wushu and sanda(sanshou).</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <ul>
                                <li>Determination</li>
                                <li>Self Discipline</li>
                                <li>Humility</li>
                                <li>Strength</li>
                                <li>Stress Relief</li>
                                <li>Stamina</li>
                            </ul>
                            </Col>
                            <Col md={5}>
                            <ul>
                                <li>Mindfulness</li>
                                <li>Self Confidence</li>
                                <li>Flexibility</li>
                                <li>Body Coordination</li>
                                <li>Respect</li>
                                <li>And it's a Great Workout!</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Media>
        </Media>
    </Container>
    </>
    );
}



export default WhyKungFu