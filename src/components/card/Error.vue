
<template>
  <!-- color="grey lighten-4" -->
  <v-card min-width="200" color="red" class="white--text">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{name}}</div>
        <span class="subheading">{{description}}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat dark>More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    errnumber: {
      type: Number,
      default: 1
    },
    description: {
      type: String,
      default: "Unknown error"
    },
    critical: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  computed: {
    // color: () => {
    //   if (this.critical) {
    //     return "error";
    //   } else {
    //     return "warning";
    //   }
    // },
    name: () => {
      return "E" + 1835;
    }
  }
};
</script>

<style>

</style>
