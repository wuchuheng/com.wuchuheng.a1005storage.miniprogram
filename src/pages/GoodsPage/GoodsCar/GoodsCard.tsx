/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/18 19:16
 */
import React from "react";
import { View } from "@tarojs/components";
import style from "./index.module.less";
import Icons, { IconName } from "../../../components/Icons/Icons";
import { toIntoStorageDetailPage } from "../../../route/route";

type ItemRenderType = {
  text: string;
  isRightIcon: boolean;
  onClick: () => void;
};
const ItemRender: React.FC<ItemRenderType> = (props) => (
  <View className={style.wrapperView} onClick={props.onClick}>
    <View>{props.text}</View>
    <Icons name={IconName.RIGHT} size={1} />
  </View>
);
const GoodsCard: React.FC = () => {
  return (
    <View className={style.main}>
      <View>
        <View>商品名: XXX</View>
      </View>
      <View className={style.line} />
      <ItemRender
        text="入库量: 10"
        isRightIcon
        onClick={toIntoStorageDetailPage}
      />
      <ItemRender
        text="入库均价: 10.00"
        isRightIcon
        onClick={toIntoStorageDetailPage}
      />
      <ItemRender
        text="入库支出合计: 10.00"
        isRightIcon
        onClick={toIntoStorageDetailPage}
      />

      <View className={style.line} />
      <ItemRender
        text="出库量: 10"
        isRightIcon
        onClick={toIntoStorageDetailPage}
      />
      <ItemRender
        text="出库均价?: 10.00"
        isRightIcon
        onClick={toIntoStorageDetailPage}
      />
      <ItemRender
        text="出库支出合计: 10.00"
        isRightIcon
        onClick={toIntoStorageDetailPage}
      />
      <View className={style.line} />

      <ItemRender
        text="平均毛利?: 0.1"
        isRightIcon
        onClick={toIntoStorageDetailPage}
      />
      <ItemRender
        text="平均毛利率?: 10%"
        isRightIcon
        onClick={toIntoStorageDetailPage}
      />
      <View className={style.line} />
      <ItemRender
        text="库存合计: 2"
        isRightIcon
        onClick={toIntoStorageDetailPage}
      />
      <ItemRender
        text="利润合计: + 10.00"
        isRightIcon
        onClick={toIntoStorageDetailPage}
      />
      <View className={style.actionWrapper}>
        <ItemRender
          text="查看账单"
          isRightIcon
          onClick={toIntoStorageDetailPage}
        />
      </View>
    </View>
  );
};

export default GoodsCard;
