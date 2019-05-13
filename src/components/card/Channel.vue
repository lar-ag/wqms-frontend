
<template>

    <!-- color="grey lighten-4" -->
<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-title>
      <v-icon
        :color="checking ? 'red lighten-2' : 'green'"
        class="mr-5"
        size="64"
        @click="takePulse"
      >
      fal fa-tachometer-slowest
      </v-icon>
      <v-layout
        column
        align-start
      >
        <div class="caption grey--text text-uppercase">
          {{name}}
        </div>
        <div>
          <span
            class="display-2 font-weight-black"
            v-text="avg || '—'"
          ></span>
          <strong v-if="avg">{{unit}}</strong>
        </div>
      </v-layout>

      <v-spacer></v-spacer>

      <v-btn icon class="align-self-start" size="28">
        <v-icon>fal fa-sliders-h</v-icon>
      </v-btn>
    </v-card-title>

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
  </v-card>
</template>

<script>
const exhale = ms =>
  new Promise(resolve => setTimeout(resolve, ms))

export default {
  data: () => ({
    checking: false,
    heartbeats: []
  }),
  props: {
    name: String,
    unit: String,
    value: Number,
  },
  computed: {
    avg () {
      const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0)
      const length = this.heartbeats.length

      if (!sum && !length) return 0

      return Math.ceil(sum / length)
    }
  },

  created () {
    this.takePulse(false)
  },

  methods: {
    heartbeat () {
      return Math.ceil(Math.random() * (120 - 80) + 80)
    },
    async takePulse (inhale = true) {
      this.checking = true

      inhale && await exhale(1000)

      this.heartbeats = Array.from({ length: 20 }, this.heartbeat)

      this.checking = false
    }
  }
};
</script>

<style>
</style>
