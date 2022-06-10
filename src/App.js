import "./styles.css";
import Box from "./Box";

export default function App() {
  return (
    <div className="App">
      <div className="oben" style={{ overflowX: "auto" }}>
        <div
          style={{
            display: "flex",

            flexFlow: "row nowrap",
            justifyContent: "start",
            alignItems: "start",
            height: "100%",
            overflowY: "hidden",
            overflowX: "auto"
          }}
          className="container"
        >
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
      <div className="unten"></div>
    </div>
  );
}
