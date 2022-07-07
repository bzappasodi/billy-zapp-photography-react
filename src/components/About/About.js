import React from 'react'
import {Col, Row} from "react-bootstrap";


const About = () => {

    let aboutText = "Creativity is the motivation. Within a structure or not, I always try to make the shot say something to me. I find many parallels between Photography, Guitar playing, and Programming. My attempt here is to display the multi-level process involved with being creative in Photographic endeavors. Being confined to a given set of rules or constraints, how far off the path does a creative individual go in order to achieve results that are worthwhile to the end user as well as the developer. Here I will add my images to the various projects I am involved with in these areas.";

    return (
        <>
            <Row><h2>About</h2></Row>
            <Row>
                <Col xs={2}/>
                <Col xs={8} className="aboutText text-link">{aboutText}</Col>
                <Col xs={2}/>
            </Row>
        </>
    )
}

export default About;
