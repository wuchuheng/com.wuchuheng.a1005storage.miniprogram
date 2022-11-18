import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";
import MainLayout, { TabItemType } from "../../layout/mainLayout/MainLauout";
import { IconName } from "../../components/Icons/Icons";
import HomePage from "../HomePage/HomePage";

const Index: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabs: TabItemType[] = [
    { content: <HomePage />, name: "主页", icon: IconName.HOME },
    { content: <View>orders</View>, name: "清单", icon: IconName.ORDER },
    { content: <View>menu</View>, name: "汇总", icon: IconName.MENU },
  ];
  const onChange = (newIndex: number) => {
    setActiveIndex(newIndex);
    Taro.setNavigationBarTitle({ title: tabs[newIndex].name });
  };

  return <MainLayout tabs={tabs} index={activeIndex} onChange={onChange} />;
};

export default Index;
