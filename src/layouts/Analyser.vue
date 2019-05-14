<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              <q-icon name="far fa-robot"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>QuickTOCuv</q-item-label>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                <q-icon name="far fa-money-check" size="14px" style="padding: 3px;"/>
                UV1906001
              </q-badge>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-space/>
        <q-tabs v-model="tab">
          <q-route-tab
            v-for="(stream,number) in streams"
            :key="number"
            :name="stream.name"
            :label="stream.name"
            :to="'/stream/' +number"
          ></q-route-tab>
          <q-separator vertical/>
          <q-route-tab name="signals" label="Signals" to="/signals"/>
          <q-route-tab name="dashboard" label="Status" to="/dashboard"/>
        </q-tabs>
      </q-toolbar>
    </q-header>
    <!-- (Optional) The Footer -->
    <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab"/>
        <q-route-tab icon="assignment" to="/some/other/route" replace label="Other Tab"/>
      </q-tabs>
    </q-footer>
    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer :v-model="inputValue" bordered>
      <!-- <q-scroll-area style="height: calc(100% - 150px);border-right: 1px solid #ddd"> -->
      <q-list bordered padding>
        <q-item clickable v-ripple to="/dashboard" exact active-class="active-menu-link">
          <q-item-section avatar>
            <q-icon name="fal fa-tachometer-average"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{this.$i18n.t('dashboard.label')}}</q-item-label>
            <q-item-label caption lines="2">{{this.$i18n.t('dashboard.description')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/archiv" exact active-class="active-menu-link">
          <q-item-section avatar>
            <q-icon name="fal fa-database"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{this.$i18n.t('archiv.label')}}</q-item-label>
            <q-item-label caption lines="2">{{this.$i18n.t('archiv.description')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/logbook" exact active-class="active-menu-link">
          <q-item-section avatar>
            <q-icon name="far fa-barcode-read"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{this.$i18n.t('logbook.label')}}</q-item-label>
            <q-item-label caption lines="2">{{this.$i18n.t('logbook.description')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-ripple to="/service" exact active-class="active-menu-link">
          <q-item-section avatar>
            <q-icon name="far fa-barcode-read"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{this.$i18n.t('service.label')}}</q-item-label>
            <q-item-label caption lines="2">{{this.$i18n.t('service.description')}}</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable v-ripple to="/settings" exact active-class="active-menu-link">
          <q-item-section avatar>
            <q-icon name="far fa-barcode-read"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{this.$i18n.t('settings.label')}}</q-item-label>
            <q-item-label caption lines="2">{{this.$i18n.t('settings.description')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-ripple to="/manual" exact active-class="active-menu-link">
          <q-item-section avatar>
            <q-icon name="far fa-barcode-read"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{this.$i18n.t('documentation.label')}}</q-item-label>
            <q-item-label caption lines="2">{{this.$i18n.t('documentation.description')}}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-badge color="primary">doc v1.0.0+</q-badge>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/packages" exact active-class="active-menu-link">
          <q-item-section avatar>
            <q-icon name="far fa-barcode-read"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{this.$i18n.t('packagemanager.label')}}</q-item-label>
            <q-item-label caption lines="2">{{this.$i18n.t('packagemanager.description')}}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-badge color="primary">app v1.0.0+</q-badge>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/poweroff" exact active-class="active-menu-link">
          <q-item-section avatar>
            <q-icon name="far fa-toggle-off"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{this.$i18n.t('poweroff.label')}}</q-item-label>
            <q-item-label caption lines="2">{{this.$i18n.t('poweroff.description')}}</q-item-label>
          </q-item-section>
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
      <q-route-tab name="daschboard" icon="mail" label="Status" to="/uv" exact/>-->
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
import { mapState } from "vuex";

export default {
  name: "Analyzer",
  data() {
    return {
      tab: "",
      menu: ""
    };
  },
  computed: {
    ...mapState({
      streams: state => state.streams.all,
      menuList: state => state.ui.menuList
    }),
    inputValue: {
      get () {
        return this.$store.state.ui.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
  },
  created() {
    this.$store.dispatch("streams/fetchAll");
  },
  methods: {
    // ...mapMutations({
      // toogleDrawer: "ui/toggleDrawer"
    // })
  }
};
</script>

<style lang="stylus">
  .active-menu-link
    background $accent
</style>
