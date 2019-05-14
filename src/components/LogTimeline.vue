<template>
    <q-card class="LogTimeline">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card>
</template>

<script>
// import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      show : false,
    };
  },
  created() {
    // this.$store.dispatch("airflow/readInput");
    // this.$store.dispatch("airflow/readOutput");
  },
  computed: {
    // ...mapState({
      // output: state => state.airflow.output,
      // insignal: state => (state.airflow.input.signal / 60.0) * 100.0,
      // outsignal: state => (state.airflow.output.signal / 60.0) * 100.0,
      // color: state => {
        // if (state.airflow.error > 0) {
          // return "red";
        // } else {
          // return "";
        // }
      // }
    // })
  },
  methods: {
    // ...mapMutations("airflow", ["toggleSettings"])
  }
};
</script>

<style>
</style>
