import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

import { getRoles, saveRole } from "../../actions/roleActions";
import { useDispatch } from "react-redux";

const RoleRegister = () => {
  const [role, setRole] = useState({
    rol: "",
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setRole({
      ...role,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(saveRole(role));
    clearForm();
    dispatch(getRoles());
  };

  const clearForm = () => {
    setRole({
      ...role,
      rol: "",
    });
  };

  return (
    <>
      <h2>
        <b>Registro roles de usuario</b>
      </h2>
      <Form noValidate onSubmit={onSubmit}>
        <FormGroup>
          <FormLabel>Ingrese rol de usuario</FormLabel>
          <FormControl
            value={role.rol}
            onChange={onChange}
            type="text"
            id="rol"
            placeholder="Escriba un rol"
          />
        </FormGroup>
        <hr />
        <Button variant="primary" type="submit">
          Guardar los cambios
        </Button>
      </Form>
    </>
  );
};

export default RoleRegister;
