<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'menu',
    // alias: 'menu',
    title: 'Menu',
    navOrder: '2',
    type: 'primary',
    icon: 'i-mdi-home',
  })

  const headers = [
    {
      title: 'Name',
      align: 'start',
      sortable: false,
      key: 'name',
    },
    { title: 'Description', align: 'start', key: 'description' },
    { title: 'Price', align: 'start', key: 'price' },
  ]

  const menuItems = [
    {
      name: 'Coffee',
      description: 'Aromatic blend of freshly ground coffee beans',
      price: '$4.99',
    },
    {
      name: 'Avocado Toast',
      description: 'Toasted whole grain bread topped with mashed avocado',
      price: '$9.99',
    },
    {
      name: 'Smoothie',
      description: 'Refreshing blend of seasonal fruits and yogurt',
      price: '$6.99',
    },
    {
      name: 'Burger',
      description: 'Grilled beef patty served with lettuce, tomato and cheese',
      price: '$12.99',
    },
    {
      name: 'Club Sandwich',
      description:
        'Classic triple-layered sandwich with ham, turkey, bacon and veggies',
      price: '$10.99',
    },
    {
      name: 'Pasta',
      description:
        'Choice of tomato or cream-based sauce with a variety of toppings',
      price: '$14.99',
    },
    {
      name: 'Iced Tea',
      description:
        'Cold brewed tea with a hint of lemon and sweetened with honey',
      price: '$3.99',
    },
    {
      name: 'Salad',
      description: 'Fresh greens with assorted veggies and choice of dressing',
      price: '$7.99',
    },
    {
      name: 'Smoothie Bowl',
      description: 'Thick smoothie topped with fresh fruits, granola and nuts',
      price: '$8.99',
    },
    {
      name: 'Waffle',
      description: 'Classic Belgian waffle served with maple syrup and butter',
      price: '$9.99',
    },
    {
      name: 'Pancakes',
      description: 'Fluffy pancakes served with your choice of toppings',
      price: '$8.99',
    },
    {
      name: 'Milkshake',
      description: 'Rich and creamy milkshake in various flavors',
      price: '$5.99',
    },
    {
      name: 'Hot Chocolate',
      description: 'Deliciously warm chocolate drink topped with whipped cream',
      price: '$4.99',
    },
    {
      name: 'Fruit Bowl',
      description: 'Fresh assortment of seasonal fruits',
      price: '$6.99',
    },
  ]
</script>
<template>
  <main class="container mx-auto pt-16">
    <section class="menu-sample">
      <v-card>
        <v-card-title>Sample Menu</v-card-title>

        <v-card-text>
          <v-data-table
            :items="menuItems"
            :per-page="5"
            :headers="headers"
            class="elevation-1"
          >
          </v-data-table>
        </v-card-text>
      </v-card>
    </section>
  </main>
</template>
<style scoped></style>
