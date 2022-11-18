/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/18 03:33
 */
import React, { ReactNode } from "react";
import { View } from "@tarojs/components";
import style from "./index.module.less";
import Icons, { IconName } from "../../components/Icons/Icons";

type TabItemType = {
  content: ReactNode;
  name: string;
  icon: IconName;
};
type MainLayoutPropertyType = {
  tabs: TabItemType[];
  index: number;
  onChange: (value: number) => void;
};

const MainLayout: React.FC<MainLayoutPropertyType> = ({
  index,
  tabs,
  onChange,
}) => {
  const iconSize = 1.6;
  return (
    <>
      <View className={style.main}>
        <View className={style.tabContent}>{tabs[index].content}</View>

        <View className={style.tabBar}>
          {tabs.map((item, i) => (
            <View
              onClick={() => onChange(i)}
              className={[style.tab, index === i ? style.activeTab : ""].join(
                " "
              )}
              key={i}
            >
              <Icons name={item.icon} size={iconSize} />
              <View>{item.name}</View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default MainLayout;
export { TabItemType };
