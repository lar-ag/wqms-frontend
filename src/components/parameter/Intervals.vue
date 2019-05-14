<template>
  <v-layout column wrap>
    <v-menu
      ref="menu"
      v-model="onlineMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="online"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
      header-color="blau"
    >
      <v-text-field
        slot="activator"
        v-model="online"
        label="Online"
        prepend-icon="access_time"
        readonly
      ></v-text-field>
      <v-time-picker v-if="onlineMenu" v-model="online" full-width></v-time-picker>
    </v-menu>
    <v-layout row>
      <span class="body-2 font-weight-black">Remote </span>
      <v-switch v-model="remote"></v-switch>
    </v-layout>
    <v-menu
      ref="menu"
      v-model="autocalMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="autocal"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
      header-color="blau"
    >
      <v-text-field
        slot="activator"
        v-model="autocal"
        label="Auto calibration"
        prepend-icon="access_time"
        readonly
      ></v-text-field>
      <v-time-picker
        v-if="autocalMenu"
        v-model="autocal"
        full-width
        @click:minute="$refs.menu.save(autocal)"
      ></v-time-picker>
    </v-menu>
    <v-menu
      ref="menu"
      v-model="checkMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="check"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
      header-color="blau"
    >
      <v-text-field
        slot="activator"
        v-model="check"
        label="Check function"
        prepend-icon="access_time"
        readonly
      ></v-text-field>
      <v-time-picker
        v-if="checkMenu"
        v-model="check"
        full-width
        @click:minute="$refs.menu.save(check)"
      ></v-time-picker>
    </v-menu>
  </v-layout>
</template>



<script>
export default {
  props: {
    id: String
  },
  data() {
    return {
      online: null,
      onlineMenu: false,
      remote: false,
      check: null,
      checkMenu: false,
      autocal: null,
      autocalMenu: false
    };
  }
};
</script>
