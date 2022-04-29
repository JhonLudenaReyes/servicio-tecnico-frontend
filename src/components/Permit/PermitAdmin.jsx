import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PermitRegister from "./PermitRegister";
import PermitList from "./PermitList";
import "./styles/PermitAdmin.css"

const PermitAdmin = () => {
  return (
    <>
      <Container className="PermListContainer">
        <Row className="justify-content-md-center">
          <Col className="permRegCol" lg={4}>
            <PermitRegister />
          </Col>
          <Col lg={{ span: 6, offset: 2 }}>
            <PermitList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PermitAdmin;
