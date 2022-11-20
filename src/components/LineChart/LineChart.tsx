/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/19 23:14
 */
import { Component } from "react";
import { Canvas } from "@tarojs/components";
import Taro from "@tarojs/taro";
import uCharts from "@qiun/ucharts";
import { BaseEventOrig } from "@tarojs/components/types/common";

let uChartsInstance = {};

type StateType = {
  cWidth: number;
  cHeight: number;
  pixelRatio: number;
};

export default class LineChart extends Component<void, StateType> {
  constructor() {
    super();
    this.state = {
      cWidth: 750,
      cHeight: 500,
      pixelRatio: 1,
    };
  }

  componentDidMount() {
    const sysInfo = Taro.getSystemInfoSync();
    let pixelRatio = 1;
    //这里的第一个 750 对应 css .charts 的 width
    let cWidth = (750 / 750) * sysInfo.windowWidth;
    //这里的 500 对应 css .charts 的 height
    let cHeight = (500 / 750) * sysInfo.windowWidth;
    //注意：[支付宝小程序]如果需要在高 DPR（devicePixelRatio）下取得更细腻的显示，需要先将 canvas 用属性设置放大，用样式缩小，例如：
    // if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY){
    //   pixelRatio = sysInfo.pixelRatio;
    //   cWidth = cWidth * pixelRatio;
    //   cHeight = cHeight * pixelRatio;
    // }
    this.setState({ cWidth, cHeight, pixelRatio }, () => this.getServerData());
  }

  getServerData = () => {
    //模拟从服务器获取数据时的延时
    setTimeout(() => {
      //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
      let res = {
        categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
        series: [
          {
            name: "入库量",
            data: [35, 8, 25, 37, 4, 20],
          },
          {
            name: "出库量",
            data: [70, 40, 65, 100, 44, 68],
          },
        ],
      };
      this.drawCharts("LUhWMxqheDZFfLJlhoYdYeTyjbVhwuik", res);
    }, 500);
  };

  drawCharts = (id, data) => {
    const { cWidth, cHeight, pixelRatio } = this.state;
    let ctx = Taro.createCanvasContext(id);
    uChartsInstance[id] = new uCharts({
      type: "line",
      context: ctx,
      width: cWidth,
      height: cHeight,
      categories: data.categories,
      series: data.series,
      pixelRatio: pixelRatio,
      animation: true,
      background: "#FFFFFF",
      color: [
        "#1890FF",
        "#91CB74",
        "#FAC858",
        "#EE6666",
        "#73C0DE",
        "#3CA272",
        "#FC8452",
        "#9A60B4",
        "#ea7ccc",
      ],
      padding: [15, 10, 0, 15],
      enableScroll: true,
      legend: {},
      xAxis: {
        disableGrid: true,
        scrollShow: true,
        itemCount: 4,
      },
      yAxis: {
        gridType: "dash",
        dashLength: 2,
      },
      extra: {
        line: {
          type: "straight",
          width: 2,
        },
      },
    });
  };

  touchstart = (e) => {
    uChartsInstance[e.target.id].scrollStart(e);
  };

  touchmove = (e) => {
    uChartsInstance[e.target.id].scroll(e);
  };

  touchend = (e) => {
    uChartsInstance[e.target.id].scrollEnd(e);
    uChartsInstance[e.target.id].touchLegend(e);
    uChartsInstance[e.target.id].showToolTip(e);
  };

  onTap(e: BaseEventOrig) {
    const index = uChartsInstance[e.target.id].getCurrentDataIndex(e);
    console.log(index);
  }

  render() {
    return (
      <Canvas
        // {...canvasProps}
        canvas-id="LUhWMxqheDZFfLJlhoYdYeTyjbVhwuik"
        id="LUhWMxqheDZFfLJlhoYdYeTyjbVhwuik"
        className="charts"
        style={{
          width: "100%",
          height: "300px",
        }}
        onTap={this.onTap}
        onTouchStart={this.touchstart}
        onTouchMove={this.touchmove}
        onTouchEnd={this.touchend}
      />
    );
  }
}
