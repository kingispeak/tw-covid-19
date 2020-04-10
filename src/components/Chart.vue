<template>
  <div v-bind:id="id"></div>
</template>

<script>
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
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.setOption(data);
      window.addEventListener('resize', () => {
        this.chart.resize();
      });
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
