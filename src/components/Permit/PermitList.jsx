import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getListPermits, deletePermitById, setPermit } from "../../actions/permitActions";

import MaterialTable, { MTableToolbar } from "material-table";
import toast, { Toaster } from "react-hot-toast";
import { changeState, resetStore } from "../../actions/globalActions";
import { Link } from "react-router-dom";

import "./styles/PermitList.css";

const columns = [{ title: "Permisos Registrados", field: "permiso" }];

const PermitList = () => {
  //NOTIFICATIONS
  const notify = () => toast.success("¡Eliminado satisfactoriamente!");
  const notifyCancel = () => toast("¡Sus datos no han sido eliminados!");

  const dispatch = useDispatch();
  const permits = useSelector((state) => state.permit.permits);
  const verification = useSelector((state) => state.person.verification);

  useEffect(() => {
    dispatch(getListPermits());
  }, [dispatch]);

  useEffect(() => {
    if (verification) {
      notify();
      dispatch(changeState(false));
      dispatch(getListPermits());
    }
  });

  const actions = [
    {
      icon: "edit",
      tooltip: "Editar Permiso",
      onClick: (event, rowData) => {
        // Do save operation
        console.log(rowData);
        dispatch(setPermit(rowData));
      },
    },
    {
      icon: "delete",
      tooltip: "Eliminar Permiso",
      onClick: (event, rowData) => {
        // Do save operation

        let result = window.confirm(
          `¿Está seguro que desea eliminar ${rowData.permiso}?`
        );

        result ? dispatch(deletePermitById(rowData.idPermiso)) : notifyCancel();
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
        <div className="permitListDiv">
          <Link
            className="permListLink"
            onClick={resetPermit}
            to="/administrator/person"
          >
            <i className="material-icons">add_circle</i>
          </Link>
        </div>
      </>
    ),
  };

  //RESETEA VARIABLE DEL STORE
  const resetPermit = () => {
    dispatch(resetStore({}));
  };

  return (
    <>
      <h1>Listado de permisos</h1>
      <MaterialTable
        title="Permisos"
        columns={columns}
        data={permits}
        actions={actions}
        options={options}
        components={components}
      />
      <Toaster />
    </>
  );
};

export default PermitList;
