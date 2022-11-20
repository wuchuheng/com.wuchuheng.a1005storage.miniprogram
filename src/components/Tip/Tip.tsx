/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/19 23:51
 */

import { View } from "@tarojs/components";
import React, { useState } from "react";
import style from "./style.module.less";
import Icons, { IconName } from "../Icons/Icons";

type TipProps = {
  value: string;
};
const Tip: React.FC<TipProps> = (props) => {
  const [isVisit, setIsVisit] = useState<boolean>(true);
  return (
    <View className={style.main}>
      <View
        className={style.titleWrapper}
        onClick={() => {
          setIsVisit(!isVisit);
        }}
      >
        <View>提示</View>
        <Icons name={IconName.RIGHT} size={1} />
      </View>
      {isVisit && <View className={style.content}>{props.value}</View>}
    </View>
  );
};

export default Tip;
