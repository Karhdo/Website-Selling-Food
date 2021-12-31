<template>
    <div class="register">
        <Header />
        <b-container>
            <div class="register__form">
                <header class="register__form-header">ĐĂNG KÝ</header>
                <!-- <form action="#" method="GET">
                </form> -->
                    <div class="register__form-username">
                        Tên tài khoản hoặc địa chỉ email *<br />
                        <input type="text"  v-model="form.email"/>
                    </div>
                    <div class="register__form-name">
                        Họ và Tên *<br />
                        <input type="text"  v-model="form.name"/>
                    </div>
                    <div class="register__form-password">
                        Mật khẩu *<br />
                        <input type="password"  v-model="form.password"/>
                    </div>
                    <div class="register__form-password re-password">
                        Nhập lại mật khẩu *<br />
                        <input type="password"  v-model="form.password_confirmation"/>
                    </div>
                    <div class="register__form-submit">
                        <input type="submit" value="ĐĂNG KÝ" @click="saveForm"/>
                    </div>
            </div>
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
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }, 
            error: []
        }
    },
    methods: {
        saveForm() {
            axios.post('api/frontend/register', this.form)
            .then(response => {
                alert('Đăng ký thành công')
                this.$router.push({name: 'Login'})
            })
            .catch(error => {
                
            })
        }
    }
};
</script>

<style scoped>
.register {
    color: var(--text-color);
    margin-top: 141px;
}

.register__form-header {
    font-size: 24px;
    font-weight: 600;
    margin: 12px 0;
}

.register__form-username input,
.register__form-password input,
.register__form-name input {
    width: 100%;
    margin-top: 8px;
    margin-bottom: 24px;
    height: 40px;
    font-size: 20px;
    outline: none;
    border: 1px solid var(--border-color);
}

.register__form-username input:focus,
.register__form-password input:focus {
    border: none;
    box-shadow: 0 0 5px #ccc;
}

.register__form-submit input[type="submit"] {
    color: var(--white-color);
    background-color: var(--primary-color);
    border: 1px solid var(--border-color);
    width: 150px;
    height: 40px;
}

.register__form-submit input[type="submit"]:hover {
    background-color: #04853c;
}
</style>
