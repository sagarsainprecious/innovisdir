import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import Table from "./components/Table/Table";

export default function Dashboard(props) {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Dashboard" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
            {/* <Widget
              title="Support Requests"
              upperTitle
              noBodyPadding
              bodyClass={classes.tableWidget}
            >
              <Table data={mock.table} />
            </Widget> */}
        </Grid>
      </Grid>
    </>
  );
}

 
