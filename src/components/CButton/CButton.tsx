/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/18 14:06
 */
import React from "react";
import { AtButtonProps } from "taro-ui/types/button";
import { AtButton } from "taro-ui";
import style from "./index.module.less";

const CButton: React.FC<AtButtonProps> = (property) => {
  return (
    <>
      <AtButton
        {...property}
        className={[property.className, style.main].join(" ")}
      />
    </>
  );
};

export default CButton;
