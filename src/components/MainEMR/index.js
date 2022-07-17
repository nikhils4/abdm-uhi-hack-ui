import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Sidebar } from "./components/Sidebar";
import { ChiefComplaints } from "./components/ChiefComplaints";
import { Diagnosis } from "./components/Diagnosis";
import { Medication } from "./components/Medication";
import { Advice } from "./components/Advice";

export const MainEMR = () => {
  const [mainEmrScreenState, setMainEmrScreenState] =
    useState("ChiefComplaints");

  return (
    <Grid container>
      <Grid item md={2}></Grid>
      <Grid
        item
        xs={12}
        md={8}
        style={{
          display: "flex",
        }}
      >
        <Sidebar setMainEmrScreenState={setMainEmrScreenState} />
        {mainEmrScreenState === "ChiefComplaints" && <ChiefComplaints />}
        {mainEmrScreenState === "Diagnosis" && <Diagnosis />}
        {mainEmrScreenState === "Medication" && <Medication />}
        {mainEmrScreenState === "Advice" && <Advice />}
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
};