<template>
    <div class="product">
        <Header/>
        <b-container>
            <b-row v-for="item in product" :key="item.id">
                <b-col xl="6">
                    <div class="product__img">
                        <img :src="base_url + item.feature_img_path" alt="" />
                    </div>
                </b-col>
                <b-col xl="6">
                    <div class="product__info">
                        <div class="product__name">
                            <h2>{{ item.name }}</h2>
                        </div>
                        <div class="divide"></div>
                        <div class="product__price">
                            <span
                                >{{
                                    parseInt(item.price).toLocaleString("vi-VN")
                                }}
                                đ</span
                            >
                        </div>
                        <div>
                            <b-icon icon="check" scale="1.5"></b-icon>
                            <span>Gọi mua hàng 090 1234567</span>
                        </div>
                        <div>
                            <b-icon icon="check" scale="1.5"></b-icon>
                            <span>Đổi trả trong 24h</span>
                        </div>
                        <div>
                            <b-icon icon="check" scale="1.5"></b-icon>
                            <span>Đảm bảo tươi ngon</span>
                        </div>
                        <div>
                            <b-icon icon="check" scale="1.5"></b-icon>
                            <span>Giao hàng trực tiếp</span>
                        </div>
                    </div>
                    <div class="product__qnt">
                        <span>Số lượng</span>
                        <button @click="quantity--">-</button>
                        <input type="text" v-model="quantity" readonly />
                        <button @click="quantity++">+</button>
                    </div>
                    <div class="product__btn-add">
                        <button @click="addToCart(item.id, quantity)">
                            THÊM VÀO GIỎ HÀNG
                        </button>
                    </div>
                </b-col>
                <b-col xl="6"> </b-col>
            </b-row>
            <b-row>
                <div class="product__comment">
                    <header class="comment__header">Đánh giá</header>
                    <form class="comment__form" action="#">
                        <span>Nhận xét của bạn</span>
                        <div class="comment__form-input">
                            <textarea
                                placeholder="Bạn hãy nhập lời nhắn.."
                                name="msg"
                                required
                            ></textarea>
                        </div>
                        <div class="comment__form-submit">
                            <input type="submit" value="GỬI" />
                        </div>
                    </form>
                </div>
            </b-row>
        </b-container>
        <Footer />
    </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import {eventBus} from "../app.js";

const axios = require("axios");
export default {
    components: {
        Header,
        Footer,
    },

    data() {
        return {
            base_url: 'http://localhost:8000',
            quantity: 1,
            product: [],
            productMoney: 0
        };
    },

    methods: {
        getProduct() {
            var str = "frontend/product/" + String(this.$route.params.id);
            axios
                .get(str)
                .then((response) => {
                    this.product = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addToCart: function (id, quantity) {
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
                            this.productMoney = this.product[0].price * quantity
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
        this.getProduct();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
    margin-top: 141px;
    padding-top: 30px;
}

.product__img {
    display: flex;
    justify-content: center;
}

.product__img img {
    width: 350px;
    margin: 0 auto;
}

.product__info {
    font-size: 18px;
    color: var(--text-color);
}

.product__info div {
    margin-bottom: 12px;
}

.product__info span {
    margin-left: 16px;
}

.product__name {
    margin-bottom: 0;
}

.product__name h2 {
    margin-bottom: 0;
    font-weight: 700;
}

.product__price span {
    margin-left: 0;
    color: var(--primary-color);
    font-size: 24px;
    font-weight: 700;
}

.divide {
    height: 3px;
    display: block;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 1em 0 1em;
    width: 100%;
    max-width: 30px;
}

.product__qnt {
    font-size: 18px;
    color: var(--text-color);
}

.product__qnt span {
    margin-right: 12px;
}

.product__qnt input {
    text-align: center;
    width: 50px;
    border: 1px solid var(--border-color);
    outline: none;
}

.product__qnt button {
    border: 1px solid var(--border-color);
}

.product__btn-add {
    margin-top: 20px;
}

.product__btn-add button {
    height: 40px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    color: var(--white-color);
    background-color: var(--primary-color);
}

.product__btn-add button:hover,
.comment__form input:hover {
    background-color: #05803a;
}

.product__comment {
    margin-top: 50px;
}

.comment__header {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-color);
}

.comment__form {
    margin-top: 12px;
}

.comment__form textarea {
    width: 100%;
    height: 150px;
}

.comment__form input {
    height: 40px;
    width: 100px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    color: var(--white-color);
    background-color: var(--primary-color);
}
</style>
