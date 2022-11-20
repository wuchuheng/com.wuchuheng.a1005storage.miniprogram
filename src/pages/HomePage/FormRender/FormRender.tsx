/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/20 18:46
 */
import React, { useState } from "react";
import { Input, View } from "@tarojs/components";
import style from "./style.module.less";
import CButton from "../../../components/CButton/CButton";
import BarcodeRender from "./BarcodeRender/BarcodeRender";

interface FormItemProps {
  name: string;
  placeHolder: string;
  value: string;
  onChange: (value: string) => void;
}

interface FormNumberItemProps
  extends Omit<FormItemProps, "value" | "onChange"> {
  value: number;
  onChange: (value: number) => void;
}
const FormItemContainer: React.FC<
  { children: JSX.Element | JSX.Element[] } & Pick<FormItemProps, "name">
> = (props) => (
  <View className={style.formItemWrapper}>
    <View>{props.name}:</View>
    <View className={style.inputWrapper}>{props.children}</View>
  </View>
);
const FormItem: React.FC<FormItemProps> = (props) => {
  return (
    <FormItemContainer name={props.name}>
      <Input className={style.input} placeholder={props.placeHolder} />
    </FormItemContainer>
  );
};

const FormNumberItem: React.FC<FormNumberItemProps> = (props) => {
  return (
    <FormItemContainer name={props.name}>
      <Input
        type="number"
        placeholder={props.placeHolder}
        value={props.value + ""}
        onInput={(e) => props.onChange(Number(e.detail.value))}
        className={style.numberInput}
      />
      <View className={style.buttonsWrapper}>
        <CButton
          size="small"
          className={style.button}
          onClick={() => props.onChange(props.value + 1)}
        >
          +
        </CButton>
        <CButton
          size="small"
          className={style.button}
          onClick={() => props.onChange(props.value - 1)}
        >
          -
        </CButton>
      </View>
    </FormItemContainer>
  );
};

type FormRenderProps = {
  onConfirm: () => void;
  onCancel: () => void;
  barcode: string;
};
const FormRender: React.FC<FormRenderProps> = (props) => {
  const [number, setNumber] = useState<number>(1);
  const [fee, setFee] = useState<number>(1);
  return (
    <View className={style.main}>
      <View className={style.tip}>出/入库</View>
      <View className={style.formWrapper}>
        <FormItem
          name="名称"
          placeHolder="请输入名称"
          value=""
          onChange={() => {}}
        />
        <FormNumberItem
          name="数量"
          placeHolder="请输入数量"
          value={number}
          onChange={setNumber}
        />
        <FormNumberItem
          name="单价"
          placeHolder="请输入价格"
          value={fee}
          onChange={setFee}
        />
        <FormItemContainer name="合计">
          <View className={style.input} style={{ border: "none" }}>
            {(fee * number).toFixed(2)}
          </View>
        </FormItemContainer>
        <BarcodeRender barcode={props.barcode} />
      </View>
      <View className={style.actionButtonsWrapper}>
        <CButton
          className={style.confirmButton}
          onClick={() => props.onConfirm()}
        >
          确认
        </CButton>
        <CButton
          className={style.cancelButton}
          onClick={() => props.onCancel()}
        >
          取消
        </CButton>
      </View>
    </View>
  );
};

export default FormRender;
