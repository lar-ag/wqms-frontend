<template>
  <div>
    <v-card :color="color">
      <v-card-title>
        <div class="caption">input flow :</div>
        <span class="body-2">{{insignal}} l/h</span>
        <v-progress-linear color="cyan darken-3" :value="insignal" height="7"></v-progress-linear>
        <div class="caption">output flow :</div>
        <span class="body-2">{{outsignal}} l/h</span>
        <v-progress-linear color="cyan darken-3" :value="outsignal" height="7"></v-progress-linear>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outline color="accent">
          <v-icon small left>fal fa-sliders-h</v-icon>
          <div class="caption text-uppercase">air flow</div>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      show : false,
    };
  },
  created() {
    this.$store.dispatch("airflow/readInput");
    this.$store.dispatch("airflow/readOutput");
  },
  computed: {
    ...mapState({
      // output: state => state.airflow.output,
      insignal: state => (state.airflow.input.signal / 60.0) * 100.0,
      outsignal: state => (state.airflow.output.signal / 60.0) * 100.0,
      color: state => {
        if (state.airflow.error > 0) {
          return "red";
        } else {
          return "";
        }
      }
    })
  },
  methods: {
    ...mapMutations("airflow", ["toggleSettings"])
  }
};
</script>

<style>
</style>
