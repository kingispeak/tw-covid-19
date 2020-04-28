<template>
  <div v-bind:id="id"></div>
</template>

<script>
// import echarts from 'echarts';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import debounce from 'lodash/debounce';

export default {
  name: 'Chart',
  props: ['id', 'data'],
  data() {
    return {
      chart: null
    };
  },
  methods: {
    drwaChart(data) {
      this.chart = echarts.init(document.getElementById(this.id));
      this.setOption(data);
      window.addEventListener(
        'resize',
        debounce(() => {
          this.chart.resize();
        }, 1000)
      );
    },
    setOption(data) {
      this.chart.setOption(data);
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    window.removeEventListener('resize', () => {
      this.chart.clear();
      this.chart = null;
    });
  },
  watch: {
    data: {
      handler(newVal, oldVal) {
        if (this.chart) {
          if (newVal) {
            this.setOption(newVal);
          } else {
            this.setOption(oldVal);
          }
        } else {
          this.drwaChart(this.data);
        }
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss"></style>
