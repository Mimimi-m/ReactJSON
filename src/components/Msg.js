// コンポーネントを返すだけ
// 直接HTMLにレンダリングするわけではないのでreact-domは不要
import React from "react";

// pタグのメッセージだけを持った関数componentを作成
const Msg = () => {
  return <p style={{ color: "blue" }}>React is not difficult.</p>;
};

// 上記の関数componentを他のファイルで使えるようにexportする
// 基本的にdefaultをつけておけばよい
export default Msg;
