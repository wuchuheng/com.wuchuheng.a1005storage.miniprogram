/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/19 23:19
 */
import React, { useState } from "react";
import { PageContainer, Picker, View } from "@tarojs/components";
import style from "./style.module.less";
import Icons, { IconName } from "../../../components/Icons/Icons";
import DatePicker from "./DatePicker/DatePicker";

type TimeFilterProps = {
  className?: string;
};
const TimeFilter: React.FC<TimeFilterProps> = (props) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <>
      <PageContainer show={isShow} onAfterLeave={() => setIsShow(false)}>
        <DatePicker />
      </PageContainer>

      <View
        className={[style.main, props.className || ""].join(" ")}
        onClick={() => setIsShow(true)}
      >
        <View />
        <View className={style.timeRangeWrapper}>
          <View>22年7月21日 - 22年9月20日</View>
        </View>

        <View className={style.rightWrapper}>
          <Icons name={IconName.SETTING} size={1.6} className={style.icon} />
        </View>
      </View>
    </>
  );
};

export default TimeFilter;
