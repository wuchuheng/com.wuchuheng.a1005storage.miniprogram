/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/18 05:17
 */

import Taro from "@tarojs/taro";
import { Image, View } from "@tarojs/components";
import React from "react";
import style from "./index.module.less";
import logo from "../../assets/images/logo.png";
import CButton from "../../components/CButton/CButton";
import Icons, { IconName } from "../../components/Icons/Icons";

const HomePage: React.FC = () => {
  const onClick = () => {
    Taro.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res.result);
      },
      fail: () => {},
    });
  };
  const iconSize = 1.2;
  return (
    <>
      <View className={style.main}>
        <Image src={logo} className={style.image} />
        <View className={style.buttonWrapper} onClick={onClick}>
          <CButton type="primary" className={style.button}>
            <View className={style.buttonTextWrapper}>
              <Icons name={IconName.ICON_INBOUND} size={iconSize} />
              <View>入库</View>
            </View>
          </CButton>
          <CButton type="primary" className={style.button}>
            <View className={style.buttonTextWrapper}>
              <Icons name={IconName.ICON_OUT_OF_STORAGE} size={iconSize} />
              <View>出库</View>
            </View>
          </CButton>
        </View>
      </View>
    </>
  );
};

export default HomePage;
