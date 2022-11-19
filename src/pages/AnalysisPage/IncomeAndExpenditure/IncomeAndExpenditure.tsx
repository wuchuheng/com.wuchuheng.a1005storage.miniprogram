/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/18 21:11
 */
import React from "react";
import { View } from "@tarojs/components";
import style from "./index.module.less";
import Icons, { IconName } from "../../../components/Icons/Icons";

type ItemProps = {
  name: string;
  value: string;
  onClick: () => void;
};
const Item: React.FC<ItemProps> = (props) => {
  return (
    <View className={style.itemWrapper} onClick={() => props.onClick()}>
      <View className={style.tip}>
        <View>{props.name}</View>
        <Icons name={IconName.RIGHT} size={1} />
      </View>
      <View className={style.fee}>{props.value}</View>
    </View>
  );
};

const IncomeAndExpenditure: React.FC = () => {
  return (
    <>
      <View className={style.main}>
        <View className={style.lineBackground} />
        <View className={style.cardWrapper}>
          <Item name="总支出" value="-10.00" onClick={() => {}} />
          <Item name="总收入" value="+10.00" onClick={() => {}} />
        </View>
      </View>
    </>
  );
};

export default IncomeAndExpenditure;
