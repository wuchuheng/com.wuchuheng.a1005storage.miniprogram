/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/19 20:26
 */
import React from "react";
import { View } from "@tarojs/components";
import style from "./index.module.less";
import Icons, { IconName } from "../../../components/Icons/Icons";

type ItemProps = {
  name: string;
  value: string;
  onClick?: () => void;
};
const Item: React.FC<ItemProps> = (props) => {
  return (
    <View
      className={style.itemWrapper}
      onClick={() => {
        props.onClick && props.onClick();
      }}
    >
      <View className={style.name}>
        <View>{props.name}</View>
        {props.onClick && <Icons name={IconName.RIGHT} size={1} />}
      </View>
      <View className={style.value}>{props.value}</View>
    </View>
  );
};
const Items: React.FC = () => {
  return (
    <View className={style.main}>
      <Item name="总利润" value="+100.00" onClick={() => {}} />
      <Item name="总出库量" value="100" onClick={() => {}} />
      <Item name="总入库量" value="100" onClick={() => {}} />
      <Item name="总库存合计" value="100" onClick={() => {}} />
      <Item name="品类数" value="100" onClick={() => {}} />
    </View>
  );
};

export default Items;
