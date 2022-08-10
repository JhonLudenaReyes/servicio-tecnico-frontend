import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListRole from "./ListRole";
import RoleRegister from "./RoleRegister";

const RoleAdmin = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <ListRole />
          </Col>
          <Col>
            <RoleRegister />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RoleAdmin;
