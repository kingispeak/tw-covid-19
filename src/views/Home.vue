<template>
  <div class="home">
    <h1>台灣新冠肺炎(COVID-19)疫情數據</h1>
    <p>
      台灣新冠肺炎(COVID-19，武漢肺炎)疫情截至{{ updateDate }}已經有
      <strong> {{ totalCase }} </strong>例。
    </p>
    <Chart :id="'chart'" :data="option" style="height: 350px;" />
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import json from '@/assets/Weekly_Age_County_Gender_19CoV.json';

export default {
  name: 'Home',
  data() {
    return {
      updateDate: '4月10日',
      json: json,
      option: null
    };
  },
  components: {
    Chart
  },
  computed: {
    totalCase() {
      return this.json.map(d => +d['確定病例數']).reduce((a, b) => a + b);
    }
  },
  mounted() {
    this.option = {
      title: {
        text: '',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      legend: {
        left: 'center',
        data: ['本年', '上年'],
        bottom: 0
      },
      xAxis: {
        type: 'category',
        name: 'x',
        splitLine: { show: false },
        data: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ]
      },
      grid: {
        left: '1%',
        right: '2%',
        bottom: '8%',
        containLabel: true
      },
      yAxis: {
        type: 'category',
        name: 'y',
        splitLine: { show: true },
        data: [
          '10%',
          '20%',
          '30%',
          '40%',
          '50%',
          '60%',
          '70%',
          '80%',
          '90%',
          '100%'
        ]
      },
      series: [
        {
          name: '本年',
          type: 'line',
          data: [
            0.8,
            0.98,
            0.96,
            0.27,
            0.81,
            0.47,
            0.74,
            0.23,
            0.69,
            0.25,
            0.36,
            0.56
          ]
        },
        {
          name: '上年',
          type: 'line',
          data: [
            1,
            0.2,
            0.4,
            0.8,
            0.16,
            0.32,
            0.64,
            1.28,
            5.6,
            0.25,
            0.63,
            0.65,
            0.12
          ]
        }
      ]
    };
  }
};
</script>
