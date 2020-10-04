import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardBody, Container, Row,} from 'reactstrap'


class WhatWeTeach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curricula: [
        {
            id: 0,
            name: "Kung Fu",
            image: "/assets/images/kungfu.jpeg",
            description: "Kung fu is one of the oldest and most widely practiced styles of martial arts, our forms are graceful, artistic; yet explosive. It teaches effective hand and kicking techniques with proper body coordiation. it is unique because it teaches courage and determination without aggressive overtones."
        },
        {
            id: 1,
            name: "Sanda",
            image: "/assets/images/sanda.jpeg",
            description: "Sanda is a modern unarmed combat sport which developed from traditional kung fu techniques and primarily makes use of punching, kicking, throwing, wrestling and defensive techniques."
        },
        {
            id: 2,
            name: "Wushu",
            image: "assets/images/wushu.jpeg",
            description: "Contemporary wushu is dynamic, graceful and explosive. It is the style of action movies made popular by famous stars like Jet Li. At Goh's Kung Fu you will learn moves and chorography including open hand and weapons work as well as physical conditioning to increase jump power and flexibility."
        },
        {
            id: 3,
            name: "Tai Chi",
            image: "assets/images/taichi.jpeg",
            description: "As an internal style practiced by millions of Chinese today, this low impact exercise regulates the central nervous system and helps to relieve stress. Tai Chi training emphasizes body coordiation, balance, relaxation, breathing and smoothness. it is practiced as a preventative exercise for stress, high blood pressure and heart problems."
        }
    ],
    }
    }
    render() {
        const WhatWeTeach = this.state.curricula.map(curricula => {
            return (
                
                <Card className = "col">
                    <CardImg wodth="100%" src={curricula.image} alt={curricula.className} />
                    <CardTitle>{curricula.name}</CardTitle>
                    <CardBody>{curricula.description}</CardBody>
                </Card>
               
            );
        });
        return (
            
            <Container className="whykungfu">
            <Row className="whykungfutitle">
              <h2 className="text-center">What we teach</h2>
              </Row>
                <Row>
                    {WhatWeTeach}
                </Row>
            
            </Container>
        );
    }
}

export default WhatWeTeach