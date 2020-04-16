<template>
  <div class="jumbotron">
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
    <div class="text-right pt-4">更新時間：{{ newest.date }}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
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
    }
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
