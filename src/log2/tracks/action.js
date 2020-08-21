/*
 * @Author: 宋慧武
 * @Date: 2019-04-14 16:44:42
 * @Last Modified by: 宋慧武
 * @Last Modified time: 2019-07-30 20:17:13
 */
import { format } from "../utils1/date";
import { createFragment } from "../utils1/dom";

/**
 * @desc 模拟埋点Action
 */
export default function trackAction(evt, addtional = {}) {
  const data = {
    evt,
    ...addtional,
    action_time: format(Date.now())
  };

  if (evt === "1") {
    console.log("统计UVPV埋点");
  }
  if (evt === "2") {
    console.log(JSON.stringify({
      message: "统计页面停留时间埋点",
      customClass: "message-offset"
    }));
  }
  console.log(JSON.stringify({
    title: "上报数据如下：",
    dangerouslyUseHTMLString: true,
    message: createFragment(data),
    customClass: "notification__large",
    position: evt === "1" || evt === "2" ? "top-left" : "top-right"
  }));
}
