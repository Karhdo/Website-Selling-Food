<template>
    <div class="contact">
        <Header />
        <b-container>
            <b-row>
                <b-col xl="6" sm="12">
                    <div class="contact__img">
                        <img src="http://localhost:8000/storage/product/3/43e4ok8GWNt7GYYe0AIz.jpeg" alt="" />
                    </div>
                </b-col>
                <b-col xl="6" sm="12">
                    <div class="contact__social-network">
                        <a href="#" class="social-network__link">
                            <b-icon icon="geo-alt"></b-icon>
                            <span>123 Hoàng Văn Thụ, Quận 10, TP HCM</span>
                        </a>
                        <a href="#" class="social-network__link">
                            <b-icon icon="instagram"></b-icon>
                            <span>FreshFood2021.media</span>
                        </a>
                        <a href="#" class="social-network__link">
                            <b-icon icon="telephone"></b-icon>
                            <span>0907123456</span>
                        </a>
                        <a href="#" class="social-network__link">
                            <b-icon icon="facebook"></b-icon>
                            <span>Fresh Food Family</span>
                        </a>
                    </div>
                    <div class="contact__form">
                        <form action="#" method="GET">
                            <div class="contact__form-header">LIÊN HỆ VỚI FRESHFOOD</div>
                            <div class="contact__form-info">
                                <input type="text" placeholder="Họ và tên" />
                                <input type="text" placeholder="Số điện thoại" />
                            </div>
                            <div class="contact__form-commnet">
                                <textarea placeholder="Bạn hãy nhập lời nhắn.." name="msg" required></textarea>
                            </div>
                            <div class="contact__form-submit">
                                <input type="submit" value="GỬI" />
                            </div>
                        </form>
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

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style scoped>
.contact {
    margin-top: 141px;
    padding-top: 30px;
}

.contact__img img {
    width: 100%;
}

.contact__social-network {
    display: flex;
    flex-direction: column;
}

.social-network__link {
    color: var(--text-color);
    text-decoration: none;
}

.social-network__link:hover {
    color: var(--primary-color);
}

.social-network__link span {
    margin-left: 24px;
    font-size: 18px;
    line-height: 32px;
}

.contact__form-header {
    text-align: center;
    font-size: 20px;
    margin: 12px 0;
    font-weight: 600;
}

.contact__form-info {
    display: flex;
    justify-content: space-between;
}

.contact__form-info input {
    width: 45%;
    margin-bottom: 12px;
}

.contact__form-commnet textarea {
    width: 100%;
    height: 100px;
}

.contact__form-submit {
    display: flex;
    justify-content: center;
}

.contact__form-submit input {
    color: var(--white-color);
    background-color: var(--primary-color);
    border-color: var(--border-color);
    width: 100px;
    border-radius: 4px;
}
</style>
