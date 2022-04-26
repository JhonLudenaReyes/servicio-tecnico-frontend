import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListPermits } from "../../actions/permitActions";

import MaterialTable, { MTableToolbar } from "material-table";
import toast, { Toaster } from "react-hot-toast";
import { changeState } from "../../actions/globalActions";

const columns = [{ title: "Permiso", field: "permiso" }];

const PermitList = () => {
  //ALERTS
  const notify = () => toast.success("¡Eliminado satisfactoriamente!");
  //const notifyCancel = () => toast("¡Sus datos no han sido eliminados!");

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

  return (
    <>
      <h1>Listado de permisos</h1>
      <MaterialTable
        title="Permisos Registrados"
        columns={columns}
        data={permits}
        //actions={actions}
        //options={options}
        //components={components}
      />
      <Toaster />
    </>
  );
};

export default PermitList;
