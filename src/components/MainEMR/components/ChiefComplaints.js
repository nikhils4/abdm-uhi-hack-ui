import { TextField, InputAdornment } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState, useEffect } from "react";

export const ChiefComplaints = () => {
  const [localState, setLocalState] = useState("");
  const [chiefComplaints, setChiefComplaints] = useState(
    JSON.parse(window.localStorage.getItem("chiefComplaints")) || []
  );

  useEffect(() => {
    window.localStorage.setItem(
      "chiefComplaints",
      JSON.stringify(chiefComplaints)
    );
  }, [chiefComplaints]);

  const handleSymptomsAdd = () => {
    if (localState.length <= 0) return;
    setChiefComplaints([...chiefComplaints, localState]);
    setLocalState("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 20px",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          height: "80px",
          border: "1px solid blue",
        }}
      >
        Go to reports
      </div>
      <h3>Chief Complaints</h3>
      <TextField
        width="100%"
        id="outlined-required"
        label="Chief Complaints"
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
      {chiefComplaints.length > 0 && (
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
            {chiefComplaints?.map((chiefComplaint) => (
              <li>{chiefComplaint}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};