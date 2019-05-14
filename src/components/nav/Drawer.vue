<template>
  <v-navigation-drawer v-model="isVisible" fixed clipped class="grey lighten-4" app>
    <v-list dense class="grey lighten-4">
      <template v-for="(item, i) in items">
        <v-layout v-if="item.heading" :key="i" row align-center>
          <v-flex xs6>
            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-right">
            <v-btn small flat>edit</v-btn>
          </v-flex>
        </v-layout>
        <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
        <v-list-tile v-else :key="i" :href="item.href" @click="goto">
          <v-list-tile-action>
            <v-badge v-if="item.couter > 0" right>
              <span slot="badge">{item.counter}</span>
              <v-icon>{{ item.icon }}</v-icon>
            </v-badge>
            <v-icon v-else>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text">{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    items: [
      { icon: "fal fa-tachometer-average", text: "Status", href: "/" },
      { icon: "fal fa-clipboard-list", text: "Log book", href: "/log" },
      { icon: "fal fa-database", text: "Archive", href: "/archive" },
      { divider: true },
      { icon: "far fa-sliders-h-square", text: "Settings", href: "/settings" },
      { icon: "far fa-tools", text: "Service", href: "/service" },
      { icon: "far fa-microchip", text: "Multi IO", href: "/mio" },
      { icon: "far fa-tablet", text: "PC Settings", href: "/pc" },
      { divider: true },
      {
        badge: true,
        icon: "far fa-cloud-download",
        text: "Update",
        href: "/update",
        counter: 4
      },
      {
        badge: true,
        icon: "far fa-barcode",
        text: "License",
        href: "/license",
        counter: 4
      },
      { divider: true },
      { icon: "far fa-question-square", text: "Help", href: "/help" },
      { icon: "far fa-code-branch", text: "Dev flow", href: "/flow" },
      { divider: true },
      {
        action: true,
        icon: "far fa-toggle-off",
        text: "Power off",
        callback: () => {
          this.poweroff();
        }
      },
      { icon: "far fa-question-square", text: "All", href: "/help" }
    ]
  }),
  computed: {
    isVisible: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },

  methods: {
    ...mapMutations("app", ["setDrawer"]),
    goto() {}
  }
};
</script>

<style scoped>
.hello {
  padding: 20px;
  font-size: 32px;
  color: #666;
  line-height: 56px;
}

.hello h1 {
  color: #333;
  line-height: 1.15;
  font-size: 64px;
  margin-bottom: 32px;
}

.hello h1 span {
  position: relative;
}

.hello h1 span::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 8px;
  width: 100%;
  height: 20px;
  background: #ecf6ff;
}
</style>
