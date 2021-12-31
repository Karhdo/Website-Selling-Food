import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/Intro",
        name: "Intro",
        component: () => import("../components/Intro.vue"),
    },
    {
        path: "/Store",
        name: "Store",
        component: () => import("../components/Store.vue"),
    },
    {
        path: "/Store/:slug/:id",
        name: "StoreListItem",
        component: () => import("../components/StoreListItem.vue"),
    },
    {
        path: "/Store/:slug/:name_sort/:category_id",
        name: "StoreSort",
        component: () => import("../components/SortProducts.vue"),
    }, 
    {
        path: "/Store/:slug/:id/:min/:max",
        name: "StoreFilter",
        component: () => import("../components/FilterProducts.vue"),
    },
    {
        path: "/Store/:slug/:name_sort/:id/:min/:max",
        name: "StoreSortAndFilter",
        component: () => import("../components/SortAndFilterProducts.vue"),
    },
    {
        path: "/ProductCart",
        name: "ProductCart",
        component: () => import("../components/ProductCart.vue"),
    },
    {
        path: "/Contact",
        name: "Contact",
        component: () => import("../components/Contact.vue"),
    },
    {
        path: "/Login",
        name: "Login",
        component: () => import("../components/Login.vue"),
    },
    {
        path: "/Register",
        name: "Register",
        component: () => import("../components/Register.vue"),
    },
    {
        path: "/Product/:id",
        name: "Product",
        component: () => import("../components/Product.vue"),
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    linkExactActiveClass: "active",
});

export default router;
