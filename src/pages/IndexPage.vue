<template>
  <!-- <q-carousel
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
    </q-carousel> -->
  <q-page-container class="menu">

    <div class="container mx-auto ">
      <main class="grid grid-cols-1  lg:grid-cols-5 justify-center items-center gap-2 mt-8 container ">
        <div class="row">
          <div class="col lg:block bg-white shadow-md  p-5 text-base rounded  h-full w-full">
            <h3 class="mb-3 font-medium text-emerald-500 hover:text-blue-500 cursor-pointer">Nổi bật</h3>
            <ul><a href="/minigame/wheel1">
                <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer"><img
                    class="max-w-[20px] object-scale-down mr-2 "
                    src="https://salt.tikicdn.com/cache/100x100/ts/upload/cb/64/f7/0ebb0ae297f052e34a8161c9bf8efb96.png.webp"
                    alt="">Astra Reward</li>
              </a><a href="/products">
                <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer"><img
                    class="max-w-[20px] object-scale-down mr-2 "
                    src="https://salt.tikicdn.com/cache/100x100/ts/upload/ae/72/a3/d4503c3ece932dc8c57d2d5c97cd6ffc.png.webp"
                    alt="">Cheap every day</li>
              </a><a href="/products">
                <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer"><img
                    class="max-w-[20px] object-scale-down mr-2 "
                    src="https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp"
                    alt="">Discharge</li>
              </a><a href="/minigame/wheel2">
                <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer"><img
                    class="max-w-[20px] object-scale-down mr-2 "
                    src="https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp"
                    alt="">Discount code</li>
              </a><a href="/minigame/wheel2">
                <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer"><img
                    class="max-w-[20px] object-scale-down mr-2 "
                    src="https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp"
                    alt="">Preferential wallet cards</li>
              </a><a href="/minigame/bingo">
                <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer"><img
                    class="max-w-[20px] object-scale-down mr-2 "
                    src="https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp"
                    alt="">Buy in advance</li>
              </a><a href="/minigame/dice">
                <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer"><img
                    class="max-w-[20px] object-scale-down mr-2 "
                    src="https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp"
                    alt="">Discharge</li>
              </a></ul>
          </div>
          <div class="col-9">
            .col
          </div>
          <div class="col">
            .col
          </div>
        </div>
      </main>
    </div>
    <q-page-scroller position="bottom">
      <q-btn fab icon="keyboard_arrow_up" color="red" />
    </q-page-scroller>

  </q-page-container>
</template>

<script lang="ts">
// import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent } from 'vue';

import { ref } from 'vue'
export default defineComponent(
  {
    setup() {
      return {
        slide: ref(1),
        fullscreen: ref(false)
      }
    }

  });
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

* {
  box-sizing: border-box;
}

.menu {
  height: 2400px;
  margin-left: 300px;
  margin-right: 300px;

}

.row {
  display: flex;
}

.my-card {
  width: 100%;

}

.item-book {
  float: left;
  padding-left: 4px;
  padding-right: 4px;

}

.col-fourth {
  width: 24%;
}</style>
