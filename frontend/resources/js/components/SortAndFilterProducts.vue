<template>
    <div class="store">
        <Header />
        <b-container class="bv-example-row">
            <b-row>
                <div class="category-mobile">
                    <ul class="category-mobile__list" v-for="category in categories" :key="category.id">
                        <li class="category__item">
                            <!-- <router-link 
                                class="category__item-link" 
                                :class="{ active: isActive(category.slug) }" 
                                :to="{name: 'StoreListItem', params: {slug: category.slug, id: category.id}}"
                                >{{ category.name }}</router-link> -->
                            <span
                                class="category__item-link"
                                :class="{ active: isActive(category.slug) }" 
                                :to="{name: 'StoreListItem', params: {slug: category.slug, id: category.id}}"
                                >{{ category.name }}</span>
                        </li>
                    </ul>
                </div>
                <div class="price-order">
                    <b-form-select class="arr-form" v-model="selected" :options="options" @change="SortItem"></b-form-select>
                </div>
            </b-row>
            <b-row class="content">
                <b-col xl="4">
                    <div class="category">
                        <header class="category__header">DANH MỤC SẢN PHẨM</header>
                        <ul class="category__list" v-for="category in categories" :key="category.id">
                            <li class="category__item">
                            <router-link 
                                class="category__item-link" 
                                :class="{ active: isActive(category.slug) }" 
                                :to="{name: 'StoreListItem', params: {slug: category.slug, id: category.id}}"
                                >{{ category.name }}</router-link>                                   
                            </li>
                        </ul>
                    </div>
                    <div class="filter-price">
                        <header class="filter-price__header">LỌC THEO GIÁ</header>
                        <div class="filter-price__slider">
                            <Slider class="slider-input" v-model="value" :min="20000" :max="500000" :format="format" :step="10000" :tooltips="false" />

                            <div class="slider-output">{{ value[0].toLocaleString("vi-VN") }} đ - {{ value[1].toLocaleString("vi-VN") }} đ</div>

                            <div class="btn-filter">
                                <b-button variant="success" @click = "filterProducts(activeItem, activeItemId, value)">Lọc</b-button>
                            </div>
                        </div>
                    </div>
                    <div class="selling-products">
                        <div class="selling-products__header">SẢN PHẨM</div>
                        <ul class="selling-products__list">
                            <li class="selling-products__item">
                                <router-link :to="{name: 'Product', params: {id: 12}}" class="selling-products__item-link">
                                    <div class="selling-products__item-img">
                                        <img class="selling-products__item-img" src="http://localhost:8000/storage/product/3/WS8Sq2LITGLgsdS9Wt0M.jpg" alt="" />
                                    </div>
                                    <div class="selling-products__item-info">
                                        <span class="name">Bắp cải tím</span>
                                        <span class="money">38.000 đ</span>
                                    </div>
                                </router-link>
                            </li>                             
                            <li class="selling-products__item">
                                <router-link :to="{name: 'Product', params: {id: 49}}" class="selling-products__item-link">
                                    <div class="selling-products__item-img">
                                        <img class="selling-products__item-img" src="http://localhost:8000/storage/product/3/UZBKftPHkX4rvw6YwUWB.jpg" alt="" />
                                    </div>
                                    <div class="selling-products__item-info">
                                        <span class="name">Dưa hấu</span>
                                        <span class="money">25.000 đ</span>
                                    </div>
                                </router-link>
                            </li>
                            <li class="selling-products__item">
                                <router-link :to="{name: 'Product', params: {id: 37}}" class="selling-products__item-link">
                                    <div class="selling-products__item-img">
                                        <img class="selling-products__item-img" src="http://localhost:8000/storage/product/3/VaoM5VJZVuGS8R9a7TZh.jpg" alt="" />
                                    </div>
                                    <div class="selling-products__item-info">
                                        <span class="name">Xoài cát Hoà Lộc</span>
                                        <span class="money">65.000 đ</span>
                                    </div>
                                </router-link>
                            </li>
                            <li class="selling-products__item">
                                <router-link :to="{name: 'Product', params: {id: 36}}" class="selling-products__item-link">
                                    <div class="selling-products__item-img">
                                        <img class="selling-products__item-img" src="http://localhost:8000/storage/product/3/NIcN0JVQMLIe7Js9XTLs.jpg" alt="" />
                                    </div>
                                    <div class="selling-products__item-info">
                                        <span class="name">Thanh long</span>
                                        <span class="money">35.000 đ</span>
                                    </div>
                                </router-link>
                            </li>                           
                        </ul>
                    </div>
                </b-col>
                <b-col class="home-products" xl="8">
                    <b-row>
                        <b-col class="home-products-list">
                            <div v-for="product in products.data" :key="product.id" class="home-products-item">
                                <router-link :to="{name: 'Product', params: {id: product.id}}">
                                    <img class="home-products-item__img" :src="base_url + product.feature_img_path" alt="" />
                                    <h5 class="home-products-item__name">{{ product.name }}</h5>
                                    <div class="home-products-item__price">
                                        <span>{{ parseInt(product.price).toLocaleString("vi-VN") }} đ</span>
                                    </div>                                
                                </router-link>
                                <button class="home-products-item__btn" @click="addToCart(product.id, 1, product.price)">Thêm vào giỏ</button>

                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <div class="pagination-nav">
                            <pagination 
                                :data = "products"
                                @pagination-change-page="getResults"></pagination>
                        </div>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
        <Footer />
    </div>
