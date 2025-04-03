import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from "../components/ProductCatalog.vue";
import CartSummary from "../components/CartSummary.vue";
import RouteTesting from "../components/RouteTesting.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: ProductCatalog
        },
        {
            path: "/cart",
            component: ShoppingCart,
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