<template>
    <div class="cart">
        <Header />
        <b-container class="cart__main">
            <b-row>
                <b-col xl="8" md="12">
                    <table class="cart__products">
                        <tr>
                            <td></td>
                            <td></td>
                            <td class="col__name">Sản phẩm</td>
                            <td>Giá</td>
                            <td>Số Lượng</td>
                            <td>Tổng</td>
                        </tr>
                        <tr
                            class="product"
                            v-for="(cartProduct, index) in cartProducts"
                            :key="cartProduct.name"
                        >
                            <td>
                                <button
                                    class="product__btn actionDelete"
                                    @click="removeProduct(index, cartProduct.session_id, totalMoney)"
                                >
                                    x
                                </button>
                            </td>
                            <td>
                                <img
                                    class="product__img"
                                    :src="base_url + cartProduct.image_path"
                                    alt=""
                                />
                            </td>
                            <td class="col__name">
                                <span class="product__name">{{
                                    cartProduct.name
                                }}</span>
                            </td>
                            <td>
                                {{
                                    Number(cartProduct.price).toLocaleString(
                                        "vi-VN"
                                    )
                                }}
                                
                            </td>
                            <td>
                                <button
                                    class="product__btn-qnt"
                                    @click="cartProduct.quantity--, isActive = true"
                                >
                                    -
                                </button>
                                <input
                                    class="product__qnt"
                                    type="text"
                                    readonly
                                    v-model="cartProduct.quantity"
                                    @change="totalMoney"
                                />
                                <button
                                    class="product__btn-qnt"
                                    @click="cartProduct.quantity++, isActive = true"
                                >
                                    +
                                </button>
                            </td>
                            <td>
                                {{
                                    (
                                        cartProduct.price * cartProduct.quantity
                                    ).toLocaleString("vi-VN")
                                }}
                                
                            </td>
                        </tr>
                    </table>
                    <div class="cart__products__btn">
                        <router-link to="/Store" tag="button" class="btn__continue">
                            <b-icon icon="arrow-left"></b-icon>
                            TIẾP TỤC XEM SẢN PHẨM
                        </router-link>
                        <button
                            class="btn__update-cart"
                            name="update-cart"
                            @click="updateCart(totalMoney), isActive = false"
                            v-bind:class="{ active: isActive }"
                        >
                            CẬP NHẬT GIỎ HÀNG
                        </button>
                    </div>
                </b-col>
                <b-col xl="4" md="12">
                    <div class="cart__bill">
                        <header class="bill__header">THANH TOÁN</header>
                        <div class="bill__total-money">
                            Tổng tiền
                            <span>
                                {{ totalMoney.toLocaleString("vi-VN") }} đ</span
                            >
                        </div>
                        <div class="bill__fee">
                            <span>Phí giao hàng</span>
                            <span>Miễn phí</span>
                        </div>
                        <div class="bill__total-value">
                            Tổng giá trị
                            <span>
                                {{ totalMoney.toLocaleString("vi-VN") }} đ</span
                            >
                        </div>
                        <div class="bill__payment">
                            <button @click="payment">THANH TOÁN NGAY</button>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <Footer />
    </div>
