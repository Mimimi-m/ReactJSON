import React from "react";
import axios from "axios";
import ColorfulMsg from "./ColorfulMsg";

class MsgList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgList: []
    };
  }

  handleClick = () => {
    // axios.get(取得先のURL).then(成功時に実行される関数).catch(失敗時に実行される関数);
    axios
      .get("https://api.myjson.com/bins/mt9wv")
      .then(res => this.setState({ msgList: res.data.msgList }))
      .catch(err => alert(err));
  };

  render() {
    const colorfulMsgList = this.state.msgList.map(val => (
      <ColorfulMsg key={val.message} color={val.color}>
        {val.message}
      </ColorfulMsg>
    ));

    return (
      <>
        <button onClick={this.handleClick}>Get Message</button>
        {colorfulMsgList}
      </>
    );
  }
}

export default MsgList;
