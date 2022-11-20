/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/19 21:33
 */
import { View } from "@tarojs/components";
import React from "react";
import TimeFilter from "./TimeFilter/TimeFilter";
import LineChart from "../../components/LineChart/LineChart";
import Tip from "../../components/Tip/Tip";
import style from "./style.module.less";

const IntoStorageDetailPage: React.FC = () => {
  return (
    <View className={style.main}>
      <Tip value={`"库存量"指的就是当前仓库的存货数量`} />
      <TimeFilter className={style.timeFilter} />
      <LineChart />
    </View>
  );
};
export default IntoStorageDetailPage;
