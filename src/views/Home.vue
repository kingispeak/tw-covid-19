<template>
  <div class="wrap">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <img class="pr-2" src="https://www.countryflags.io/TW/flat/48.png" alt="Taiwan" />
          <h1 class="display-5">台灣新冠肺炎(COVID-19)疫情數據</h1>
        </div>
        <p class="lead text-center my-4">
          台灣新冠肺炎(COVID-19，武漢肺炎) 疫情截至
          {{ newest.date }} 已經有
          <strong>{{ newest.confirmed }}</strong>例
        </p>
        <hr class="my-4" />
        <div class="row text-center">
          <div class="col-md-6 col-lg-3">
            <div class="card border-warning text-warning p-3">
              <div class="mt-3">
                <h4>😷 國內確診</h4>
              </div>
              <div class="mt-2">
                <h3 class="h1">{{ newest.confirmed }}</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card border-info text-info p-3">
              <div class="mt-3">
                <h4>🤒 今日新增</h4>
              </div>
              <div class="mt-2">
                <h3 class="h1">{{ todayCase }}</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card border-success text-success p-3">
              <div class="mt-3">
                <h4>❤️ 解除隔離</h4>
              </div>
              <div class="mt-2">
                <h3 class="h1">{{ newest.recovered }}</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card border-danger text-danger p-3">
              <div class="mt-3">
                <h4>☹️ 死亡人數</h4>
              </div>
              <div class="mt-2">
                <h3 class="h1">{{ newest.deaths }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="text-center">數據視覺化</h2>
      <Chart :id="'chart1'" :data="option1" style="height: 350px;" />
      <Chart :id="'chart2'" :data="option2" style="height: 350px;" />
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import json from '@/assets/Weekly_Age_County_Gender_19CoV.json';

export default {
  name: 'Home',
  data() {
    return {
      json: json,
      option1: null,
      option2: null
    };
  },
  components: {
    Chart
  },
  computed: {
    newest() {
      return this.$store.state.report.report[
        this.$store.state.report.report.length - 1
      ];
    },
    todayCase() {
      let yesterday = this.$store.state.report.report[
        this.$store.state.report.report.length - 2
      ];
      return this.newest.confirmed - yesterday.confirmed;
    },
    totalCase() {
      return this.json.map(d => +d['確定病例數']).reduce((a, b) => a + b);
    },
    weeklyCases() {
      return this.json.reduce((r, a) => {
        const total =
          typeof r[a['發病週別']] === 'undefined'
            ? +a['確定病例數']
            : r[a['發病週別']] + +a['確定病例數'];
        r[a['發病週別']] = total;
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

<style scoped lang="scss">
.card {
  @include bounceIn(
    $duration: 1s,
    $count: 1,
    $delay: 0.2s,
    $function: ease,
    $fill: both
  );
}
</style>
