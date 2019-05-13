<template>
  <v-card>
    <v-card-title>
      <v-layout id="value" row align-start>
        <div class="justify-center row layout ma-0">
          <v-progress-circular
            :size="120"
            :width="8"
            :rotate="-90"
            :value="status.lifetime"
            :color="color"
          >
            <div class="caption text-uppercase">{{circleText}}</div>
          </v-progress-circular>
        </div>
        <v-icon large left>{{icon}}</v-icon>
      </v-layout>
    </v-card-title>
    <v-card-actions>
      <div class="caption">UV Lamp lifitime: 2 hour</div>
      <v-spacer></v-spacer>
      <v-btn outline color="accent">
        <v-icon small left>fal fa-sliders-h</v-icon>
        <div class="caption text-uppercase">action</div>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
// Glyph 
//  
export default {
  data: () => ({
    lampstate: ["fal fa-lightbulb-slash"]
  }),
  props: {
    title: {
      type: String,
      default: "UV Lamp"
    },
    subTitle: {
      type: String,
      default: "lifiline"
    }
  },
  computed: mapState({
    status: state => state.uvlamp.status,
    color: state => {
      if (state.uvlamp.status.lifetime < 20.0) {
        return "yellow lighten-1";
      }
      if (state.uvlamp.status.lifetime < 50.0) {
        return "red lighten-1";
      }
      return "green lighten-1";
    },
    circleText: state => {
      return state.uvlamp.status.lifetime + " %";
    },
    icon: state => {
      if (state.uvlamp.status.lighting) {
        return "fal fa-lightbulb-on";
      }
      return "fal fa-lightbulb";
    }
  })
};
</script>

<style>
</style>