</template>

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
            getCartItem: [],
            cartProducts: [],
            isActive: false,
            totalMoneyUpdate: 0,
        };
    },
    props: {
        msg: String,
    },
    computed: {
        totalMoney: function () {
            if (!this.cartProducts) {
                return 0;
            }

            return this.cartProducts.reduce(function (total, cartProduct) {
                return total + Number(cartProduct.price * cartProduct.quantity);
            }, 0);
        },
    },
    methods: {
        removeProduct: function (index, id, totalMoney) {
            var that = this.cartProducts;
            axios
                .get("ProductCart/delete-cart", {
                    params: {
                        'id': id
                    },
                    'headers': {
                        "userId": localStorage.getItem("user-id")
                    }
                })
                .then((response) => {
                    if(response.data.code == 200)
                    {              
                        this.totalMoneyUpdate = totalMoney - (this.cartProducts[index].price * this.cartProducts[index].quantity)
                        eventBus.$emit('totalMoneyUpdate', this.totalMoneyUpdate)
                        that.splice(index, 1);
                    }
                })
                .catch((error) => {
                    console.log(error)
                });         
        },

        getCart: function (getCartItem, cartProducts) {
            axios
                .get("ProductCart/cart", {
                    'headers': {
                        "userId": localStorage.getItem("user-id")
                    }
                })
                .then((response) => {
                    getCartItem = response.data;
                    for (const [key, value] of Object.entries(getCartItem)) {
                        value.session_id = key; // Thêm key vào value
                        cartProducts.push(value);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        updateCart: function (totalMoney) {
            var request = {};
            var that = this.cartProducts;
            this.cartProducts.forEach((element, index) => {
                if(element.quantity == 0)
                {
                    that.splice(index, 1);
                }
                request[element.session_id] = {
                    id: element.session_id,
                    quantity: String(element.quantity),
                };
            });
            
            axios
                .get("ProductCart/update-cart", {
                    params: request,
                    'headers': {
                        "userId": localStorage.getItem("user-id")
                    }
                })
                .then((response) => {
                    if(response.data.code === 200)
                    {
                        // alert('Update thanh cong');                                    
                        this.totalMoneyUpdate = totalMoney
                        eventBus.$emit('totalMoneyUpdate', this.totalMoneyUpdate)
                    }
                })
                .catch((error) => {

                });
        },
        payment() {
            this.$router.push({name: 'Payment'})
        }
    },
    mounted() {
        this.getCart(this.getCartItem, this.cartProducts);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart__main {
    margin-top: 141px;
    border-top: 1px solid var(--border-color);
}

.cart__products {
    width: 100%;
    text-align: center;
}

.cart__products tr:first-child {
    height: 30px;
    font-size: 18px;
    border-bottom: 1px solid var(--border-color);
}

.product__btn {
    border-radius: 100%;
    background-color: var(--white-color);
    border: 1px solid var(--border-color);
}

.product__img {
    width: 100px;
    height: 100px;
}

.product__btn-qnt {
    border: 1px solid var(--border-color);
}

.product__btn-qnt:hover {
    background-color: rgba(211, 210, 210, 0.993);
}

.product__qnt {
    width: 50px;
    text-align: center;
    border: 1px solid var(--border-color);
    outline: none;
}

.cart__products__btn .btn__continue {
    height: 40px;
    margin-top: 24px;
    background-color: var(--white-color);
    border-color: var(--primary-color);
    color: var(--primary-color);
    border-radius: 4px;
}

.cart__products__btn .btn__continue:hover {
    color: var(--white-color);
    background-color: var(--primary-color);
    border-color: var(--border-color);
}

.cart__products__btn .btn__update-cart {
    height: 40px;
    padding: 0 8px;
    margin-left: 20px;
    background-color: var(--primary-color);
    color: var(--white-color);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    opacity: 0.6;
}

.cart__products__btn .btn__update-cart.active{
    opacity: 1;
}

.cart__bill {
    padding: 0 16px;
}

.bill__header {
    height: 30px;
    font-size: 18px;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
}

.bill__total-money,
.bill__fee,
.bill__total-value {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}

.bill__total-money span,
.bill__total-value span {
    color: var(--primary-color);
}

.bill__payment {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.bill__payment button {
    height: 40px;
    background-color: var(--primary-color);
    color: var(--white-color);
    border: 1px solid var(--border-color);
    border-radius: 4px;
}

.bill__payment button:hover {
    background-color: #117e40;
}

@media (min-width: 374px) and (max-width: 767px) {
    .cart__products tr td {
        font-size: 12px;
    }

    .product__btn-qnt{
        width: 15px;
        padding: 0;
    }

    .product__qnt {
        width: 20px;
    }

    .product__img{
        width: 50px;
        height: 50px;
    }

    .col__name {
        width: 100px;
    }

    .product__name{
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .btn__continue {
        width: 240px;
    }

    .cart__products__btn .btn__update-cart {
        margin: 10px 0;
        width: 240px;
    }
}
</style>