</template>

<script>
import Slider from "@vueform/slider/dist/slider.vue2.js";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Paginate from 'vuejs-paginate'
import Pagination from 'laravel-vue-pagination'
import {eventBus} from "../app.js";
const axios = require('axios');
require('vue-resource');

export default {
    components: {
        Header,
        Slider,
        Footer,
        Paginate,
        Pagination
    },
    name: "Store",
    data() {
        return {
            base_url: 'http://localhost:8000',
            value: [20000, 500000],
            format: {
                thousand: ",",
                suffix: "đ",
                decimals: 0,
            },
            selected: null,
            productMoney: 0,
            activeItem: 'trai-cay',
            activeItemId: 17,
            options: [
                { value: null, text: "Thứ tự mặc định" },
                { value: "increase", text: "Sắp xếp theo giá tăng dần" },
                { value: "decrease", text: "Sắp xếp theo giá giảm dần" },
            ],
            products: {},
            categories: [],
        };
    },
    props: {    
        msg: String,
    },
    computed: {
        activeClass: function () {
            return this.$data.isActive ? "active" : "";
        },

        filteredItems: function () {

        }
    },
    methods: {
        isActive: function (categorySlug) {
            return this.activeItem === categorySlug;
        },
        setActive: function (slug, categoryId) {
            this.activeItem = slug; // no need for Vue.set()

        },
        getListCategory() {

            axios.get('http://localhost:8060/api/frontend/store/listcategory')
            .then(response => {
                this.categories = response.data
            })
            .catch(error => {
                console.log(error)
            })   
        },

        clickCallback: function(pageNum) {
         
        },
        getResults(page) {
            if (typeof page === 'undefined') {
                page = 1;
            }
            var myarg = this.$route.params.name_sort;
            var min_price = this.value[0];
            var max_price = this.value[1];
            var str = 'http://localhost:8060/api/frontend/store/sortandfilterproduct';
            axios.get(str, {
                params: {
                    name: String(myarg),
                    category_id: this.activeItemId,
                    min: min_price,
                    max: max_price,
                    page: page
                }
            })
            .then(response => {
                this.products = response.data
            })
            .catch(error => {

            })
        },
        SortItem: function(myarg){
            
            this.$router.push({
                name: 'StoreSort',
                params: {
                    slug: this.activeItem,
                    name_sort: myarg,
                    category_id: this.activeItemId
                }
            })
        }, 
        getRoute(slug, id) {
            this.$router.push({
                name: 'StoreListItem',
                params: {
                    slug: slug,
                    id: id
                }
            }).catch(()=>{})
        },
        filterProducts: function(activeItem, activeItemId, value) {
            
        },

        addToCart: function (id, quantity, price) {
            var token = localStorage.getItem('user-token');
            if(token == '')
            {
                alert('Bạn cần phải đăng nhập để thêm vào giỏ hàng!')
                this.$router.push({name: 'Login'})
            }
            else
            {
                var userId = localStorage.getItem("user-id")
                var urlCart =
                    "http://localhost:8060/Product/frontend/product/add-to-cart/" + id + "/" + quantity + "/" + userId;
                axios
                    .get(urlCart)
                    .then((response) => {
                        if(response.data.code == 200) {
                            this.productMoney = price
                            eventBus.$emit('productMoney', this.productMoney)
                        }                    
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
    },
    mounted() {
        this.activeItem = this.$route.params.slug;
        this.activeItemId = this.$route.params.id;
        this.value[0] = this.$route.params.min;
        this.value[1] = this.$route.params.max;
        this.selected = this.$route.params.name_sort
        this.getListCategory();
        this.getResults();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="@vueform/slider/themes/default.css"></style>
<style >
.store {
    margin-top: 141px;
    padding-top: 30px;
}

.price-order {
    display: flex;
    justify-content: flex-end;
}

.arr-form {
    padding: 4px 8px;
    border-radius: 2px;
    width: 250px;

    /* Replace default styling (arrow) */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='50'><polygon points='0,0 100,0 50,50' style='fill:%23666666;'/></svg>");
    background-position: right 10px top 50%;
    background-repeat: no-repeat;
    background-size: 10px;
}

.category-mobile {
    display: none;
}

.category-mobile__list {
    padding: 0;
    display: flex;
    list-style: none;
}

.category-mobile__item-link {
    display: block;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    color: var(--text-color);
    border-radius: 8px;
    border: 1px solid var(--border-color);
    margin-right: 12px;
    height: 40px;
    width: 80px;
}

.category-mobile__item-link:hover,
.category-mobile__item-link.router-link-active {
    color: var(--white-color);
    background-color: var(--primary-color);
}

.category {
    border-bottom: 1px solid var(--border-color);
    width: 300px;
}

.category__header,
.filter-price__header,
.selling-products__header {
    width: 250px;
    height: 50px;
    margin: 0px auto;
    margin-top: 16px;
    background-color: var(--primary-color);
    color: var(--white-color);
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid var(--border-color);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
}

.category__list {
    padding: 0;
    list-style: none;
    margin-bottom: 0;
}

.category__list:last-child{
    padding-bottom: 15px;
}

.category__item-link {
    display: block;
    margin: 0px auto;
    width: 250px;
    height: 45px;
    border-bottom: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    text-decoration: none;
    color: black;
    font-size: 16px;
    line-height: 45px;
    text-align: center;
}

.category__item:last-child .category__item-link {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.category__item-link:hover,
.category__item-link.router-link-active {
    color: white;
    background-color: var(--primary-color);
}

.filter-price {
    height: 180px;
    width: 300px;
    border-bottom: 1px solid var(--border-color);
}

.filter-price__header {
    border-bottom: none;
}

.filter-price__slider {
    width: 250px;
    margin: 0px auto;
    border: 1px solid #ccc;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.slider-input {
    width: 160px;
    margin: 16px auto;
}

.slider-output {
    text-align: center;
    font-size: 16px;
}

.btn-filter {
    text-align: center;
}

.btn-filter button {
    background-color: var(--primary-color);
    padding: 0;
    margin: 12px 0;
    width: 40px;
    height: 25px;
    line-height: 25px;
    border-radius: 8px;
}

.selling-products {
    width: 300px;
    height: 350px;
}

.selling-products__list {
    padding: 0;
    list-style: none;
}

.selling-products__item:last-child .selling-products__item-link {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.selling-products__item-link {
    height: 75px;
    width: 250px;
    padding: 4px 0;
    margin: 0 auto;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    text-decoration: none;
    display: flex;
}

.selling-products__item-img {
    width: 40%;
}

.selling-products__item-img img {
    width: 65px;
    height: 55px;
    margin-left: 24px;
}

.selling-products__item-info {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.selling-products__item-info .name {
    text-align: center;
    color: var(--text-color);
    font-weight: 500;
    font-size: 16px;
}

.selling-products__item-info .money {
    text-align: center;
    color: var(--primary-color);
    font-size: 16px;
}

.home-products-list {
    display: flex;
    flex-wrap: wrap;
}

.home-products-item {
    height: 215px;
    width: 24%;
    padding: 4px;
    margin: 12px 32px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.home-products-item:hover {
    transform: translateY(-4px);
}

.home-products-item a{
    text-decoration: none;
}

.home-products-item__img {
    height: 120px;
    width: 160px;
    margin: 0 auto;
}

.home-products-item__name {
    color: var(--text-color);
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.home-products-item__price {
    color: var(--primary-color);
}

.home-products-item__btn {
    width: 140px;
    margin: 4px auto;
    background-color: var(--primary-color);
    color: var(--white-color);
    border: 1px solid var(--border-color);
}

.home-products-item__btn:hover {
    background-color: #037c38;
}

.pagination-nav {
    display: flex;
    justify-content: center;
    margin-top: 8px;
}

.pagination .page-item a{
    color: var(--primary-color);    
}

.pagination .page-item.active a{
    background-color: var(--primary-color);
}

/* Mobile */
@media only screen and (max-width: 1200px) {
    .category,
    .filter-price,
    .selling-products {
        display: none;
    }

    .category-mobile {
        display: flex;
        justify-content: center;
    }

    .price-order {
        display: none;
    }
}

@media (min-width: 374px) and (max-width: 767px) {
    .category,
    .filter-price,
    .selling-products {
        display: none;
    }

    .home-products-item {
        width: 40%;
        margin: 12px 16px;
    }

    .home-products-item__img {
        width: 100px;
        height: 110px;
    }

    .home-products-item__name {
        font-size: 14px;
    }
}

</style>
