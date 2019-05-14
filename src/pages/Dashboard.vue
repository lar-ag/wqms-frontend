<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-4" v-for="n in 5" :key="`sm-${n}`">
        <div class="my-content">&nbsp;</div>
      </div>
    </div>
    <!-- content -->
  </q-page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  data () {
    return {
      msg: "",
    }
  },
  computed: mapState({
    streams: state => state.streams.all,
    dashboard: state => state.ui.dashboard
  })
}
</script>

<style>
  .dashboard-card {
    width: 100%;
    max-width: 250px;
  }
</style>
