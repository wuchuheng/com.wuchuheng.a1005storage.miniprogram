/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/18 20:42
 */
import React from "react";
import { View } from "@tarojs/components";
import style from "./index.module.less";

const OrderCard: React.FC = () => {
  return (
    <>
      <View className={style.main}>
        <View className={style.item}>商品名: XXX</View>
        <View className={style.item}>数量: 10</View>
        <View className={style.item}>单价: 10.00</View>
        <View className={style.item}>操作人: (头像) 张三</View>
        <View className={style.item}>时间: 10-15 12:45 </View>
        <View className={style.item}>合计: +100.00</View>
      </View>
    </>
  );
};

export default OrderCard;
