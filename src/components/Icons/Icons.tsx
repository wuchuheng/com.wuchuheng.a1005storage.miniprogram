/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/18 04:02
 */
import React, { CSSProperties } from "react";

// 图标名
enum IconName {
  HOME = "home",
  MENU = "menu",
  ORDER = "order",
  ICON_OUT_OF_STORAGE = "out-of-storage",
  ICON_INBOUND = "inbound",
}
const Icons: React.FC<{
  name: IconName;
  size: number;
  style?: CSSProperties;
  className?: string;
}> = ({ name, size, style, className }) => {
  return (
    <view
      className={`icon-${name} iconfont ${className || ""}`}
      style={{ fontSize: `${size}rem`, ...style }}
    />
  );
};

export default Icons;
export { IconName };
