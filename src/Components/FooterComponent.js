import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';

function Footer(props) {
        return(
            <footer>
                <Container>
                    <Row>
                        <Col md={4} className="footerLinks">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/schedule'>Schedule</Link></li>
                            <li><Link to='/signup'>Sign up</Link></li>
                        </ul>
                        </Col>
                        <Col className="text-center" md={4}>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/" target="_blank"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a>{' '}
                        <Row>
                        <Col>
                        <a href="https://www.usawkf.com" target="_blank"> <img src="./assets/images/usawkf.jpeg" alt="USAWFK Logo"></img>   </a>
                        </Col>
                        </Row>
                        </Col>
                        <Col md={4} className = "text-right">
                        <a role="button" className="btn btn-link" href="tel:+4438080048"><i className="fa fa-phone" />443.808.0048</a><br />
                        <a role="button" className="btn btn-link" href="mailto:info@gohskungfu.com"><i className="fa fa-envelope-o" /> info@gohskungfu.com</a>
                        </Col>
                    </Row>
                    <Row>
                    <Col classNames = "text-center">
                        <p className = "usawkf">Goh's Kung Fu is a lifetime member school of the United States of America Wushu-Kungfu Federation</p>
                    </Col>
                    </Row>
                </Container>

            </footer>
        )
}

export default Footer