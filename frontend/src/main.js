import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage'
import NotFoundPage from './pages/NotFoundPage.vue'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4RdFHQWbn-MXaRAJaeZiFBR4rATrNNFI",
  authDomain: "vue-site-cd019.firebaseapp.com",
  projectId: "vue-site-cd019",
  storageBucket: "vue-site-cd019.appspot.com",
  messagingSenderId: "1038723826968",
  appId: "1:1038723826968:web:7159975a48d4bc4efbca6d"
};

initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/cart',
        component: ShoppingCartPage,
    }, {
        path: '/products',
        component: ProductsPage,
    }, {
        path: '/products/:productId',
        component: ProductDetailPage
    },{
        path: '/',
        redirect: '/products',
    }, {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
    }]
}))
.mount('#app')
