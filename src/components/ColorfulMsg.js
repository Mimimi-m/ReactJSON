// コンポーネントを返すだけ
// 直接HTMLにレンダリングするわけではないのでreact-domは不要
import React from "react";

// pタグのメッセージだけを持った関数componentを作成
const ColorfulMsg = props => {
  return <p style={{ color: props.color }}>{props.children}</p>;
};

// 上記の関数componentを他のファイルで使えるようにexportする
// 基本的にdefaultをつけておけばよい
export default ColorfulMsg;
