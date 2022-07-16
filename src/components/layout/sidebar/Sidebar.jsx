import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import {
  DashboardRounded,
  AccountBoxRounded,
  PeopleAltRounded,
  ManageAccountsRounded,
} from "@mui/icons-material";

const Sidebar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <ProSidebar hidden={!isAuthenticated} width={"255px"}>
        <Menu iconShape="square">
          <MenuItem icon={<DashboardRounded />}>
            Dashboard
            <Link to="/dashboard" />
          </MenuItem>
          <MenuItem icon={<AccountBoxRounded />}>
            Persona
            <Link to="/administrator/person/admin" />
          </MenuItem>
          <MenuItem icon={<PeopleAltRounded />}>
            Cliente
            <Link to="/administrator/client" />
          </MenuItem>
          <MenuItem icon={<ManageAccountsRounded />}>
            Permiso
            <Link to="/administrator/permit" />
          </MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </>
  );
};

export default Sidebar;
