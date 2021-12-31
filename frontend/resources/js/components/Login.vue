<template>
    <div class="login">
        <Header />
        <b-container>
            <div class="login__form">
                <header class="login__form-header">ĐĂNG NHẬP</header>
                <form action="#" method="GET">
                    <div class="login__form-username">
                        Tên tài khoản hoặc địa chỉ email *<br />
                        <input type="email" placeholder="Nhập tên tài khoản" v-model="form.email"/>
                    </div>
                    <div class="login__form-password">
                        Mật khẩu *<br />
                        <input type="password" v-model="form.password"/>
                    </div>
                    <div class="login__form-submit">
                        <input type="submit" value="ĐĂNG NHẬP" @click.prevent="loginUser"/>
                        <input type="checkbox" checked/> Ghi nhớ mật khẩu
                    </div>
                </form>
                <br />
                <a href="#" class="login__form-forget">Quên mật khẩu ?</a> &nbsp;&nbsp;&nbsp;
                <router-link to="/Register" class="login__form-register">Đăng Ký</router-link>
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
                email: '',
                password: '',
                type: 'user',
            },
            errors: []
        }
    },
    methods: {
        loginUser () {
            axios.post('api/frontend/login', this.form)
            .then(response => {
                if(response.data.code == 200)
                {
                    localStorage.setItem('user-token', response.data.data.token)
                    alert('Đăng nhập thành công')
                    this.$router.push({name: 'HomePage'})
                }
            })
            .catch(error => {
                this.errors = error.response.data.errors;
            })
        }
    }
};
</script>

<style scoped>
.login {
    color: var(--text-color);
    margin-top: 141px;
}

.login__form-header {
    font-size: 24px;
    font-weight: 600;
    margin: 12px 0;
}

.login__form-username input,
.login__form-password input {
    width: 100%;
    margin-top: 8px;
    margin-bottom: 24px;
    height: 40px;
    font-size: 20px;
    outline: none;
    border: 1px solid var(--border-color);
}

.login__form-username input:focus,
.login__form-password input:focus {
    border: none;
    box-shadow: 0 0 5px #ccc;
}

.login__form-submit input[type="submit"] {
    color: var(--white-color);
    background-color: var(--primary-color);
    border: 1px solid var(--border-color);
    width: 150px;
    height: 40px;
}

.login__form-submit input[type="submit"]:hover {
    background-color: #04853c;
}

.login__form-submit input[type="checkbox"] {
    margin: 0 4px 0px 12px;
}

.login__form-forget,
.login__form-register {
    text-decoration: none;
    margin-top: 24px;
    color: var(--text-color);
}

.login__form-forget:hover,
.login__form-register:hover {
    color: var(--primary-color);
}
</style>
