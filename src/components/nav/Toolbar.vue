<template>
  <v-toolbar app clipped-left>
    <v-tab @click="toggleDrawer">
      <!-- <v-icon>fal fa-barcode</v-icon> -->
      <table>
        <tr>
          <td>
            <span class="body-2 ml-3 mr-5">
              <kbd>{{model}}</kbd>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="body-1 ml-3 mr-5">{{serial}}</span>
          </td>
        </tr>
      </table>
    </v-tab>
    <v-spacer></v-spacer>
    <v-tab
      v-for="(method,index) in methods"
      :key="index"
      v-bind:href="'/method/'+method.id"
    >{{method.name}}</v-tab>
    <v-tab v-if="countErrors" href="/errors">
      <v-badge v-if="warnings+criticals > 0" right :color="color">
        <span slot="badge">{{warnings+criticals}}</span>
        <span>Errors</span>
      </v-badge>
    </v-tab>
    <v-toolbar-items>
      <v-btn flat>Online</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapState({
      model: state => state.monitor.model,
      serial: state => state.monitor.serial,
      methods: state => state.methods.all,
      color: state => state.errors.color,
      criticals: state => state.errors.criticals,
      warnings: state => state.errors.warnings
    }),
    ...mapGetters("errors", ["countErrors"]),
    countError() {
      return this.$store.state.errors.all.length;
    }
  },
  methods: {
    ...mapMutations("app", ["toggleDrawer"])
  },
  created() {
    this.$store.dispatch("errors/check");
    this.$store.dispatch("methods/read");
  }
};
</script>

<style>
</style>
