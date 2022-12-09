import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MyCard from "../components/UI/MyCard";

function Layout(props) {
  return (
    <Container className={`${props.className}`} style={props.style} >
      <Row>
        <Col md={3} lg={3}>
          <MyCard className="bg-secondary position-fixed">
            <Sidebar />
          </MyCard>
        </Col>
        <Col md={9} lg={9}>
          <Row>
            <Col md={12} lg={12}>
              <Header />
            </Col>
          </Row>
          <Row>
          {props.children}
          </Row>
        </Col>
      </Row>
      <p style={{height:'350px'}}></p>
    </Container>
  );
}

export default Layout;
