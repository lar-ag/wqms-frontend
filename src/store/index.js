import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import analyser from './analyser'
import streams from './streams'
import airflow from './airflow'
import humidity from './humidity'
import pressure from './pressure'
import uvlamp from './uvlamp'
import channels from './channels'
import sensors from './sensors'
import autosampler from './autosampler'

import ui from './ui'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      ui,
      analyser,
      streams,
      sensors,
      airflow,
      humidity,
      pressure,
      uvlamp,
      autosampler,
      channels
  },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
