import { TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState, useEffect } from "react";
import { GoToReports } from "./GoToReports";
import CancelIcon from "@mui/icons-material/Cancel";

export const Medication = () => {
  const [localState, setLocalState] = useState("");
  const [medication, setMedication] = useState(
    JSON.parse(window.localStorage.getItem("medication")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("medication", JSON.stringify(medication));
  }, [medication]);

  const handleSymptomsAdd = () => {
    if (localState?.length <= 0) return;
    setMedication([...medication, localState]);
    setLocalState("");
  };

  const handleDelete = (value) => {
    setMedication(medication.filter((item) => item !== value));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 25px",
        flexGrow: 1,
      }}
    >
      <GoToReports />
      <h3>Medication</h3>
      <TextField
        width="100%"
        id="outlined-required"
        label="Medication"
        value={localState}
        onChange={(event) => setLocalState(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <KeyboardReturnIcon onClick={handleSymptomsAdd} />
            </InputAdornment>
          ),
        }}
      />
      {medication?.length > 0 && (
        <>
          <div
            style={{
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Added
          </div>
          <ul>
            {medication?.map((medication) => (
              <li
                style={{
                  marginBottom: "10px",
                }}
              >
                {medication}{" "}
                <CancelIcon
                  onClick={() => handleDelete(medication)}
                  style={{
                    right: "35px",
                    position: "absolute",
                  }}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
