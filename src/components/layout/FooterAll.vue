<template>
  <q-footer>
    <div class="data-container bg:cover px-5" style="height: 672px;">
      <div class="container mx-auto divide-y divide-white/40">
        <div class="flex flex-col lg:flex-row lg:justify-between lg:pb-16 lg:pt-20">
          <h2 class="text-heading-4 lg:text-heading-2 text-center leading-none text-white text-6xl font-black">
            Newsletter Subscribe
          </h2>
          <div class="flex flex-col items-center space-y-6 lg:flex-row lg:space-x-5 lg:space-y-0">
            <input placeholder="Email Address"
              class="text-body-2-medium w-full rounded-[32px] border border-white bg-transparent px-10 py-5 text-white placeholder:text-white focus:outline-0 focus:ring-1 focus:ring-white lg:w-96"
              type="text">
            <div class="buttons">
              <button class="button">
                <span>Subscribe Now</span>
              </button>
            </div>
          </div>

        </div>
        <div class="pb-14 pt-10">
          <div class="flex flex-col space-y-10 lg:flex-row lg:space-x-[120px] lg:space-y-0">
            <div class="flex flex-col space-y-8">
              <h1 class="text-white text-3xl font-semibold">Atom Shop</h1>
              <div class="text-white items-center space-x-1.5 flex">
                <p class="text-body-2-regular !leading-none"><span class="font-bold">Email us</span> : example@gmail.com
                </p>
              </div>
              <div class="flex items-center space-x-1.5 text-white">
                <p class="text-body-2-regular !leading-none"><span class="font-bold">Call</span> : 123 45678910</p>
              </div>
              <div class="text-white item-center space-x-1.5 flex">
                <p class="text-body-2-regular !leading-none"><span class="font-bold">Working Hours</span> : Monday - Friday, 08 am - 05 pm</p>
              </div>
              <div class="flex space-x-5">
                <a class="group flex h-8 w-8 items-center justify-center rounded-full fa-brands fa-facebook fa-2xl" href="/"></a>
                <a class="group flex h-8 w-8 items-center justify-center rounded-full fa-brands fa-instagram fa-2xl" href="/"></a>
                <a class="group flex h-8 w-8 items-center justify-center rounded-full fa-brands fa-brands fa-twitter fa-2xl" href="/"></a>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-x-12 gap-y-10 lg:grid-cols-3 lg:gap-x-28 lg:gap-y-0">
              <div class="flex flex-col space-y-6">
                <p class="font-semibold text-xl text-white">Shopping</p>
                <a class="text-body-3 text-white" href="">Products</a>
                <a class="text-body-3 text-white" href="">My Cart</a>
              </div>
              <div class="flex flex-col space-y-6">
                <p class="font-semibold text-xl text-white">Learn More</p>
                <a class="text-body-3 text-white" href="">About Us</a>
                <a class="text-body-3 text-white" href="">Contact Us</a>
                <a class="text-body-3 text-white" href="">Terms & Conditions</a>
                <a class="text-body-3 text-white" href="">Privacy Policy</a>
              </div>
              <div class="col-span-2 flex flex-col space-y-6 lg:col-span-1">
                <p class="font-semibold text-xl text-white">Download The App</p>
                <button class="lg:w-[145px] md:w-[120px]">
                <img src="https://cn.maplesoft.com/products/MapleCalculator/images/app-store-icons-apple-app-store.png" alt="">
                </button>
                <button class="lg:w-[145px] md:w-[120px]">
                <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png?hl=vi" alt="">
                </button>
              </div>
          </div>
          </div>

        </div>
      </div>

    </div>
    <q-page-scroller position="bottom">
      <q-btn fab icon="keyboard_arrow_up" color="red" />
    </q-page-scroller>
  </q-footer>
</template>
<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.data-container {
  background-image: linear-gradient(to bottom right, #2e2341, #0c378d);
  height: 100vh;
}

.button {
  border: none;
  background: transparent;
  cursor: pointer;
}

.button:not(:last-child) {
  margin-bottom: 2rem;
}

:root {
  --shadow-color: 208deg 22% 58%;
  --shadow-elevation-low:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
    1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
  --shadow-elevation-medium:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
  --shadow-elevation-high:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
    2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
    4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
    7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
    11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
    17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
    25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
}

.button {
  border: none;
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.2rem;
  overflow: hidden;
  border-radius: 100vmax;
  box-shadow: var(--shadow-elevation-high);
  transition: box-shadow 0.2s ease-in-out;
}

.button::after,
.button::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: red;
}

.button::before {
  z-index: 1;
  right: -100%;
  background: linear-gradient(to right, #9900f0 0%, #ff85b3 50%, #9900f0 100%);
  background-size: 50% 100%;
  -webkit-animation: scroll 1.2s infinite linear;
  animation: scroll 1.2s infinite linear;
}

.button::after {
  z-index: 2;
  inset: 5px;
  border-radius: 100vmax;
  background-color: black;
  transition: inset 0.2s ease-in-out;
}

.button span {
  z-index: 3;
  color: white;
  text-transform: uppercase;
}

.button:hover {
  box-shadow: var(--shadow-elevation-medium);
}

.button:hover::after {
  inset: 8px;
}

@-webkit-keyframes scroll {
  to {
    transform: translatex(-50%);
  }
}

@keyframes scroll {
  to {
    transform: translatex(-50%);
  }
}</style>
