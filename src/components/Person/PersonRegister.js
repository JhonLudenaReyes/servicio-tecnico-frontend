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

import { useForm, Controller } from "react-hook-form";

const PersonRegister = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location.locations);

  const [options, setOptions] = useState([]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      select: {value: 0, label: "Seleccione..."},
      nombres: "",
      apellidos: "",
      direccion: "",
      celular: "",
    },
  });

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  useEffect(() => {
      setLocations(locations);
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <FormLabel>Localidad</FormLabel>
              <Controller
                name="select"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                  />
                )}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Nombre</FormLabel>
              <Controller
                name="nombres"
                control={control}
                render={({ field }) => (
                  <FormControl
                    {...field}
                    type="text"
                    placeholder="Ingrese su nombre"
                  />
                )}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Apellido</FormLabel>
              <Controller
                name="apellidos"
                control={control}
                render={({ field }) => (
                  <FormControl
                    {...field}
                    type="text"
                    placeholder="Ingrese su apellido"
                  />
                )}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Direccion</FormLabel>
              <Controller
                name="direccion"
                control={control}
                render={({ field }) => (
                  <FormControl
                    {...field}
                    type="text"
                    placeholder="Ingrese su direccion"
                  />
                )}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Celular</FormLabel>
              <Controller
                name="celular"
                control={control}
                render={({ field }) => (
                  <FormControl
                    {...field}
                    type="text"
                    placeholder="Ingrese su numero celular"
                  />
                )}
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
