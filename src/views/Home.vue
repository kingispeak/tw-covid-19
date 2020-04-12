<template>
  <div class="home">
    <h1>台灣新冠肺炎(COVID-19)疫情數據</h1>
    <p>
      台灣新冠肺炎(COVID-19，武漢肺炎)疫情截至{{ updateDate }}已經有
      <strong> {{ totalCase }} </strong>例。
    </p>
    <Chart :id="'chart1'" :data="option1" style="height: 350px;" />
    <Chart :id="'chart2'" :data="option2" style="height: 350px;" />
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import json from '@/assets/Weekly_Age_County_Gender_19CoV.json';

export default {
  name: 'Home',
  data() {
    return {
      updateDate: '4月12日',
      json: json,
      option1: null,
      option2: null
    };
  },
  components: {
    Chart
  },
  computed: {
    totalCase() {
      return this.json.map(d => +d['確定病例數']).reduce((a, b) => a + b);
    },
    weeklyCases() {
      return this.json.reduce((r, a) => {
        const total =
          typeof r[a['診斷週別']] === 'undefined'
            ? +a['確定病例數']
            : r[a['診斷週別']] + +a['確定病例數'];
        r[a['診斷週別']] = total;
        return r;
      }, {});
    },
    sourceCases() {
      return this.json.reduce((r, a) => {
        const total =
          typeof r[a['是否為境外移入']] === 'undefined'
            ? +a['確定病例數']
            : r[a['是否為境外移入']] + +a['確定病例數'];
        r[a['是否為境外移入']] = total;
        return r;
      }, {});
    },
    sourceData() {
      return Object.keys(this.sourceCases).map(key => {
        return {
          value: this.sourceCases[key],
          name: key === '是' ? '境外移入' : '本土案例'
        };
      });
    }
  },
  mounted() {
    this.option1 = {
      title: {
        text: '每週確診人數',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>第{b}週 : {c}人'
      },
      legend: {
        left: 'center',
        data: ['確診人數'],
        bottom: 0
      },
      xAxis: {
        type: 'category',
        name: '週',
        splitLine: { show: false },
        data: Object.keys(this.weeklyCases)
      },
      yAxis: {
        type: 'value',
        name: '人數'
      },
      series: [
        {
          name: '確診人數',
          type: 'line',
          data: Object.values(this.weeklyCases)
        }
      ]
    };

    this.option2 = {
      title: {
        text: '案例來源',
        left: 'center',
        top: 30
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}人 ({d}%)'
      },
      legend: {
        left: 'center',
        data: ['境外移入', '本土案例'],
        bottom: 0
      },
      series: [
        {
          name: '來源',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: this.sourceData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
};
</script>