
<template>
  <!-- color="grey lighten-4" -->
  <v-card>
    <v-responsive>
      <vueper-slides class="no-shadow" bullets-outside>
        <v-icon slot="arrowLeft">fal fa-angle-left</v-icon>
        <v-icon slot="arrowRight">fal fa-angle-right</v-icon>
        <vueper-slide v-for="(channel, i) in getMethodChannels" :key="i">
          <div slot="slideContent">
            <v-layout>
              <div>
                <div class="caption grey--text text-uppercase">{{channel.name}}</div>
                <span class="display-2 font-weight-black" v-text="channel.result"></span>
                <strong>{{unit}}</strong>
                <v-spacer></v-spacer>
                <v-sheet color="transparent">
                  <v-sparkline
                    :smooth="16"
                    :gradient="['#089177']"
                    :line-width="2"
                    :key="String(avg)"
                    :value="heartbeats"
                    auto-draw
                    stroke-linecap="round"
                  ></v-sparkline>
                </v-sheet>
              </div>
            </v-layout>
          </div>
        </vueper-slide>
      </vueper-slides>
    </v-responsive>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outline color="accent">
        <v-icon small left>fal fa-sliders-h</v-icon>
        <div class="caption text-uppercase">{{name}}</div>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// In your VueJS component.
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.min.css";
import { mapState } from "vuex";

const exhale = ms => new Promise(resolve => setTimeout(resolve, ms));


export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    checking: false,
    model: []
    // heartbeats: [],
    // select: ["Vuetify", "Programming"],
    // items: ["Programming", "Design", "Vue", "Vuetify"]
  }),
  props: {
    id: {
      type: String,
      default: "tc"
    },
    name: {
      type: String,
      default: "unknown"
    },
    unit: String
  },
  created() {
    this.takePulse(false);
  },
  computed: {
    ...mapState({
      getMethodChannels(state) {
        return state.channels.all
          ? state.channels.all.filter(ch => ch.method == this.id)
          : [];
      }
    }),
    avg() {
      const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0);
      const length = this.heartbeats.length;

      if (!sum && !length) return 0;

      return Math.ceil(sum / length);
    }
  },
  methods: {
    heartbeat() {
      return Math.ceil(Math.random() * (120 - 80) + 80);
    },
    async takePulse(inhale = true) {
      this.checking = true;

      inhale && (await exhale(1000));

      this.heartbeats = Array.from({ length: 20 }, this.heartbeat);

      this.checking = false;
    }
  }
};
</script>

<style>
.vueperslides__bullet {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active {
  background-color: #ff5252;
}

.vueperslides__bullet span {
  display: block;
  color: #ffffff;
  font-size: 10px;
  opacity: 0.8;
}
</style>
