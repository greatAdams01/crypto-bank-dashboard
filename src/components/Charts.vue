<template>
  <DashLayout></DashLayout>
  <div>
    <div class="my-4">
      <h1>Wallet</h1>
      <div class="line"></div>
    </div>
    <Chart
      :size="{ width: 1000, height: 420 }"
      :data="data"
      :margin="margin"
      :direction="direction"
    >
      <template #layers>
        <Grid strokeDasharray="2,2" />
        <Line :dataKeys="['name', 'pl']" />
      </template>
    </Chart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Chart, Grid, Line } from "vue3-charts";
const plByMonth = [
  { name: "Jan", pl: 1000, avg: 500, inc: 300 },
  { name: "Feb", pl: 2000, avg: 900, inc: 400 },
  { name: "Apr", pl: 400, avg: 400, inc: 500 },
  { name: "Mar", pl: 3100, avg: 1300, inc: 700 },
  { name: "May", pl: 200, avg: 100, inc: 200 },
  { name: "Jun", pl: 600, avg: 400, inc: 300 },
  { name: "Jul", pl: 500, avg: 90, inc: 100 },
];

export default defineComponent({
  name: "LineChart",
  components: { Chart, Grid, Line },
  setup() {
    const data = ref(plByMonth);
    const direction = ref("horizontal");
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    });

    return { data, direction, margin };
  },
});
</script>

<style scoped>
#app {
  color: #2ecc71;
}
h1{
  font-size: 25px;
  font-weight: 700;
}
.line{
  background-color: #2D87BF;
  width: 60px;
  height: 3px;
  border-radius: 10px;
  margin-left: 10px;
}
</style>