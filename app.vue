<script setup lang="ts">
  // Enforcing css import order - Tailwind is imported here instead of in nuxt.config.ts css, so that it can override all css imports via nuxt.config.ts
  import '~/assets/css/tailwind.css'
  import site from '@/site'

  // When building as a SSG (generate command) app, defineRobotMeta is used to create a meta tag to control indexing. For more details - https://nuxtseo.com/robots/guides/meta-tags
  // TODO: Remove below defineRobotMeta if building as a SSR (build command) app
  defineRobotMeta()

  const { name, description, author, twitter } = site

  const ogImageOptions = {
    component: 'ThePage',
    title: name,
    // description: '', // use page description instead
    summary: description,
    // image: '~/assets/images/hero1.jpg',
    author,
    twitter,
  }
</script>
<template>
  <div>
    <HeadAndMeta />
    <!-- We pass image separately so that alias can be transformed by vue plugin, see vite.vue.template.transformAssetUrls in nuxt.config.ts -->
    <OgImage image="~/assets/images/hero1.jpg" v-bind="ogImageOptions" />
    <!-- <NuxtLoadingIndicator /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
  // @use '~/assets/vuetify/settings';
  // .my-button {
  //   height: settings.$button-height;
  // }
  // .v-btn {
  //   @media #{map-get(settings.$display-breakpoints, 'sm-and-down')} {
  //     font-size: 12px;
  //   }
  // }
</style>
