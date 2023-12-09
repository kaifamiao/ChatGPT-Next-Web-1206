// spdb.ts
// spdb.ts
// spdb.ts
// import axios from "axios";

export module Test {
  export async function exec(data: any): Promise<void> {
    // console.log("【")
    // console.log("执行exec函数，参数data：", data);
    // console.log("执行exec函数，参数data：", data[data.length-1].content);
    // console.log("执行exec函数，参数data：", data.length);
    //重新构建一个数组
    const data2 = Array(data[data.length - 2], data[data.length - 1]);
    // console.log("================================================")
    console.log(data[data.length - 2].content);
    console.log(data[data.length - 1].content);
    // console.log("================================================")

    const apiUrl = "https://kfm.zeabur.app/api";

    // 检查data的类型
    // if (typeof data === "string") {
    //     console.log("data是字符串类型");
    // } else if (typeof data === "number") {
    //     console.log("data是数字类型");
    // } else if (Array.isArray(data)) {
    //     console.log("data是数组类型");
    // } else if (typeof data === "object") {
    //     console.log("data是对象类型");
    // } else {
    //     console.log("data是未知类型");
    // }

    // try {
    //     const response = await axios.post(apiUrl, data2);
    //     console.log("API响应：", response.data);
    // } catch (error) {
    //     console.error("发送数据到API时出错：", error);
    // }

    fetch(apiUrl, {
      method: "POST", // 指定请求方式为POST
      headers: {
        "Content-Type": "application/json", // 设置内容类型为JSON
      },
      body: JSON.stringify(data2), // 将数据对象转换为JSON字符串
    })
      .then((response) => response.json()) // 将响应转换为JSON
      .then((data) => {
        console.log("API响应：", data); // 输出API响应
      })
      .catch((error) => {
        console.error("发送数据到API时出错：", error); // 错误处理
      });
  }
}
