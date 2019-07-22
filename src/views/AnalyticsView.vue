<template>
  <div class="analytics-view__wrapper">
    <section class="focus__block">
      <div class="block__header">
        <h2 class="block__title">FOCUS TIME</h2>
      </div>
      <div class="block__body">
        <div class="today-count"></div>
        <div class="week-count"></div>
      </div>
    </section>
    <section class="chart__block">
      <div class="block__header">
        <h2 class="block__title">CHART</h2>
      </div>
      <div class="block__body">
        <tomato-chart />
      </div>
    </section>
  </div>
</template>

<script>
import TomatoChart from '../components/ClockChart.vue';

export default {
  components: { TomatoChart },
  data: () => ({
  }),
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.analytics-view__wrapper {
  width: 100%;
  height: 100%;
  background-color: #003164;
  padding: 48px 10%;
  display: flex;
  // align-items: center;
  flex-direction: column;
  justify-content: space-between;
  .focus__block {
    flex: 0 0 160px;
    padding: 0 20px;
    max-width: 445px;
  }
  .chart__block {
    flex: 0 0 160px;
    padding: 0 20px;
    max-width: 445px;
    .block__body {
      // height: 100px;
    }
  }
  .block__header {
    flex: 0 0 40px;
    display: flex;
    padding: 10px;
    color: #FF4384;
    background-color: #225385;
    margin-bottom: 20px;
    text-indent: 5px;
    .block__title {
      flex: 1;
    }
  }
}
</style>


