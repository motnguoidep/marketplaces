<template>
  <q-header elevated class="mx-auto  fixed top-0 shadow-md lg:bg-opacity-80 bg-gray-50 z-20 px-5 font-semibold text-gray-600 transition-all w-full duration-500 backdrop-blur-md " height-hint="58">
      <q-toolbar>
          <img alt="Logo NetTruyen" src="//st.nettruyenmax.com/data/logos/logo-nettruyen.png">
        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-input dense outlined square v-model="search" placeholder="Search" class="bg-white col "  />
          <q-btn class="YL__toolbar-input-btn" color="grey-3" text-color="grey-8" icon="search" unelevated />
        </div>

        <q-space />


        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="log_in">
            <q-tooltip>Home</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="apps">
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="message">
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/page1" label="Home" />
        <q-route-tab to="/page2" label="Product" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>



  <q-page-container  style="background-color: #f8f8f8;">
    <router-view />
</q-page-container></template>

<script>

export default {

}
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.YL__toolbar-input-container{
  width: 60%;
}
</style>


<!-- <img alt="Logo NetTruyen" src="//st.nettruyenmax.com/data/logos/logo-nettruyen.png"> -->
