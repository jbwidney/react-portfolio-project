import React from 'react'
import { Container, Media} from 'reactstrap'


function Philosophy() {
return(
    <>
    <Container className = "philosophy">
    <h3 className="mt-0 mb-5 text-center">Our Philosophy</h3>
    <Media >
        <Media>
        <Media height="275" object src="./assets/images/kids.jpeg" alt="Kids Kung Fu" />
        </Media>
        <Media body className="ml-5 mr-5">
            <p>Kung fu training improves health and fitness, cardiovascular efficiency, flexibility, muscle strength and body compisition. The positive qualities developed through the training, such as: discipline, confidence, respect, determination and humility, improve the quality of the mind and are beneficial in daily life situations.</p>
                    
            <p> Goh's Kung Fu provides a caring, safe and well structured environment where students can develop their minds and bodies through its curriculum and training programs. Through their training, they will learn goal setting and the true value of hard work. As a fitness routine Goh's Kung Fu curriculum improves health, muscle toning and releases stress and tension. </p>
        </Media>
    </Media>
    </Container>

</>
)
}

export default Philosophy