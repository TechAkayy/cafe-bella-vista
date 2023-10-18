<script setup lang="ts">
  // inherited attrs can mess up the satori parser
  defineOptions({
    inheritAttrs: false,
  })

  defineProps({
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    summary: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '~/assets/images/hero1.jpg',
    },
    author: {
      type: String,
      default: 'Pinegrow',
    },
    twitter: {
      type: String,
      default: '@vuedesigner',
    },
  })
</script>
<template>
  <div
    class="bg-gradient-to-r from-amber-800 to-amber-600 rounded-3xl w-full z-0"
  >
    <div class="flex h-full pl-6 py-6 w-full">
      <div class="flex flex-col w-1/2">
        <div data-pg-name="Logo" class="flex items-center sm:flex-row">
          <Icon
            name="vscode-icons:file-type-coffeelint"
            class="text-7xl"
          ></Icon>
          <span class="text-white font-extrabold ml-2 mt-4 p-4 text-6xl">
            {{ title }}
          </span>
        </div>
        <!-- <h1 class="p-4 text-6xl text-white">{{ title }}</h1> -->
        <h5 class="mt-8 p-4 text-white text-4xl whitespace-normal">
          <span>{{ description }}</span>
        </h5>
        <h5
          v-if="summary"
          class="mt-2 p-4 text-white text-2xl whitespace-normal"
        >
          {{ summary }}
        </h5>
        <div v-if="twitter" class="flex items-center mt-auto">
          <Icon name="logos:twitter" class="text-3xl"></Icon>

          <span class="ml-2 text-white">{{ twitter }}</span>
        </div>
      </div>
      <div class="-my-6 w-1/2">
        <img cover :src="image" class="h-full rounded-r-3xl w-full" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
