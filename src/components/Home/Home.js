import React from 'react'
import { Col, Row, Container } from "react-bootstrap";


const Home = () => {

    let homeText = "home text";

    return (
        <Row>
            <Col xs={2} />
            <Col xs={8}>{homeText}</Col>
            <Col xs={2} />
        </Row>
    );
}
export default Home;
