<script setup lang="ts">
  import site from '@/site'

  // inherited attrs can mess up the satori parser
  defineOptions({
    inheritAttrs: false,
  })

  const { title, description, image, author, twitter } = defineProps({
    title: {
      type: String,
      default: 'Og Image Title',
    },
    description: {
      type: String,
      default: site.description || 'Set a description to change me.',
    },
    image: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: site.author || 'Pinegrow',
    },
    twitter: {
      type: String,
      default: site.twitter || '@vuedesigner',
    },
  })

  const route = useRoute()
  const theTitle = computed(() => (route.meta.title || title) as string)

  const theDescription = computed(
    () => (route.meta.description || description) as string,
  )
</script>
<template>
  <v-card
    image="https://images.unsplash.com/photo-1670893494916-d128f4ef5e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDE1fHxjb2ZmZWUlMjBncmFkaWVudHxlbnwwfHx8fDE2OTc1OTA0MjB8MA&ixlib=rb-4.0.3&q=80&w=1080"
  >
    <div class="flex h-full pl-4 py-4 w-full">
      <div class="flex flex-col w-1/2">
        <div data-pg-name="Logo" class="flex items-center sm:flex-row">
          <v-icon class="text-4xl" icon="i-fluent-emoji-shopping-bags"></v-icon>
          <h5 class="font-extrabold font-serif ml-2 mt-4 text-2xl">
            The AI Cafe
          </h5>
        </div>
        <v-card-title class="text-4xl text-white">{{ title }}</v-card-title>
        <v-card-subtitle class="mt-4 text-white text-xl whitespace-normal"
          >{{ description }}
        </v-card-subtitle>
        <v-card-actions v-if="twitter" class="flex items-center mt-auto">
          <v-icon icon="i-logos-twitter"></v-icon
          ><span class="ml-2 text-white">{{ twitter }}</span>
        </v-card-actions>
      </div>
      <div class="-mr-4 -my-4 w-1/2">
        <v-img cover src="~/assets/images/hero1.jpg"></v-img>
      </div>
    </div>
  </v-card>
</template>
<style scoped></style>
