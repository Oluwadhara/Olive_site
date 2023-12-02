<template>
  <div class="product-container" v-for="product in filteredProducts" :key="product.id">
    <img :src="product.imageUrl" :alt="product.name" class="product-image">
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
    <button @click="$emit('remove-from-cart', product.id)" class="remove-button">Remove from Cart</button>
  </div>
</template>

<script>
export default {
    name: 'ShoppingCartList',
    props: ['products'],
    computed: {
    filteredProducts() {
      // Filter out null values before rendering
      return this.products.filter(product => product !== null);
    },}
}
</script>

<style>

</style>