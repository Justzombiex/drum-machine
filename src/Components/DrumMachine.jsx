import { useState } from "react";
import { pads } from "../data/data.js";
import DrumPad from "./DrumPad.jsx";

export default function DrumMachine() {
  const [display, setDisplay] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
      <div
        id="drum-machine"
        className="bg-secondary p-4 rounded text-center text-white w-100"
        style={{ maxWidth: "500px" }}
      >
        <div id="display" className="bg-dark p-2 rounded mb-3 fs-4 text-white">
          {display}
        </div>
        <div
          id="pad-grid"
          className="d-grid gap-3"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {pads.map((pad) => (
            <DrumPad
              key={pad.key}
              keyTrigger={pad.key}
              clip={pad.url}
              name={pad.name}
              setDisplay={setDisplay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
