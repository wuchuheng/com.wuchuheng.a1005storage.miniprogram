/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/18 05:17
 */

import Taro from "@tarojs/taro";
import { Image, PageContainer, View } from "@tarojs/components";
import React, { useState } from "react";
import style from "./index.module.less";
import logo from "../../assets/images/logo.png";
import CButton from "../../components/CButton/CButton";
import Icons, { IconName } from "../../components/Icons/Icons";
import FormRender from "./FormRender/FormRender";

const HomePage: React.FC = () => {
  const [barCode, setBarCode] = useState<string>("");
  const onClick = () => {
    Taro.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        setBarCode(res.result);
        setIsShow(true);
      },
      fail: () => {},
    });
  };
  const iconSize = 1.2;
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <>
      <PageContainer show={isShow} onAfterLeave={() => setIsShow(false)}>
        <FormRender
          onConfirm={() => setIsShow(false)}
          onCancel={() => setIsShow(false)}
          barcode={barCode}
        />
      </PageContainer>
      <View className={style.main}>
        <Image src={logo} className={style.image} />
        <View className={style.buttonWrapper} onClick={onClick}>
          <CButton type="primary" className={style.button}>
            <View className={style.buttonTextWrapper}>
              <Icons name={IconName.ICON_INBOUND} size={iconSize} />
              <View>入库</View>
            </View>
          </CButton>
          <CButton type="primary" className={style.button} onClick={onClick}>
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
