/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/18 19:09
 */
import React from "react";
import { View } from "@tarojs/components";
import GoodsCard from "./GoodsCar/GoodsCard";
import style from "./index.module.less";

const GoodsPage: React.FC = () => {
  return (
    <View className={style.main}>
      <View className={style.topTip}>-- 到顶了 --</View>
      <GoodsCard />
      <GoodsCard />
      <GoodsCard />
      <GoodsCard />
      <GoodsCard />
      <GoodsCard />
      <GoodsCard />
      <GoodsCard />
      <GoodsCard />
      <GoodsCard />
    </View>
  );
};

export default GoodsPage;
