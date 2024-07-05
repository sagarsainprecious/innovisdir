import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import classnames from "classnames";
import Icon from '@mdi/react'
// styles
import useStyles from "./styles";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// pages


// context
import { useLayoutState } from "../../context/LayoutContext";
import Dashboard from "../../pages/dashboard/Dashboard";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            {props.children}
          </div>
        </>
    </div>
  );
}

export default Layout;
