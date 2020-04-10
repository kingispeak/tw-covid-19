<template>
  <div class="home">
    <h1>台灣新冠肺炎(COVID-19)疫情數據</h1>
    <Chart />
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';

export default {
  name: 'Home',
  components: {
    Chart
  }
};
</script>
