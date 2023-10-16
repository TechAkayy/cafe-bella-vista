<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'our-story',
    // alias: 'our-story',
    title: 'Our Story',
    navOrder: '3',
    type: 'primary',
    icon: 'i-mdi-home',
  })
</script>
<template>
  <div class="container mx-auto pt-16">
    <section>
      <h2 class="text-3xl font-bold mb-5">Our Journey</h2>
      <p class="text-lg mb-5">
        Our story began 10 years ago when Cafe Bella Vista first opened its
        doors to the Fraser Rise community. With a small team of dedicated
        baristas and a passion for serving the best coffee in Melbourne, we
        quickly became a local favorite.
      </p>
      <p class="text-lg mb-5">
        As the years went by, we strived to innovate and elevate our offerings.
        We introduced new signature blends and experimented with unique brewing
        techniques. Our commitment to quality and creativity earned us a
        reputation as a coffee destination like no other.
      </p>
      <p class="text-lg mb-5">
        Today, Cafe Bella Vista continues to evolve. We have expanded our menu
        to include an array of mouthwatering breakfast and lunch options. Our
        commitment to excellence remains unwavering, and we look forward to
        serving our community for many years to come.
      </p>
    </section>
    <section>
      <v-timeline>
        <v-timeline-item>
          <h3 class="text-xl font-bold">Cafe Opened</h3>
          <p>Cafe Bella Vista opens its doors to the Fraser Rise community.</p>
        </v-timeline-item>
        <v-timeline-item>
          <h3 class="text-xl font-bold">Best Coffee in Melbourne</h3>
          <p>
            Cafe Bella Vista is recognized for serving one of the best coffee in
            Melbourne.
          </p>
        </v-timeline-item>
        <v-timeline-item>
          <h3 class="text-xl font-bold">Breakfast and Lunch All Day</h3>
          <p>
            Cafe Bella Vista extends its operating hours, serving breakfast and
            lunch throughout the day.
          </p>
        </v-timeline-item>
      </v-timeline>
    </section>
  </div>
</template>
<style scoped></style>
