import React, { useState } from "react";
import Taro from "@tarojs/taro";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";
import MainLayout, { TabItemType } from "../../layout/mainLayout/MainLauout";
import { IconName } from "../../components/Icons/Icons";
import HomePage from "../HomePage/HomePage";
import OrderPage from "../OrderPage/OrderPage";
import GoodsPage from "../GoodsPage/GoodsPage";

const Index: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const tabs: TabItemType[] = [
    { content: <HomePage />, name: "主页", icon: IconName.HOME },
    { content: <GoodsPage />, name: "货物", icon: IconName.MENU },
    { content: <OrderPage />, name: "账单", icon: IconName.ORDER },
  ];
  const onChange = (newIndex: number) => {
    setActiveIndex(newIndex);
    Taro.setNavigationBarTitle({ title: tabs[newIndex].name });
  };

  return <MainLayout tabs={tabs} index={activeIndex} onChange={onChange} />;
};

export default Index;
