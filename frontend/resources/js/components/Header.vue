<template>
    <div class="header">
        <b-container class="header__wrapper">
            <div class="header__top flex-row">
                <ul class="header__contact flex-row">
                    <li class="header__contact-item header__top-left">
                        <a href="#">
                            <b-icon icon="mailbox2" font-scale="1.5"></b-icon>
                            <span>Freshfood.media</span>
                        </a>
                    </li>
                    <li class="header__contact-item">
                        <a href="#">
                            <b-icon
                                icon="telephone-fill"
                                font-scale="1.25"
                            ></b-icon>
                            <span>0907123456</span>
                        </a>
                    </li>
                </ul>
                <ul class="header__option flex-row">
                    <li
                        class="header__option-item header__top-left"
                        v-if="hasToken"
                    >
                        <span class="option-item__username">
                            {{ user.username }}</span
                        >
                        /
                        <span
                            class="option-item__logout"
                            @click.prevent="logoutUser"
                            >Đăng xuất</span
                        >
                    </li>
                    <li class="header__option-item header__top-left" v-else>
                        <router-link class="option-item__login" to="/Login">
                            Đăng nhập</router-link
                        >
                        /
                        <router-link
                            class="option-item__register"
                            to="/Register"
                            >Đăng ký</router-link
                        >
                    </li>
                    <li class="header__option-item">
                        <a href="#">
                            <span
                                class="option-item__product-cart"
                                @click.prevent="ViewCart"
                            >
                                Giỏ hàng /
                                {{
                                    parseInt(totalPrice).toLocaleString("vi-VN")
                                }}
                                đ
                                <b-icon icon="cart4" font-scale="1.25"></b-icon>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="header__main flex-row">
                <div id="logo" class="header__logo">
                    <router-link class="header__logo-img" to="/">
                        <img
                            src="http://localhost:8000/storage/product/3/unCKbIXgQaoPOwlYYuxE.png"
                            alt=""
                        />
                    </router-link>
                </div>

                <div class="header__nav">
                    <ul class="nav flex-row">
                        <li class="nav__item">
                            <router-link class="nav__item-link" to="/"
                                >Trang chủ</router-link
                            >
                        </li>
                        <li class="nav__item">
                            <router-link class="nav__item-link" to="/Intro"
                                >Giới thiệu</router-link
                            >
                        </li>
                        <li class="nav__item">
                            <router-link
                                class="nav__item-link"
                                :to="{
                                    name: 'StoreListItem',
                                    params: { slug: 'trai-cay', id: 17 },
                                }"
                            >
                                Cửa hàng
                                <b-icon icon="chevron-compact-down"></b-icon>
                            </router-link>
                            <ul class="subnav">
                                <!-- <li class="subnav__item"><a href="#">Rau củ</a></li>
                                <li class="subnav__item"><a href="#">Đồ uống</a></li>
                                <li class="subnav__item"><a href="#">Trái cây</a></li> -->
                                <li
                                    class="subnav__item"
                                    v-for="sub in subMenu"
                                    :key="sub.id"
                                >
                                    <router-link
                                        :to="{
                                            name: 'StoreListItem',
                                            params: {
                                                slug: sub.slug,
                                                id: sub.id,
                                            },
                                        }"
                                    >
                                        {{ sub.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav__item">
                            <router-link
                                href="#"
                                class="nav__item-link"
                                to="/Contact"
                                >Liên hệ</router-link
                            >
                        </li>
                    </ul>
                </div>

                <div class="header__search">
                    <div class="form__search">
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            v-model="productSearch"
                        />
                        <div class="btn-search">
                            <button type="submit" @click="searchProduct">
                                <b-icon icon="search" font-scale="1"></b-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header__main-mobile">
                <label for="nav-mobile-input" class="header__main-mobile__bar">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bars"
                        class="svg-inline--fa fa-bars fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="#33333"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                </label>

                <input
                    type="checkbox"
                    id="nav-mobile-input"
                    style="display: none"
                />

                <label
                    for="nav-mobile-input"
                    class="mobile__bar__overlay"
                ></label>

                <nav class="mobile__bar__nav">
                    <div class="nav-mobile__search">
                        <form action="">
                            <input type="text" placeholder="Tìm kiếm..." />
                        </form>
                    </div>
                    <ul class="nav-mobile__list">
                        <li class="nav-mobile__item" v-if="hasToken">
                            <span class="nav-mobile__item-link" to="/Login"
                                >Xin chào, {{ user.username }}</span
                            >
                        </li>
                        <li class="nav-mobile__item">
                            <router-link class="nav-mobile__item-link" to="/"
                                >Trang chủ</router-link
                            >
                        </li>
                        <li class="nav-mobile__item">
                            <router-link
                                class="nav-mobile__item-link"
                                to="/Intro"
                                >Giới thiệu</router-link
                            >
                        </li>
                        <li class="nav__item">
                            <router-link
                                class="nav-mobile__item-link"
                                :to="{
                                    name: 'StoreListItem',
                                    params: { slug: 'trai-cay', id: 17 },
                                }"
                            >
                                Cửa hàng
                            </router-link>
                        </li>
                        <li class="nav-mobile__item">
                            <a href="#" class="nav-mobile__item-link">
                                <span
                                    class="option-item__product-cart"
                                    @click.prevent="ViewCart"
                                >
                                    Giỏ hàng
                                </span>
                            </a>
                        </li>
                        <li class="nav-mobile__item">
                            <router-link
                                class="nav-mobile__item-link"
                                to="/Contact"
                                >Liên hệ</router-link
                            >
                        </li>
                        <li class="nav-mobile__item" v-if="hasToken">
                            <span
                                class="nav-mobile__item-link"
                                @click.prevent="logoutUser"
                                >Đăng xuất</span
                            >
                        </li>
                        <li class="nav-mobile__item" v-else>
                            <router-link
                                class="nav-mobile__item-link"
                                to="/Login"
                                >Đăng nhập</router-link
                            >
                        </li>
                    </ul>
                </nav>

                <div class="header__main-mobile__logo">
                    <router-link to="/" class="mobile__logo-link">
                        <img
                            src="http://localhost:8000/storage/product/3/unCKbIXgQaoPOwlYYuxE.png"
                            alt=""
                        />
                    </router-link>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import { eventBus } from "../app.js";
const axios = require("axios");
export default {
    components: {},

    data() {
        return {
            totalPrice: 0,
            hasToken: false,
            user: {
                id: "",
                name: "",
                email: "",
            },
            productSearch: "",
            subMenu: [],
        };
    },

    computed: {},

    methods: {
        getPrice() {
            var token = localStorage.getItem("user-token");
            if (token == "") {
                this.totalPrice = 0;
            } else {
                var str = "http://localhost:8060/Store";
                axios
                    .get(str, {
                        headers: {
                            userId: localStorage.getItem("user-id"),
                        },
                    })
                    .then((response) => {
                        this.totalPrice = response.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

        logoutUser() {
            var token = localStorage.getItem("user-token");

            axios
                .get("http://localhost:8060/api/frontend/logout", {
                    headers: {
                        name: token,
                    },
                })
                .then((response) => {
                    if (response.data.code == 200) {
                        this.hasToken = false;
                        this.totalPrice = 0;
                        localStorage.setItem("user-token", "");
                        alert("Logout thành công");
                        this.$router.push({ name: "HomePage" });
                    }
                })
                .catch((error) => {});
        },

        ViewCart() {
            var token = localStorage.getItem("user-token");
            if (token == "") {
                alert("Bạn cần đăng nhập trước khi xem giỏ hàng!");
                this.$router.push({ name: "Login" });
            } else {
                this.$router.push({ name: "ProductCart" });
            }
        },
        searchProduct() {
            this.$router.push({
                name: "StoreSearchItem",
                params: {
                    nameSearch: this.productSearch,
                },
            });
        },
        getSubMenu() {
            axios
                .get("http://localhost:8060/api/frontend/store/listcategory")
                .then((response) => {
                    this.subMenu = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },

    mounted() {
        var token = localStorage.getItem("user-token");

        if (token == "" || token == null) {
        } else {
            this.hasToken = true;
            axios
                .get("http://localhost:8060/api/frontend/getInforUser", {
                    headers: {
                        name: token,
                    },
                })
                .then((response) => {
                    this.user = response.data;
                    localStorage.setItem("user-id", response.data.userid);
                })
                .catch((error) => {});
        }
        this.getPrice();
        this.getSubMenu();
    },

    created() {
        eventBus.$on("productMoney", (money) => {
            this.totalPrice += money;
        });

        eventBus.$on("totalMoneyUpdate", (money) => {
            this.totalPrice = money;
        });
    },
};
</script>

<style scoped>
.flex-row {
    display: flex;
    justify-content: space-between;
    color: var(--text-header-color);
    align-items: center;
    /* width: 100%; */
}

.flex-row li {
    list-style: none;
    display: inline-block;
}

.flex-row a {
    color: var(--text-header-color);
    text-decoration: none;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    box-shadow: 1px 1px 10px rgb(0 0 0 / 15%);
}

.header .header__wrapper {
    height: 141px;
    background-color: var(--white-color);
}

.header__top {
    padding: 8px;
}

.header__top ul {
    padding-left: 0;
    font-size: 12.8px;
    margin-bottom: 0;
}

.header__top li:hover a {
    color: var(--text-color);
}

.header__contact-item:last-child {
    margin-left: 12px;
}

.header__contact-item span {
    padding-left: 12px;
}

.header__option-item:last-child {
    margin-left: 12px;
}

.header__option-item .bi-cart4 {
    margin-left: 4px;
}

.option-item__login.active,
.option-item__register.active,
.option-item__product-cart.active {
    color: var(--primary-color);
}

.option-item__login:hover,
.option-item__register:hover,
.option-item__username:hover,
.option-item__logout:hover,
.option-item__product-cart:hover {
    color: var(--primary-color) !important;
    cursor: pointer;
}

.header__top-left {
    border-right: 1px solid var(--border-color);
    padding-right: 12px;
}

.header__main {
    height: 100px;
}

#logo {
    width: 250px;
}

.header__logo a {
    display: block;
}

.header__logo a img {
    max-width: 100%;
}

.header__nav {
    min-width: 500px;
    font-size: 16px;
}

.nav__item-link {
    width: 120px;
    height: 45px;
    display: block;
    text-align: center;
    line-height: 45px;
    margin: 0 16px;
    border-radius: 8px;
}

.nav__item-link:hover,
.nav__item-link.active {
    color: var(--white-color) !important;
    background-color: var(--primary-color);
}

.nav .nav__item:hover .subnav {
    display: block;
}

.nav > li {
    position: relative;
}

.nav .subnav {
    display: none;
    position: absolute;
    padding-left: 0;
    background-color: var(--white-color);
    border: 1px solid rgba(102, 102, 102, 0.2);
    border-radius: 3px;
    top: 45px;
    left: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    animation: FadeIn ease 0.7s;
}

.nav .subnav li {
    min-width: 200px;
}

.subnav .subnav__item > a {
    width: 100%;
    color: var(--text-color);
    padding: 10px 0px 10px 15px;
    display: inline-block;
}

.subnav .subnav__item > a:hover {
    background-color: rgba(0, 0, 0, 0.03);
    color: rgba(17, 17, 17, 0.85);
}

.header__main .header__search {
    position: relative;
}

.header__search .btn-search {
    position: absolute;
    top: 5px;
    right: 10px;
}

.header__search .btn-search button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
}

.form__search {
    height: 100%;
}

.form__search input {
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.09);
    padding: 5px 10px;
    border-radius: 20px;
}

@keyframes FadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.header__main-mobile {
    display: none;
    display: flex;
}

.header__main-mobile__logo {
    width: 90%;
}

.mobile__logo-link {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
}

.header__main-mobile__logo img {
    display: none;
    width: 230px;
}

.header__main-mobile__bar {
    display: none;
    width: 30px;
    height: 30px;
    margin-top: 30px;
}

#nav-mobile-input:checked ~ .mobile__bar__overlay {
    display: block;
}

#nav-mobile-input:checked ~ .mobile__bar__nav {
    display: block;
    transform: translateX(0);
}

.mobile__bar__overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    animation: FadeIn linear 0.5s;
}

.mobile__bar__nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    max-width: 100%;
    background-color: var(--white-color);
    transform: translateX(-100%);
    transition: transform 0.2s ease;
}

.nav-mobile__search {
    display: flex;
    justify-content: center;
    margin: 12px 0;
}

.nav-mobile__search input {
    outline: none;
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: 8px;
}

.nav-mobile__list {
    padding: 0;
    list-style: none;
}

.nav-mobile__item:first-child span {
    color: var(--primary-color);
}

.nav-mobile__item-link {
    display: block;
    height: 50px;
    line-height: 50px;
    padding-left: 12px;
    text-decoration: none;
    font-size: 18px;
    color: var(--text-color);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.nav-mobile__item-link:hover {
    background-color: #ccc;
}

.mobile__bar-icon {
    color: var(--primary-color);
}

@media (max-width: 1024px) {
    .header__main {
        display: none;
    }

    .header__main-mobile {
        display: flex;
    }

    .header__main-mobile__logo img,
    .header__main-mobile__bar {
        display: block;
    }
}

@media (min-width: 374px) and (max-width: 767px) {
    .header {
        width: 100%;
    }

    .header__contact {
        display: none;
    }

    .header__top {
        width: 100%;
        max-width: 375px;
        justify-content: right;
    }

    .header__main-mobile__bar {
        width: 20px;
        height: 20px;
        margin-top: 30px;
    }

    .header__main-mobile__logo img {
        width: 200px;
    }

    .header__option {
        display: none;
    }

    .header .header__wrapper {
        height: 100px;
    }
}
</style>
