<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'menu',
    // path: 'menu',
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
  <main>
    <section class="menu">
      <div class="max-w-4xl mx-auto py-8 px-4">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Coffee</td>
              <td>Aromatic blend of freshly ground coffee beans</td>
              <td>$4.99</td>
            </tr>

            <tr>
              <td>Avocado Toast</td>
              <td>Toasted whole grain bread topped with mashed avocado</td>
              <td>$9.99</td>
            </tr>

            <tr>
              <td>Smoothie</td>
              <td>Refreshing blend of seasonal fruits and yogurt</td>
              <td>$6.99</td>
            </tr>

            <!-- Additional menu items -->

            <tr>
              <td>Burger</td>
              <td>Grilled beef patty served with lettuce, tomato and cheese</td>
              <td>$12.99</td>
            </tr>

            <tr>
              <td>Club Sandwich</td>
              <td>
                Classic triple-layered sandwich with ham, turkey, bacon and
                veggies
              </td>
              <td>$10.99</td>
            </tr>

            <tr>
              <td>Pasta</td>
              <td>
                Choice of tomato or cream-based sauce with a variety of toppings
              </td>
              <td>$14.99</td>
            </tr>

            <tr>
              <td>Iced Tea</td>
              <td>
                Cold brewed tea with a hint of lemon and sweetened with honey
              </td>
              <td>$3.99</td>
            </tr>

            <tr>
              <td>Salad</td>
              <td>Fresh greens with assorted veggies and choice of dressing</td>
              <td>$7.99</td>
            </tr>

            <tr>
              <td>Smoothie Bowl</td>
              <td>Thick smoothie topped with fresh fruits, granola and nuts</td>
              <td>$8.99</td>
            </tr>

            <tr>
              <td>Waffle</td>
              <td>Classic Belgian waffle served with maple syrup and butter</td>
              <td>$9.99</td>
            </tr>

            <tr>
              <td>Pancakes</td>
              <td>Fluffy pancakes served with your choice of toppings</td>
              <td>$8.99</td>
            </tr>

            <tr>
              <td>Milkshake</td>
              <td>Rich and creamy milkshake in various flavors</td>
              <td>$5.99</td>
            </tr>

            <tr>
              <td>Hot Chocolate</td>
              <td>
                Deliciously warm chocolate drink topped with whipped cream
              </td>
              <td>$4.99</td>
            </tr>

            <tr>
              <td>Fruit Bowl</td>
              <td>Fresh assortment of seasonal fruits</td>
              <td>$6.99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

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
