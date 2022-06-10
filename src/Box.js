import { useState } from "react";

const Box = ({
  min = "0",
  max = "200",
  step = "0.1",
  label = "defaultLabel"
}) => {
  const [value, setValue] = useState(0.0);

  let size = "500px";
  const stylingBox = {
    background: "#222",
    display: "inline-flex",
    flexDirection: "column",
    margin: "0 2.5px",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: size,
    minWidth: "300px",
    height: "100%"
  };

  return (
    <div className="box" style={stylingBox}>
      <label style={{ color: "white" }}>
        <span style={{ marginRight: "1rem" }}>{label}</span>
        <input
          id="bla"
          type="number"
          min={min}
          max={max}
          step={step}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </label>
      <img
        width="200px"
        height="200px"
        alt="bla"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.thevap.com%2Fwp-content%2Fuploads%2F2014%2F06%2FScreen-Shot-2014-06-28-at-7.19.16-PM.png&f=1&nofb=1"
      />
      <input
        type="range"
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Box;
