<template>
  <div class="menu">
    <div class="container mx-auto">
      <main class="grid grid-cols-1 lg:grid-cols-5 justify-center items-center gap-2 mt-8 container">
        <div class="lg:block bg-white shadow-md p-5 text-base rounded h-full w-full">
          <h3 class="mb-3 font-medium text-emerald-500 hover:text-blue-500 cursor-pointer">
            Nổi Bật
          </h3>
          <ul>
            <a href="/minigame/wheel1">
              <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer">
                <img class="max-w-[20px] object-scale-down mr-2"
                  src="https://salt.tikicdn.com/cache/100x100/ts/upload/cb/64/f7/0ebb0ae297f052e34a8161c9bf8efb96.png.webp"
                  alt="" />Astra Reward
              </li>
            </a><a href="/products">
              <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer">
                <img class="max-w-[20px] object-scale-down mr-2"
                  src="https://salt.tikicdn.com/cache/100x100/ts/upload/ae/72/a3/d4503c3ece932dc8c57d2d5c97cd6ffc.png.webp"
                  alt="" />Cheap every day
              </li>
            </a><a href="/products">
              <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer">
                <img class="max-w-[20px] object-scale-down mr-2"
                  src="https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp"
                  alt="" />Discharge
              </li>
            </a><a href="/minigame/wheel2">
              <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer">
                <img class="max-w-[20px] object-scale-down mr-2"
                  src="https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp"
                  alt="" />Discount code
              </li>
            </a><a href="/minigame/wheel2">
              <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer">
                <img class="max-w-[20px] object-scale-down mr-2"
                  src="https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp"
                  alt="" />Preferential wallet cards
              </li>
            </a><a href="/minigame/bingo">
              <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer">
                <img class="max-w-[20px] object-scale-down mr-2"
                  src="https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp"
                  alt="" />Buy in advance
              </li>
            </a><a href="/minigame/dice">
              <li class="flex hover:bg-slate-200 hover:text-emerald-600 mb-1 p-3 rounded-md cursor-pointer">
                <img class="max-w-[20px] object-scale-down mr-2"
                  src="https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp"
                  alt="" />Discharge
              </li>
            </a>
          </ul>
        </div>
        <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
          transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true"
          class="rounded-md shadow-md lg:col-start-2 lg:col-end-5 lg:col-span-3 w-full h-full">
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>

        <div class="lg:block lg:col-start-5 shadow-md h-full cursor-pointer rounded-md overflow-hidden relative">

          <a href="/products"><iframe class="h-full object-cover duration-500 hover:scale-110" width="100%"
              src="https://www.youtube.com/embed/HzE5BKelbVs" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </a>
          <a class="absolute bottom-2 right-5 text-white font-medium group hover:text-emerald-500 flex items-center justify-center"
            href="/products"><span>Xem Thêm</span><svg class="fill-white ml-1 group-hover:fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
              <path
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z">
              </path>
            </svg>
          </a>
        </div>
      </main>
      <div class="px-2 mt-5">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <h3 class="text-xl font-medium">Hot Category</h3>
            <span class="text-sm lg:text-lg">The list of trends that you will like</span>
          </div>
          <button class="px-5 py-1 bg-emerald-300 rounded-md  ">Discover</button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-5 mt-2 ">
          <div class="overflow-hidden rounded-md bg-white border shadow-md  group "><a class="" href="/products"><img
                class="  object-cover aspect-video group-hover:scale-95 duration-200 group-hover:rounded-md "
                src="https://img.freepik.com/free-vector/seller-is-sitting-shop-selling-different-varieties-trees_1150-41150.jpg"
                alt=""></a>
            <div class="mx-2">
              <h3 class="py-2 font-medium group-hover:text-emerald-300  duration-200 flex justify-center mt-2 "><a
                  href="/products">Plant shop</a></h3>
              <div class="flex justify-between my-2  text-sm"><span class="">Tham gia: <span
                    class="text-red-600">266</span></span><span class="flex items-center gap-1"><svg
                    xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                    <path
                      d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z">
                    </path>
                  </svg><span> 3236</span></span></div>
            </div><button class=" mx-auto justify-center flex text-slate-600  font-medium my-5  "> <a
                href="/products"><span
                  class="border-2 px-3 py-2 rounded-md hover:bg-emerald-300 hover:text-white duration-200">Watch
                  now</span></a></button>
          </div>

        </div>
        <div class="mx-auto px-5 lg:px-11 pb-10 lg:w-5/6 lg:pb-20  pt-5 lg:pt-16 ">
          <h3
            class="text-caption-2 lg:text-caption-1 text-center text-primary-100 text-emerald-500 text-2xl mb-5 font-bold">
            Explore Categories</h3>
          <h2 class="text-heading-4 lg:text-heading-2 mt-2 text-center mb-7 text-3xl font-bold text-slate-600">Our Great
            Categories</h2>
          <div class="grid gap-2  lg:gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div class="transition duration-200 group rounded-3xl py-5 border hover:border-emerald-300 shadow-md "><a
                class="" href="products"><img alt="Food Menu" loading="lazy" decoding="async" data-nimg="1"
                  class="group-hover:scale-95  aspect-square object-cover rounded-full mx-auto w-2/3 duration-200 -z-10 filter brightness-110 saturate-100"
                  src="https://i.pinimg.com/564x/98/6a/29/986a29d5c12bbf9c0673bc3a24b4a2c6.jpg"
                  style="color: transparent;">
                <div class="text-center">
                  <h5
                    class="pt-3  text-md lg:text-2xl lg:text-heading-3 text-slate-600 hover:text-primary-100  transition duration-300 font-semibold inline-block w-full whitespace-nowrap overflow-hidden text-ellipsis px-10">
                    Bonsais</h5>
                  <h3 class="text-caption-2 pb-2 text-emerald-500  text-base font-semibold">6 Products</h3>
                </div>
              </a></div>
            <div class="transition duration-200 group rounded-3xl py-5 border hover:border-emerald-300 shadow-md "><a
                class="" href="products"><img alt="Food Menu" loading="lazy" decoding="async" data-nimg="1"
                  class="group-hover:scale-95  aspect-square object-cover rounded-full mx-auto w-2/3 duration-200 -z-10 filter brightness-110 saturate-100"
                  src="https://i.pinimg.com/736x/98/1f/8d/981f8d87d0aac840098fd7820217a9bd.jpg"
                  style="color: transparent;">
                <div class="text-center">
                  <h5
                    class="pt-3  text-md lg:text-2xl lg:text-heading-3 text-slate-600 hover:text-primary-100  transition duration-300 font-semibold inline-block w-full whitespace-nowrap overflow-hidden text-ellipsis px-10">
                    Wreaths</h5>
                  <h3 class="text-caption-2 pb-2 text-emerald-500  text-base font-semibold">4 Products</h3>
                </div>
              </a></div>
            <div class="transition duration-200 group rounded-3xl py-5 border hover:border-emerald-300 shadow-md "><a
                class="" href="products"><img alt="Food Menu" loading="lazy" decoding="async" data-nimg="1"
                  class="group-hover:scale-95  aspect-square object-cover rounded-full mx-auto w-2/3 duration-200 -z-10 filter brightness-110 saturate-100"
                  src="https://i.pinimg.com/564x/01/2c/10/012c100cbe5617cd27a501098f4c62f6.jpg"
                  style="color: transparent;">
                <div class="text-center">
                  <h5
                    class="pt-3  text-md lg:text-2xl lg:text-heading-3 text-slate-600 hover:text-primary-100  transition duration-300 font-semibold inline-block w-full whitespace-nowrap overflow-hidden text-ellipsis px-10">
                    Pots</h5>
                  <h3 class="text-caption-2 pb-2 text-emerald-500  text-base font-semibold">4 Products</h3>
                </div>
              </a></div>
          </div>
        </div>
        <div class="mb-10 px-2 lg:px-10 py-10 bg-white rounded-lg">
          <h2 class="text-center tex-heading-4 mt-2 mb-7 font-bold text-3xl ">Special Products</h2>
          <div class="mt-8 grid gap-16 grid-cols-4 px-5">
            
          </div>
        </div>
        <div class="mb-10 px-2 lg:px-10 py-10 bg-white rounded-lg">
          <h2 class="text-center tex-heading-4 mt-2 mb-7 font-bold text-3xl ">Most Popular Products</h2>
          <div class="mt-8 grid gap-16 grid-cols-4 px-5">

            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <q-btn-group rounded class="bg-emerald-300"  >
                    <q-btn  rounded glossy icon="timeline" />
                    <q-btn  rounded glossy icon="visibility" />
                    <q-btn  rounded glossy icon-right="update" label="Update" />
                  </q-btn-group>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <q-btn-group rounded class="bg-emerald-300"  >
                    <q-btn  rounded glossy icon="timeline" />
                    <q-btn  rounded glossy icon="visibility" />
                    <q-btn  rounded glossy icon-right="cart" label="Update" />
                  </q-btn-group>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <q-btn-group rounded class="bg-emerald-300"  >
                    <q-btn  rounded glossy icon="timeline" />
                    <q-btn  rounded glossy icon="visibility" />
                    <q-btn  rounded glossy icon-right="update" label="Update" />
                  </q-btn-group>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <q-btn-group rounded class="bg-emerald-300"  >
                    <q-btn  rounded glossy icon="timeline" />
                    <q-btn  rounded glossy icon="visibility" />
                    <q-btn  rounded glossy icon-right="update" label="Update" />
                  </q-btn-group>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <q-btn-group rounded class="bg-emerald-300"  >
                    <q-btn  rounded glossy icon="timeline" />
                    <q-btn  rounded glossy icon="visibility" />
                    <q-btn  rounded glossy icon-right="update" label="Update" />
                  </q-btn-group>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <q-btn-group rounded class="bg-emerald-300"  >
                    <q-btn  rounded glossy icon="timeline" />
                    <q-btn  rounded glossy icon="visibility" />
                    <q-btn  rounded glossy icon-right="update" label="Update" />
                  </q-btn-group>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <q-btn-group rounded class="bg-emerald-300"  >
                    <q-btn  rounded glossy icon="timeline" />
                    <q-btn  rounded glossy icon="visibility" />
                    <q-btn  rounded glossy icon-right="update" label="Update" />
                  </q-btn-group>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <q-btn-group rounded class="bg-emerald-300"  >
                    <q-btn  rounded glossy icon="timeline" />
                    <q-btn  rounded glossy icon="visibility" />
                    <q-btn  rounded glossy icon-right="update" label="Update" />
                  </q-btn-group>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <q-btn-group rounded class="bg-emerald-300"  >
                    <q-btn  rounded glossy icon="timeline" />
                    <q-btn  rounded glossy icon="visibility" />
                    <q-btn  rounded glossy icon-right="update" label="Update" />
                  </q-btn-group>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


import { ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    };
  },
});
</script>
<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
@import url('https://fonts.googleapis.com/css2?family=inter:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

.menu {
  /* height: 2400px; */
  margin-left: 150px;
  margin-right: 150px;

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
}

/* card */
.card {
  position: relative;
  width: 100%;
  height: 450px;
  background: #000;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
}

.poster {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  overflow: hidden;
}

.poster::before {
  content: '';
  position: absolute;
  bottom: -45%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: .3s;
}

.card:hover .poster::before {
  bottom: 0;
}

.poster img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .3s;
}

.details {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: auto;
  padding: 1.5em 1.5em 2em;
  background: #000a;
  backdrop-filter: blur(16px) saturate(120%);
  transition: .3s;
  color: #fff;
  z-index: 2;
}

.card:hover .details {
  bottom: 0;
}

.details h1,
.details h2 {
  font-weight: 700;
}

.details h1 {
  font-size: 1.5em;
  margin-bottom: 5px;
}

.details h2 {
  font-weight: 400;
  font-size: 1em;
  margin-bottom: 10px;
  opacity: .6;
}

.details .rating {
  position: relative;
  margin-bottom: 15px;
  display: flex;
  gap: .25em;
}

.details .rating i {
  color: #e3c414;
}

.details .rating span {
  margin-left: 0.25em;
}

.details .tags {
  display: flex;
  gap: .375em;
  margin-bottom: .875em;
  font-size: .85em;
}

.details .tags span {
  padding: .35rem .65rem;
  color: #fff;
  border: 1.5px solid rgba(255 255 255 / 0.4);
  border-radius: 4px;
  border-radius: 50px;
}

.details .desc {
  color: #fff;
  opacity: .8;
  line-height: 1.5;
  margin-bottom: 1em;
}

.details .cast h3 {
  margin-bottom: .5em;
}

.details .cast ul {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  width: 100%;
}

.details .cast ul li {
  list-style: none;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid #fff;
}

.details .cast ul li img {
  width: 100%;
  height: 100%;
}</style>
