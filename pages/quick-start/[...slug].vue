<script setup lang="ts">
  const slug = useRoute().params.slug.toString().replace(/,/g, '/')
  const { data: post } = await useAsyncData(slug, () => {
    return queryContent(slug).findOne()
  })

  useSeoMeta({
    description: () => post.value.title,
  })

  useHead({
    title: 'Quick Start',
  })
</script>
<template>
  <div>
    <TheHeader>
      <div>
        <div class="flex items-center">
          <h2 class="text-5xl">Quick Start</h2>
        </div>
        <div class="flex items-center mt-2">
          <h6 class="mt-2">Github repo for this template</h6>
          <v-btn
            size="small"
            class="ml-2"
            color="secondary"
            href="https://github.com/pinegrow/pg-nuxt-vuetify-tailwindcss"
            target="_blank"
            ><span class="text-sm text-subtitle-2">Click here</span>
          </v-btn>
        </div>
        <slot />
      </div>
    </TheHeader>
    <section class="container mx-auto">
      <div class="container mx-auto px-10 w-full">
        <div class="flex flex-col rounded-lg">
          <article
            class="dark:xl:divide-gray-700 xl:divide-gray-200 xl:divide-y"
          >
            <div
              class="dark:divide-gray-700 divide-gray-200 divide-y pb-16 xl:divide-y-0 xl:gap-x-10 xl:grid xl:grid-cols-4 xl:pb-20 xl:sticky"
              style="grid-template-rows: auto 1fr"
            >
              <div
                class="dark:divide-gray-700 divide-gray-200 divide-y xl:col-span-3 xl:pb-0 xl:row-span-2"
              >
                <div
                  id="post"
                  class="dark:prose-invert dark:prose-gray-100 flex flex-col heading-offset max-w-none prose prose-gray-800 rounded-lg"
                >
                  <ContentRenderer id="content" :value="post">
                    <template #empty>
                      <p>No content found.</p>
                    </template>
                  </ContentRenderer>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped></style>
