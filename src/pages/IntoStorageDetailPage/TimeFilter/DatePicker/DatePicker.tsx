/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/20 02:38
 */
import React, { useState } from "react";
import { PickerView, PickerViewColumn, View } from "@tarojs/components";

const startYear = 2022;

/// 改动等级
enum ChangeLevel {
  YEAR,
  MONTH,
  DAY,
}
const getYears = (): number[] => {
  const currentYear = new Date().getFullYear();
  return Array.from(
    Array(currentYear + 1 - startYear),
    (_, i) => startYear + i
  );
};
const getMonths = (): number[] => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const getDaysByYearMonth = (props: { year: number; month: number }) => {
  const days31 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const dateTimeStr =
    props.month == 11
      ? `${props.year + 1}-1-1 00:00:00`
      : `${props.year}-${props.month + 2}-1 00:00:00`;
  const currentLastDay = new Date(
    new Date(dateTimeStr).getTime() - 1000
  ).getDate();
  return days31.slice(0, currentLastDay);
};

const DatePicker: React.FC = () => {
  const [value, setValue] = useState<[number, number, number]>([0, 0, 0]);
  const [years] = useState<number[]>(getYears());
  const [months] = useState<number[]>(getMonths());
  const [days, setDays] = useState<number[]>(
    getDaysByYearMonth({ year: years[value[0]], month: months[value[1]] })
  );
  const onChange = (newValue: number[]): void => {
    let changeLevel: ChangeLevel | undefined;
    if (newValue[0] !== value[0]) {
      changeLevel = ChangeLevel.YEAR;
    } else if (newValue[1] !== value[1]) {
      changeLevel = ChangeLevel.MONTH;
    } else if (newValue[2] !== value[2]) {
      changeLevel = ChangeLevel.DAY;
    }
    if (changeLevel != undefined) {
      const result: [number, number, number] = [
        newValue[0],
        newValue[1],
        newValue[2],
      ];
      const onChangeDay = () => {
        const newDays = getDaysByYearMonth({
          year: years[result[0]],
          month: months[result[1]],
        });
        setDays(newDays);
      };
      const onChangeMonth = () => {
        result[2] = 0; // 重置日期并更新日期
        onChangeDay();
      };
      const onChangeYear = () => {
        // 重置月份并更新月份
        result[1] = 0;
        onChangeMonth();
      };
      switch (changeLevel) {
        case ChangeLevel.YEAR:
          onChangeYear();
          break;
        case ChangeLevel.MONTH:
          onChangeMonth();
          break;
        case ChangeLevel.DAY:
          onChangeDay();
          break;
      }
      setValue(result);
    } else {
      return;
    }
  };
  return (
    <>
      <PickerView
        indicatorStyle="height: 40px;"
        style="width: 100%; height: 300px;"
        value={value}
        onChange={(e) => onChange(e.detail.value)}
      >
        <PickerViewColumn>
          {years.map((item) => {
            return <View key={item}>{item}年</View>;
          })}
        </PickerViewColumn>
        <PickerViewColumn>
          {months.map((item) => {
            return <View key={item}>{item + 1}月</View>;
          })}
        </PickerViewColumn>
        <PickerViewColumn>
          {days.map((item) => {
            return <View key={item}>{item}日</View>;
          })}
        </PickerViewColumn>
      </PickerView>
    </>
  );
};

export default DatePicker;
