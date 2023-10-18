<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'TheFooter',
  // 	},
  // })

  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }
</script>
<template>
  <v-footer name="footer">
    <div class="flex items-center justify-between px-8 py-4 w-full sm:flex-row">
      <ul class="flex flex-wrap sm:flex-nowrap">
        <li class="mr-4 mb-2 sm:mb-0">
          <v-btn color="primary" plain variant="text">Facebook</v-btn>
        </li>
        <li class="mr-4 mb-2 sm:mb-0">
          <v-btn color="primary" plain variant="text">Twitter</v-btn>
        </li>
        <li class="mb-2 sm:mb-0">
          <v-btn color="primary" plain variant="text">Instagram</v-btn>
        </li>
      </ul>
      <p class="mt-4 sm:mt-0">&copy; 2021 The AI Cafe. All rights reserved.</p>
    </div>
  </v-footer>
</template>
<style scoped></style>
