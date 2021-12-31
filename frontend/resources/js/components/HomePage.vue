<template>
    <div class="main">
        <Header />
        <b-container>
            <b-row class="banner">
                <Snowf :amount="50" :size="5" :speed="2" :wind="1" :opacity="0.8" :swing="1" :image="null" :zIndex="null" :resize="true" color="#fff" />
                <div class="banner__content">
                    <div class="banner__text-content">
                        <div class="text-content__first">
                            <span>GIAO TẬN TAY KHÁCH HÀNG</span>
                        </div>

                        <div class="text-content__second">
                            <span>HÀNG SẠCH - GIÁ SIÊU TỐT</span>
                        </div>
                    </div>

                    <div class="banner__btn-buy">
                        <input type="Submit" name="buy" value="MUA NGAY" @click="$router.push({name: 'StoreListItem', params: {slug: 'trai-cay', id: 17}})" />
                    </div>
                </div>
            </b-row>

            <b-row class="new-products">
                <header class="new-products__header">SẢN PHẨM MỚI</header>
                <VueSlickCarousel v-bind="settings" ref="carousel" v-if="newProducts.length">
                    <router-link v-for="newProduct in newProducts" :key="newProduct.id" :to="{name: 'Product', params: {id: newProduct.id}}" class="product__link">
                        <img class="product__img" :src="base_url + newProduct.feature_img_path" alt="" />
                        <div class="product-info">
                            <span class="product-name">{{ newProduct.name }}</span>
                            <span class="product-money">{{ parseInt(newProduct.price).toLocaleString("vi-VN") }}</span>
                        </div>
                    </router-link>
                </VueSlickCarousel>
            </b-row>

            <b-row class="sell-products">
                <header class="sell-products__header">SẢN PHẨM BÁN CHẠY</header>
                <VueSlickCarousel v-bind="settings" ref="carousel" v-if="newProducts.length">
                    <router-link v-for="newProduct in newProducts" :key="newProduct.id" :to="{name: 'Product', params: {id: newProduct.id}}" class="product__link">
                        <img class="product__img" :src="base_url + newProduct.feature_img_path" alt="" />
                        <div class="product-info">
                            <span class="product-name">{{ newProduct.name }}</span>
                            <span class="product-money">{{ parseInt(newProduct.price).toLocaleString("vi-VN") }}</span>
                        </div>
                    </router-link>
                </VueSlickCarousel>
            </b-row>

            <b-row class="service">
                <header class="service__header">DỊCH VỤ CỦA CHÚNG TÔI</header>
                <b-row>
                    <b-col xl="6" md="12">
                        <div class="service__content">
                            <header class="service__content-header">Trái cây đạt chuẩn</header>
                            <div class="service__content-img">
                                <img src="http://localhost:8000/storage/product/3/XI10TtcSJ2c2n2o9jrqv.jpg" alt="" />
                            </div>
                            <span class="service__content-main"> Tại Freshfood, chúng tôi nhập khẩu các loại trái cây, rau củ tươi ngon nhất và đảm bảo nguồn gốc xuất xứ rõ ràng </span>
                        </div>
                    </b-col>

                    <b-col xl="6" md="12">
                        <div class="service__content">
                            <header class="service__content-header">Giao hàng trong 2 giờ</header>
                            <div class="service__content-img">
                                <img src="http://localhost:8000/storage/product/3/LIWYmSPXqsRarXfGKn9d.png" alt="" />
                            </div>
                            <span class="service__content-main"> Chúng tôi cung cấp dịch vụ giao hàng nội thành TP.HCM chỉ 2h để giúp bạn có được trải nghiệm mua hàng tốt nhất. </span>
                        </div>
                    </b-col>
                </b-row>
            </b-row>
        </b-container>
        <Footer />
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import Snowf from "vue-snowf";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
const axios = require('axios');

export default {
    components: {
        Header,
        Snowf,
        VueSlickCarousel,
        Footer,
    },
    data() {
        return {
            base_url: 'http://localhost:8000',
            settings: {
                dots: true,
                focusOnSelect: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                touchThreshold: 5,
                autoplay: true,
                dotsClass: "slick-dots",
            },
            newProducts: [],
            // sellingProducts: [
            // ],
        };
    },
    methods: {
        getNewProducts() {
            axios.get('api/frontend/homepage/listlatestproduct')
            .then(response => {
                this.newProducts = response.data
            })
            .catch(error => {
                console.log(error)
            })

        }
    },
    created() {
        this.getNewProducts();
    }
};
</script>

<style scoped>
.main {
    height: 1500px;
    background-color: var(--white-color);
    margin-top: 141px;
}

.banner {
    padding: 20% 50%;
    background: url("http://localhost:8000/storage/product/3/mG5v0IogI13n3bI7Lzy4.jpg") top center / 100% 100% no-repeat;
    position: relative;
    overflow: hidden;
}

.banner__content {
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    text-align: center;
}

.banner__content .banner__text-content {
    color: #fff;
}

.banner__content .banner__text-content span {
    text-shadow: 2px 6px 8px #292929;
}

.banner__text-content .text-content__first {
    font-size: 40px;
    font-weight: 500;
}

.banner__text-content .text-content__second {
    font-size: 50px;
    font-weight: 700;
}

.banner__content .banner__btn-buy input {
    margin-top: 60px;
    font-size: 18.4px;
    font-weight: 500;
    color: #fff;
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-radius: 10px;
    padding: 10px 20px;
}
.banner__content .banner__btn-buy input:hover {
    background-color: #04803a;
    border: 1px solid #04803a;
    cursor: pointer;
}

.new-products__header,
.sell-products__header,
.service__header {
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 2px;
}

.product__img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
}

.product__link {
    text-decoration: none;
    text-align: center;
}

.product-info {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
}

.product-info .product-name {
    color: var(--text-color);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.product-info .product-money {
    color: var(--primary-color);
}

.sell-products__header,
.service__header {
    margin-top: 60px;
}

.service__content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.service__content .service__content-header {
    font-size: 20px;
    margin: 12px 0;
    font-weight: 600;
    letter-spacing: 1px;
}

.service__content .service__content-img {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
}

.service__content .service__content-img img {
    width: 80%;
}

.service__content .service__content-main {
    width: 80%;
    margin-top: 12px;
    color: var(--text-color);
    font-size: 18px;
    line-height: 30px;
}

/* Mobile */
@media only screen and (max-width: 768px) {
    .banner__text-content .text-content__first {
        font-size: 30px;
    }

    .banner__text-content .text-content__second {
        font-size: 24px;
    }

    .banner__content .banner__btn-buy input {
        margin-top: 4px;
        font-size: 20px;
    }

    .nav__item-link {
        width: 90px;
    }
}

@media (min-width: 374px) and (max-width: 767px) {
    .main {
        margin-top: 100px;
    }

    .product__img {
        width: 60px;
        height: 60px;
    }

    .service__content .service__content-main {
        width: 300px;
    }

    .banner__text-content .text-content__first {
        font-size: 14px;
    }

    .banner__text-content .text-content__second {
        font-size: 20px;
    }

    .banner__content .banner__btn-buy input {
        margin-top: 4px;
        font-size: 10px;
    }

    .service__content-img img {
        margin: 0 auto;
    }
}
</style>
