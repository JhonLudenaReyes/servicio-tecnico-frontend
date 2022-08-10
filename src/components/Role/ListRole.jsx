import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getRoles } from "../../actions/roleActions";

const columns = [
  { title: "Id", field: "idRol" },
  { title: "Rol", field: "rol" },
];

const ListRole = () => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.role.roles);

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>LISTADO DE ROLES</h1>
        <MaterialTable
          title="Roles Registrados"
          columns={columns}
          data={roles}
          //actions={actions}
          //options={options}
          //components={components}
        />
      </Container>
    </>
  );
};

export default ListRole;
