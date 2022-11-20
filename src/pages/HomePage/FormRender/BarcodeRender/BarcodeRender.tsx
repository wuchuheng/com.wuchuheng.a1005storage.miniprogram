/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/20 19:59
 */
import React from "react";
import { Canvas, View } from "@tarojs/components";
import { useReady } from "@tarojs/taro";
import wxbarcode from "wxbarcode";
import style from "./style.module.less";

const BarcodeRender: React.FC<{ barcode: string }> = ({ barcode }) => {
  const barcodeCanvasId = "barcode";
  useReady(() => {
    wxbarcode.barcode(barcodeCanvasId, barcode, 400, 100);
  });
  return (
    <>
      <View className={style.main}>
        <Canvas
          id={barcodeCanvasId}
          canvasId={barcodeCanvasId}
          style="width:400rpx;height:100rpx;margin:0 auto"
        />
        <View>条码: {barcode}</View>
      </View>
    </>
  );
};

export default BarcodeRender;
