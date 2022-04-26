import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { savePermit } from "../../actions/permitActions";
import "./styles/PermitRegister.css";

//NOTIFICACIONES
import toast, { Toaster } from "react-hot-toast";
import { changeState } from "../../actions/globalActions";

const data = {
  permit: "",
};

const PermitRegister = () => {
  //NOTIFICACIÓN
  const notify = () => toast.success("¡Guardado satisfactoriamente!");

  const verification = useSelector((state) => state.permit.verification);

  const dispatch = useDispatch();

  const [permit, setPermit] = useState(data);

  useEffect(() => {
    if (verification) {
      notify();
      dispatch(changeState(false));
    }
  });

  const onChange = (e) => {
    setPermit({
      ...permit,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(permit);

    const dataSave = {
      permiso: permit.permit,
    };

    dispatch(savePermit(dataSave));

    //Clear form
    clearState(data);
  };

  const clearState = (data) => {
    setPermit(data);
  };

  return (
    <>
      <Container className="PermRegContainer">
        <Row>
          <h1>Registro de permisos</h1>
          <Col>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Label>Permiso</Form.Label>
                <Form.Control
                  id="permit"
                  value={permit.permit}
                  type="text"
                  placeholder="Ingrese un permiso"
                  onChange={onChange}
                />
                <Form.Text className="text-muted">
                  Debe ingresar un permiso para poder guardar
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Form>
          </Col>
        </Row>
        <Toaster />
      </Container>
    </>
  );
};

export default PermitRegister;
