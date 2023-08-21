<template>
  <q-layout view="hHh LpR fff">
  <HeaderAll/>
  <FooterAll/>
  </q-layout>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import HeaderAll from '../components/layout/HeaderAll.vue';
import FooterAll from '../components/layout/FooterAll.vue';
export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderAll,
    FooterAll
  },

  setup () {
    return {
      tab: ref('images'),

      }
  }
});
</script>
