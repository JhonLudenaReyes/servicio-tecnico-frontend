import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Col,
  Container,
  Row,
  FormGroup,
  FormLabel,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import Select from "react-select";

import PersonData from "./PersonData";
import { getPeopleActive } from "../../actions/personActions";

import "./styles/ClientRegister.css";

const select = {
  value: 0,
  label: "Seleccione...",
};

const ClientRegister = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.person.people);

  //DATOS DEL SELECT
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(select);

  const [personData, setPersonData] = useState({
    localidad: { localidad: "" },
  });

  useEffect(() => {
    dispatch(getPeopleActive());
  }, [dispatch]);

  //EJECUTA SETPEOPLE
  useEffect(() => {
    setPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [people]);

  useEffect(() => {
    if (selectedOption.value !== 0) {
      changePerson(selectedOption.value);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  const changePerson = (idPersona) => {
    const personData = people.find((person) => {
      return idPersona === person.idPersona;
    });
    console.log("found: ", personData);
    setPersonData({
      ...personData,
      personData,
    });
  };

  //ALMACENA LAS LOCALIZACIONES
  const setPeople = () => {
    const optionPeople = [];
    people.map(
      (person, index) =>
        (optionPeople[index] = {
          value: person.idPersona,
          label: person.nombres.concat(" ", person.apellidos),
        })
    );
    setOptions([
      {
        ...options,
        options: optionPeople,
      },
    ]);
  };

  return (
    <>
      <Container className="CliRegContainer">
        <Row>
          <h1>
            <b>REGISTRO DE CLIENTES</b>
          </h1>
        </Row>
        <Row>
          <FormGroup>
            <FormLabel>
              <h3>
                <b>Buscar persona...</b>
              </h3>
            </FormLabel>
            <Select
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
            <Link
              //onClick={resetPerson}
              to="/administrator/person"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <i className="material-icons">add_circle</i>
            </Link>
          </FormGroup>
        </Row>
        <Row>
          <Col>
            <h3>Datos de la persona</h3>
            <PersonData person={personData} />
          </Col>
          <Col>
            <h3>Información del cliente</h3>
            <Form noValidate onSubmit={() => {} /*onSubmit*/}>
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel>Cédula</FormLabel>
                    <FormControl
                      //value={data.nombres}
                      id="cedula"
                      type="text"
                      placeholder="Ingrese su cédula"
                      //onChange={onChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>RUC</FormLabel>
                    <FormControl
                      //value={data.apellidos}
                      id="ruc"
                      type="text"
                      placeholder="Ingrese su ruc"
                      //onChange={onChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl
                      //value={data.apellidos}
                      id="telefono"
                      type="text"
                      placeholder="Ingrese su teléfono"
                      //onChange={onChange}
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Teléfono adicional</FormLabel>
                    <FormControl
                      //value={data.direccion}
                      id="telefonoAdicional"
                      type="text"
                      placeholder="Ingrese su telefono adicional"
                      //onChange={onChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl
                      //value={data.celular}
                      id="email"
                      type="email"
                      placeholder="Ingrese su numero email"
                      //onChange={onChange}
                    />
                  </FormGroup>
                  <hr />
                  <Button variant="primary" type="submit">
                    Guardar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClientRegister;
