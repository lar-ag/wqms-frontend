<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              <q-icon name="dvr"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>QuickTOCuv</q-item-label>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                UV1906001
              <q-icon name="fas fa-exclamation-triangle" size="14px" class="q-ml-xs"/>
              </q-badge>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-space />
        <q-tabs v-model="tab">
          <q-route-tab
            v-for="(stream,number) in streams"
            :key="number"
            :name="stream.name"
            :label="stream.name"
            :to="'/uv/stream/' +number"
          >
          </q-route-tab>
          <q-separator vertical />

          <q-route-tab name="tab1" label="Status" to="/uv/dashboard"/>
        </q-tabs>
      </q-toolbar>
    </q-header>
    <!-- (Optional) The Footer -->
    <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab"/>
        <q-route-tab icon="assignment" to="/some/other/route" replace label="Other Tab"/>
      </q-tabs>

      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer"/>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="drawerState" side="left" bordered>
       <!-- <q-scroll-area style="height: calc(100% - 150px);border-right: 1px solid #ddd"> -->
        <q-list bordered padding >
          <q-item v-for="(item,index) in menuList"
            clickable
            v-ripple
            :key="index"
            :to="item.link" exact
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>{{item.label}}</q-item-section>
          </q-item>
        </q-list>

      <!-- <q-tabs v-model="menu" vertical inline-label align="left" dense class="text-teal">
        <q-route-tab

            align="left"

            :name="item.name"
            :icon="item.icon"
            :label="item.label"
            :to="item.link"
          />
        <q-route-tab name="daschboard" icon="mail" label="Status" to="/uv" exact/> -->
      <!-- </q-tabs> -->
      <!--
       <q-list v-for="(menuItem, index) in menuList" :key="index">

            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          <q-separator v-if="menuItem.separator" />
      </q-list>-->
      <!-- </q-scroll-area> -->
      <!-- QScrollArea is optional -->
      <!-- <q-scroll-area class="fit q-pa-sm"> -->
      <!-- Content here -->
      <!-- </q-scroll-area> -->
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UvLayout',
  data () {
    return {
      tab: '',
      menu: ''
    }
  },
  computed: mapState({
    streams: state => state.streams.all,
    drawerState: state => state.ui.drawerState,
    menuList: state => state.ui.menuList
  }),
  created () {
    this.$store.dispatch('streams/fetchAll')
  }
}
</script>

<style lang="stylus">
  .my-menu-link
    color white
    background #F2C037
</style>
