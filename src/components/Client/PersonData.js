import React from "react";
import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

const PersonData = ({ person }) => {
  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <FormLabel>Nombre</FormLabel>
            <FormControl
              value={person.nombres}
              id="nombres"
              type="text"
              placeholder="Ingrese su nombre"
              //onChange={onChange}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Apellido</FormLabel>
            <FormControl
              value={person.apellidos}
              id="apellidos"
              type="text"
              placeholder="Ingrese su apellido"
              //onChange={onChange}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Localidad</FormLabel>
            <FormControl
              value={person.localidad.localidad}
              id="localidad"
              type="text"
              placeholder="Ingrese su localidad"
              //onChange={onChange}
              disabled
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <FormLabel>Direccion</FormLabel>
            <FormControl
              value={person.direccion}
              id="direccion"
              type="text"
              placeholder="Ingrese su direccion"
              //onChange={onChange}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Celular</FormLabel>
            <FormControl
              value={person.celular}
              id="celular"
              type="text"
              placeholder="Ingrese su numero celular"
              //onChange={onChange}
              disabled
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export default PersonData;
