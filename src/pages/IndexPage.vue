<template>
    <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      v-model:fullscreen="fullscreen"
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
    <q-page-container class="menu" style="padding-left: 0px;">

      <div class="row">
        <div class="q-gutter-sm">
        <q-card class="item-book col-fourth my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
         lorem
      </q-card-section>
        </q-card>
        <q-card class="item-book col-fourth my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
          lorem
          </q-card-section>
        </q-card>
        <q-card class="item-book col-fourth my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            lorem
          </q-card-section>
        </q-card>
        <q-card class="item-book col-fourth my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" style="width: 100%;">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            lorem
          </q-card-section>
        </q-card>
      </div>
      </div>
      <q-page-scroller position="bottom">
            <q-btn fab icon="keyboard_arrow_up" color="red" />
      </q-page-scroller>

    </q-page-container>
</template>

<script lang="ts">
// import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent} from 'vue';

import { ref } from 'vue'
export default defineComponent(
{
  setup () {
    return {
      slide: ref(1),
      fullscreen: ref(false)
    }
  }

});
</script>
<style>
*{
  box-sizing: border-box;
}
.menu{
  height: 2400px;
  margin-left: 300px;
  margin-right: 300px;
  padding: 15px ;
}
.row{
  display: flex;
}
.my-card{
  width: 100%;

}
.item-book{
    float: left;
    padding-left:  4px;
    padding-right: 4px;

}
.col-fourth{
    width: 24%;
}


</style>
