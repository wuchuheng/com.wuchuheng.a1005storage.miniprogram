/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/18 21:13
 */
import React from "react";
import { View } from "@tarojs/components";
import style from "./index.module.less";
import IncomeAndExpenditure from "./IncomeAndExpenditure/IncomeAndExpenditure";
import Items from "./Items/Items";

const AnalysisPage: React.FC = () => {
  return (
    <View className={style.main}>
      <IncomeAndExpenditure />
      <Items />
    </View>
  );
};

export default AnalysisPage;
