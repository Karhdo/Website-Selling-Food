<template>
    <div class="cart">
        <Header />
        <b-container class="payment__main">
            <b-row>
                <b-col xl="8" md="12">
                    <div class="custumer-info">
                        <header class="info__header">THÔNG TIN KHÁCH HÀNG</header>
                        <div class="info__name">
                            <span>Họ và tên *</span>
                            <input class="info__name__input" type="text" placeholder="Nguyễn Văn A" v-model="form.name"/>
                        </div>
                        <div class="info__address">
                            <span>Địa chỉ *</span>
                            <input class="info__address__input" type="text" placeholder="32 Hùng Vưương, phường Trần Phú" v-model="form.address"/>
                        </div>
                        <div class="info__city">
                            <span>Tỉnh/ Thành phố *</span>
                            <input class="info__city__input" type="text" placeholder="Quảng Ngãi" v-model="form.country"/>
                        </div>
                        <div class="info__phone-number">
                            <span>Số điện thoại *</span>
                            <input class="info__phone-number__input" type="text" placeholder="0123456789" v-model="form.phoneNumber"/>
                        </div>
                        <div class="info__phone-email">
                            <span>Địa chỉ email *</span>
                            <input class="info__email__input" type="text" placeholder="vana@gmail.com" v-model="form.email"/>
                        </div>
                    </div>
                    <div class="product-notes">
                        <header class="product-notes__header">Ghi chú cho đơn hàng (tuỳ chọn)</header>
                        <textarea class="product-notes__textarea" v-model="form.note"></textarea>
                    </div>
                </b-col>
                <b-col xl="4" md="12">
                    <div class="custumer-oder">
                        <header class="order__header">ĐƠN HÀNG CỦA BẠN</header>
                        <table class="order__table">
                            <tr>
                                <th>SẢN PHẨM</th>
                                <th>THÀNH TIỀN</th>
                            </tr>
                            <tr class="product" v-for="cartProduct in cartProducts" :key="cartProduct.name">
                                <td>{{ cartProduct.name }} x {{ cartProduct.quantity }}</td>
                                <td>{{ (cartProduct.price * cartProduct.quantity).toLocaleString("vi-VN") }} đ</td>
                            </tr>
                            <tr>
                                <td>Tổng tiền</td>
                                <td>{{ totalMoney.toLocaleString("vi-VN") }} đ</td>
                            </tr>
                        </table>
                    </div>
                    <div class="order__payment">
                        <button @click.prevent="orderCart">ĐẶT HÀNG</button>
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
const axios = require("axios");
export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            cartProducts: [],
            form: {
                name: '',
                address: '',
                country: '',
                phoneNumber: '',
                email: '',
                note: '',
                total_money: 0
            }
        };
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
        removeProduct: function (index) {
            this.cartProducts.splice(index, 1);
        },

        orderCart: function() {
            this.form.total_money =  this.totalMoney
            axios.post("ProductCart/order-cart", this.form,{
                'headers': {
                    "userId": localStorage.getItem("user-id")
                }, 
            })
            .then(response => {
                if(response.data.code == 200) {
                    alert('Đặt hàng thành công!');
                    this.$router.push({name:'HomePage'})
                }
                else {
                    alert('Không tồn tại sản phẩm trong giỏ hàng')
                }
            })
            .catch(error => {
                alert('Vui lòng nhập đầy đủ thông tin!')
            })
        }
    },
    mounted() {
        axios.get("ProductCart/cart", {
                'headers': {
                    "userId": localStorage.getItem("user-id")
                }
            })
            .then((response) => {
                var getCartItem = response.data;
                for (const [key, value] of Object.entries(getCartItem)) {
                    value.session_id = key; // Thêm key vào value
                    this.cartProducts.push(value);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
};
</script>

<style scoped>
.payment__main {
    margin-top: 144px;
}

header {
    font-weight: 600;
}

.info__header,
.order__header {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.info__name span,
.info__address span,
.info__city span,
.info__phone-number span,
.info__phone-email span {
    display: block;
    font-weight: 600;
}

.info__name input,
.info__address input,
.info__city input,
.info__phone-number input,
.info__phone-email input {
    width: 100%;
    margin-bottom: 12px;
}

.product-notes__textarea {
    width: 100%;
    height: 100px;
}

.order__table {
    width: 100%;
}

.order__table td {
    padding: 16px 0;
}

.order__payment button {
    margin-top: 24px;
    padding: 4px 20px;
    background-color: var(--primary-color);
    color: var(--white-color);
    border: 1px solid var(--border-color);
    border-radius: 4px;
}

.order__payment button:hover {
    background-color: #06803b;
}
</style>
