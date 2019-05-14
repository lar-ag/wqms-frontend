import { set, toggle } from '@/utils/vuex'
/* eslint-disable indent */
export const updateDrawerState = (state, opened) => {
    state.drawerState = opened
}

export const toggleDrawer = (state) => {
  state.drawerState = !state.drawerState
}

export default {
  setDrawer : set('drawer'),
  toggleDrawer: toggle('drawer')
}
