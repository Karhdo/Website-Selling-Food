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
        path: "/Store/?search=:nameSearch",
        name: "StoreSearchItem",
        component: () => import("../components/SearchProduct.vue"),
    },
    {
        path: "/Store/:slug",
        name: "StoreListItem",
        component: () => import("../components/StoreListItem.vue"),
    },
    {
        path: "/Store/:slug/?orderby=:name_sort",
        name: "StoreSort",
        component: () => import("../components/SortProducts.vue"),
    }, 
    {
        path: "/Store/:slug/?min_price=:min&max_price=:max",
        name: "StoreFilter",
        component: () => import("../components/FilterProducts.vue"),
    },
    {
        path: "/Store/:slug/?orderby=:name_sort&min_price=:min&max_price=:max",
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
    {
        path: "/Payment",
        name: "Payment",
        component: () => import("../components/Payment.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    linkExactActiveClass: "active",
});

export default router;
