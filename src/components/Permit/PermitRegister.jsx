//REACT
import React, { useEffect, useState } from "react";
//REACT REDUX
import { useDispatch, useSelector } from "react-redux";

//GLOBAL ACTIONS
import { changeState } from "../../actions/globalActions";
//PERMIT ACTIONS
import { editPermit, savePermit } from "../../actions/permitActions";

//REACT HOT TOAST
import toast, { Toaster } from "react-hot-toast";

//REACT BOOTSTRAP
import { Button, Col, Container, Form, Row } from "react-bootstrap";

//STYLES
import "./styles/PermitRegister.css";

//INITIAL STATE
const data = {
  permit: "",
};

const PermitRegister = () => {
  //NOTIFICATIONS
  const notify = () => toast.success("¡Guardado satisfactoriamente!");

  const dispatch = useDispatch();

  const verification = useSelector((state) => state.permit.verification);

  //LOAD INITIAL STATE
  const [permit, setPermit] = useState(data);

  //IF VERIFICATION IS TRUE SHOW NOTIFICATION
  useEffect(() => {
    if (verification) {
      notify();
      //CHANGE INITIAL STATE IN THE STORE
      dispatch(changeState(false));
    }
  });

  //MONTAR DATOS PARA EDITAR
  useEffect(() => {
    if (permit.idPermiso) {
      setPermit({
        ...permit,
        permit: permit.permit,
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permit]);

  //GET DATA FORM
  const onChange = (e) => {
    setPermit({
      ...permit,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //SHOW FOR CONSOLE THE DATA
    console.log(permit);

    //DATA TO SAVE
    const dataSave = {
      permiso: permit.permit,
    };

    //DATA TO EDIT
    const dataEdit = {
      idPermiso: permit.idPermiso,
      permiso: permit.permit,
    };

    permit.idPermiso
      ? //DISPATCH SAVE PERMIT
        dispatch(savePermit(dataSave))
      : //DISPATCH EDIT PERMIT
        dispatch(editPermit(dataEdit));

    //CLEAR FORM
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
