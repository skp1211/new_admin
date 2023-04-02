<template>
  <el-card class="introduce" shadow="always">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">
          <template #header>
            <div class="card-header">
              <span>今日订单数</span>
            </div>
          </template>
          <div class="item">1888</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <template #header>
            <div class="card-header">
              <span>今日日活</span>
            </div>
          </template>
          <div class="item">9876</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <template #header>
            <div class="card-header">
              <span>转化率</span>
            </div>
          </template>
          <div class="item">20%</div>
        </el-card>
      </el-col>
    </el-row>
    <div id='zoom'></div>
  </el-card>
</template>

<script setup>
// import * as echarts from 'echarts';
// 引入echarts
import echarts from "../echarts/echarts";
import { onMounted, onUnmounted, ref, provide } from "vue";
let myChart = null;
onMounted(() => {
  // window.echarts
  if (true) {
    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.getElementById("zoom"));
    // 指定图表的配置项和数据
    const option = {
      title: {
        text: "数据折线图",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        data: ["新增注册", "付费用户", "活跃用户", "订单数", "当日总收入"],
      },
      toolbox: {
        feature: {
          saveAsImage: {
            title: "保存图表",
          },
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: [
            "2021-03-11",
            "2021-03-12",
            "2021-03-13",
            "2021-03-14",
            "2021-03-15",
            "2021-03-16",
            "2021-03-17",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "新增注册",
          type: "line",
          stack: "总量",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "付费用户",
          type: "line",
          stack: "总量",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "活跃用户",
          type: "line",
          stack: "总量",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "订单数",
          type: "line",
          stack: "总量",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "当日总收入",
          type: "line",
          stack: "总量",
          label: {
            show: true,
            position: "top",
          },
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    option && myChart.setOption(option);


  }
});
onUnmounted(() => {
  myChart.dispose();
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    machart.resize();
  });
});
</script>
<style>
#zoom {
  flex: auto;
  margin-top: 20px;
}

.introduce {
  height: 100%;
  box-sizing: border-box;
}

.introduce .el-card__body {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>