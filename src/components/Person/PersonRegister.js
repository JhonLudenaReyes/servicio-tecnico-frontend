//REACT
import React, { useState, useEffect } from "react";
//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
//REACT-BOOTSTRAP
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
//REACT-SELECT
import Select from "react-select";
import { Link } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import toast, { Toaster } from "react-hot-toast";

import { getLocations } from "../../actions/locationActions";
import { savePerson, editPerson } from "../../actions/personActions";
import { changeState } from "../../actions/globalActions";

import "./styles/PersonRegister.css";

const schema = yup
  .object({
    nombres: yup.string().required("Debe ingresar sus nombres"),
    apellidos: yup.string().required("Debe ingresar sus apellidos"),
    direccion: yup.string().required("Debe ingresar una dirección"),
    celular: yup.number().required(),
  })
  .required();

const defaultValues = {
  select: {
    value: 0,
    label: "Seleccione...",
  },
  nombres: "",
  apellidos: "",
  direccion: "",
  celular: "",
};

const PersonRegister = () => {
  const notify = () => toast.success("¡Creado satisfactoriamente!");

  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location.locations);
  const verification = useSelector((state) => state.person.verification);
  const person = useSelector((state) => state.person.person);

  const [options, setOptions] = useState([]);

  //const [valueForm, setValueForm] = useState(defaultValues);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    //defaultValues: valueForm,
    /*defaultValues: {
      select: {
        value: 0,
        label: "Seleccione...",
      },
      nombres: "",
      apellidos: "",
      direccion: "",
      celular: "",
    },*/
  });

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locations]);

  /*useEffect(() => {
      setLocations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocations = () => {
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
  };*/

  //Se consulta al store si se pudo ejecutar de forma correcta la accion
  //para poder mostrar una alerta de confirmacion al usuario...
  useEffect(() => {
    if (verification) {
      notify();
      dispatch(changeState(false));
    }
  });

  /*useEffect(() => {
    if (person.idPersona) {
      setValueForm({
        ...valueForm,
        select: {
          value: person.localidad.idLocalidad,
          label: person.localidad.localidad,
        },
        nombres: person.nombres,
        apellidos: person.apellidos,
        direccion: person.direccion,
        celular: person.celular,
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [person]);*/

  const onSubmit = (data) => {
    console.log(data);

    if (person.idPersona) {
      const editData = {
        idPersona: person.idPersona,
        idLocalidad: data.select.value,
        nombres: data.nombres,
        apellidos: data.apellidos,
        direccion: data.direccion,
        celular: data.celular,
      };

      dispatch(editPerson(editData));
    } else {
      const saveData = {
        idLocalidad: data.select.value,
        nombres: data.nombres,
        apellidos: data.apellidos,
        direccion: data.direccion,
        celular: data.celular,
      };

      dispatch(savePerson(saveData));
    }
    reset();
  };

  return (
    <Container className="PerRegContainer">
      <Link
        to="/administrator/person/admin"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <i className="material-icons left">keyboard_backspace</i>
        Volver a lista de personas
      </Link>
      <h2>
        <b>REGISTRO DE PERSONA</b>
      </h2>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
          <FormGroup>
              <FormLabel>Nombre</FormLabel>
              <Controller
                name="nombres"
                control={control}
                render={({ field }) => (
                  <FormControl
                    {...field}
                    //value={valueForm.nombres}
                    type="text"
                    placeholder="Ingrese su nombre"
                  />
                )}
              />
              <p>{errors.nombres?.message}</p>
            </FormGroup>
            <FormGroup>
              <FormLabel>Apellido</FormLabel>
              <Controller
                name="apellidos"
                control={control}
                render={({ field }) => (
                  <FormControl
                    {...field}
                    //value={valueForm.apellidos}
                    type="text"
                    placeholder="Ingrese su apellido"
                  />
                )}
              />
              <p>{errors.apellidos?.message}</p>
            </FormGroup>
            <FormGroup>
              <FormLabel>Localidad</FormLabel>
              <Controller
                name="select"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    //value={valueForm.select}
                    //value={{
                    //  value: person.localidad.idLocalidad,
                    //  label: person.localidad.localidad,
                    //}}
                    options={options}
                  />
                )}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <FormLabel>Direccion</FormLabel>
              <Controller
                name="direccion"
                control={control}
                render={({ field }) => (
                  <FormControl
                    {...field}
                    //value={valueForm.direccion}
                    type="text"
                    placeholder="Ingrese su direccion"
                  />
                )}
              />
              <p>{errors.direccion?.message}</p>
            </FormGroup>
            <FormGroup>
              <FormLabel>Celular</FormLabel>
              <Controller
                name="celular"
                control={control}
                render={({ field }) => (
                  <FormControl
                    {...field}
                    //value={valueForm.celular}
                    type="text"
                    placeholder="Ingrese su numero celular"
                  />
                )}
              />
              <p>{errors.celular?.message}</p>
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
      <Toaster />
    </Container>
  );
};

export default PersonRegister;
