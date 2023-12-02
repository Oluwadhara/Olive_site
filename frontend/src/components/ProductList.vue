<template>
<div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product.id">
        <img :src="product.imageUrl" :alt="product.name">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}</p>
        <router-link :to="'/products/' + product.id">
        <button>View Details</button>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProductList',
    props: ['products'],
}
</script>

<style>

</style>