import { createRouter, createWebHistory } from 'vue-router'
import CartItem from "../components/CartItem.vue";
import ProductCatalog from "../components/ProductCatalog.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: ProductCatalog
        },
        {
            path: "/cart",
            component: CartItem,
        }],
})

export default router