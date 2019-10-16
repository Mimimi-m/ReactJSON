import React from "react";
import ReactDOM from "react-dom";
// import Msg from "./components/Msg"; // .jsファイルを相対指定
import MsgList from "./components/MsgList";

const headerstyle = {
  color: "#212121"
};

const App = () => {
  return (
    <>
      <h2 style={headerstyle}>React Hands On!</h2>
      <MsgList />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
