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

//FUNCIONES EXPORTADAS DE ACTIONS
import { getLocations } from "../../actions/locationActions";
import { savePerson, editPerson } from "../../actions/personActions";
import { changeState, resetStore } from "../../actions/globalActions";

//NOTIFICACIONES
import toast, { Toaster } from "react-hot-toast";

//STYLES
import "./styles/PersonForm.css";

//DATOS INICIALES
const defaultValues = {
  nombres: "",
  apellidos: "",
  direccion: "",
  celular: "",
};

const select = {
  value: 0,
  label: "Seleccione...",
};

const PersonForm = () => {
  //NOTIFICACIÓN
  const notify = () => toast.success("¡Guardado satisfactoriamente!");

  //ESTADO INICIAL DEL FORMULARIO
  const [data, setData] = useState(defaultValues);
  //DATOS DEL SELECT
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(select);

  //INICIALIZA EL DISPATCH
  const dispatch = useDispatch();

  //EXTRAE DATOS DEL STORE
  const locations = useSelector((state) => state.location.locations);
  const verification = useSelector((state) => state.person.verification);
  const person = useSelector((state) => state.person.person);

  //Se consulta al store si se pudo ejecutar de forma correcta la accion
  //para poder mostrar una alerta de confirmacion al usuario...
  useEffect(() => {
    if (verification) {
      notify();
      dispatch(changeState(false));
    }
  });

  //MONTAR DATOS PARA EDITAR
  useEffect(() => {
    if (person.idPersona) {
      setData({
        ...data,
        nombres: person.nombres,
        apellidos: person.apellidos,
        direccion: person.direccion,
        celular: person.celular,
      });
      setSelectedOption({
        ...selectedOption,
        value: person.localidad.idLocalidad,
        label: person.localidad.localidad,
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [person]);

  //EJECUTA EL DISPATCH QUE MANDA HABER LOS DATOS DE LAS LOCALIZACIONES AL SERVIDOR
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  //EJECUTA SETLOCATIONS
  useEffect(() => {
    setLocations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locations]);

  //ALMACENA LAS LOCALIZACIONES
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
  };

  //CAPTURA LOS DATOS DE LOS IMPUTS
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  //FUNCIÓN PRINCIPAL DEL FORMULARIO
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(selectedOption);

    if (person.idPersona) {
      const editData = {
        idPersona: person.idPersona,
        idLocalidad: selectedOption.value,
        nombres: data.nombres,
        apellidos: data.apellidos,
        direccion: data.direccion,
        celular: data.celular,
      };

      dispatch(editPerson(editData));
    } else {
      const saveData = {
        idLocalidad: selectedOption.value,
        nombres: data.nombres,
        apellidos: data.apellidos,
        direccion: data.direccion,
        celular: data.celular,
      };

      dispatch(savePerson(saveData));
    }

    reset();
    resetPerson();
  };

  //RESETEAR FORMULARIO
  const reset = () => {
    setData(defaultValues);
    setSelectedOption(select);
  };

  //RESETEA VARIABLE DEL STORE
  const resetPerson = () => {
    dispatch(resetStore({}));
  };

  return (
    <>
      <Container className="PerFormContainer">
        <Link
          onClick={resetPerson}
          to="/administrator/person/admin"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <i className="material-icons left">keyboard_backspace</i>
          Volver a lista de personas
        </Link>
        <h2>
          <b>REGISTRO DE PERSONA</b>
        </h2>
        <Form noValidate onSubmit={onSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel>Nombre</FormLabel>
                <FormControl
                  value={data.nombres}
                  id="nombres"
                  type="text"
                  placeholder="Ingrese su nombre"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Apellido</FormLabel>
                <FormControl
                  value={data.apellidos}
                  id="apellidos"
                  type="text"
                  placeholder="Ingrese su apellido"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Localidad</FormLabel>
                <Select
                  //value={valueForm.select}
                  //value={{
                  //  value: person.localidad.idLocalidad,
                  //  label: person.localidad.localidad,
                  //}}
                  value={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel>Direccion</FormLabel>
                <FormControl
                  value={data.direccion}
                  id="direccion"
                  type="text"
                  placeholder="Ingrese su direccion"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Celular</FormLabel>
                <FormControl
                  value={data.celular}
                  id="celular"
                  type="text"
                  placeholder="Ingrese su numero celular"
                  onChange={onChange}
                />
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
    </>
  );
};

export default PersonForm;
