import { createRouter, createWebHistory } from 'vue-router'
import CartItem from "../components/CartItem.vue";
import ProductCatalog from "../components/ProductCatalog.vue";
import CartSummary from "../components/CartSummary.vue";
import RouteTesting from "../components/RouteTesting.vue";

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
        },
        {
            path: "/summary",
            component: CartSummary
        }, {
            path: "/test",
            component: RouteTesting
        }
    ],
})

export default router