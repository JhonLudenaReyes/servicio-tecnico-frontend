import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPeopleActive,
  deletePersonById,
  setPerson,
} from "../../actions/personActions";
import { changeState, resetStore } from "../../actions/globalActions";

import { Link, useNavigate } from "react-router-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import toast, { Toaster } from "react-hot-toast";

const PersonList = () => {
  const notify = () => toast.success("¡Eliminado satisfactoriamente!");
  const notifyCancel = () => toast("¡Sus datos no han sido eliminados!");
  const dispatch = useDispatch();
  const people = useSelector((state) => state.person.people);
  const verification = useSelector((state) => state.person.verification);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPeopleActive());
  }, [dispatch]);

  useEffect(() => {
    if (verification) {
      notify();
      dispatch(changeState(false));
      dispatch(getPeopleActive());
    }
  });

  const columns = [
    { title: "Nombres", field: "nombres" },
    { title: "Apellidos", field: "apellidos" },
    { title: "Dirección", field: "direccion" },
    { title: "Celular", field: "celular" },
    { title: "Localidad", field: "localidad.localidad" },
  ];

  const actions = [
    {
      icon: "edit",
      tooltip: "Editar Persona",
      onClick: (event, rowData) => {
        // Do save operation
        console.log(rowData);
        dispatch(setPerson(rowData));
        return navigate("/administrator/person");
      },
    },
    {
      icon: "delete",
      tooltip: "Eliminar Persona",
      onClick: (event, rowData) => {
        // Do save operation

        let result = window.confirm(
          `¿Está seguro que desea eliminar a ${rowData.nombres} ${rowData.apellidos}?`
        );

        result ? dispatch(deletePersonById(rowData.idPersona)) : notifyCancel();
      },
    },
  ];

  const options = {
    actionsColumnIndex: -1,
  };

  const components = {
    Toolbar: (props) => (
      <>
        <MTableToolbar {...props} />
        <div style={{ padding: "0px 20px" }}>
          <Link
            onClick={resetPerson}
            to="/administrator/person"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <i className="material-icons">add_circle</i>
          </Link>
        </div>
      </>
    ),
  };

  //RESETEA VARIABLE DEL STORE
  const resetPerson = () => {
    dispatch(resetStore({}));
  };

  return (
    <>
      <h1>LISTADO DE PERSONAS</h1>
      <MaterialTable
        title="Personas Registradas"
        columns={columns}
        data={people}
        actions={actions}
        options={options}
        components={components}
      />
      <Toaster />
    </>
  );
};

export default PersonList;
