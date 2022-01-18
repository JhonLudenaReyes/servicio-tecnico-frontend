import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import Select from "react-select";
import { getLocations } from "../../actions/locationActions";

const PersonRegister = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location.locations);

  const [options, setOptions] = useState([]);
  const [personData, setPersonData] = useState({
    idLocalidad: "",
    nombres: "",
    apellidos: "",
    direccion: "",
    celular: "",
  });

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  useEffect(() => {
    if (locations) {
      setLocations(locations);
    }  
  }, [locations]);

  const setLocations = (locations) => {
    const optionLocations = [];
    locations.map(
      (location, index) =>
        (optionLocations[index] = {
          value: location.idLocalidad,
          label: location.localidad,
        })
    );
    setOptions([
      {
        ...options,
        options: optionLocations,
      },
    ]);
  };

  //const options = [
  //  { value: "chocolate", label: "Chocolate" },
  //  { value: "strawberry", label: "Strawberry" },
  //  { value: "vanilla", label: "Vanilla" },
  //];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption({
      ...selectedOption,
      selectedOption,
    });
    console.log(`Option selected:`, selectedOption);
  };

  const onChange = (e) => {
    setPersonData({
      ...personData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setPersonData({
      ...personData,
      idLocalidad: selectedOption.value,
    });
    console.log(personData);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form noValidate onSubmit={onSubmit}>
            <FormGroup>
              <FormLabel>Localidad</FormLabel>
              <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Nombre</FormLabel>
              <FormControl
                onChange={onChange}
                //value={this.state.email}
                id="nombres"
                type="text"
                placeholder="Ingrese su nombre"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Apellido</FormLabel>
              <FormControl
                onChange={onChange}
                //value={}
                id="apellidos"
                type="text"
                placeholder="Ingrese su apellido"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Direccion</FormLabel>
              <FormControl
                onChange={onChange}
                //value={}
                id="direccion"
                type="text"
                placeholder="Ingrese su direccion"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Celular</FormLabel>
              <FormControl
                onChange={onChange}
                //value={}
                id="celular"
                type="text"
                placeholder="Ingrese su numero celular"
              />
            </FormGroup>
            <hr />
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonRegister;
