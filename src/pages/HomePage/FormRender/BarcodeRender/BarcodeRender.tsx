/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/20 19:59
 */
import React from "react";
import { Canvas, View } from "@tarojs/components";
import Taro, { useReady } from "@tarojs/taro";
import { code128 } from "../../../../utils/barcode";
import style from "./style.module.less";

const BarcodeRender: React.FC<{ barcode: string }> = ({ barcode }) => {
  const barcodeCanvasId = "barcode";
  const convert_length = (length: number) => {
    return Math.round((Taro.getSystemInfoSync().windowWidth * length) / 750);
  };
  useReady(() => {
    code128(
      Taro.createCanvasContext(barcodeCanvasId),
      barcode,
      convert_length(400),
      convert_length(100)
    );
  });
  return (
    <>
      <View className={style.main}>
        <Canvas
          id={barcodeCanvasId}
          canvasId={barcodeCanvasId}
          style="width:400rpx;height:100rpx;display:block;margin:0 auto"
        />
        <View>{barcode}</View>
      </View>
    </>
  );
};

export default BarcodeRender;
