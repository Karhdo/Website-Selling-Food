<template>
    <div class="footer">
        <b-container>
            <b-row>
                <b-col md="2" sm="12">
                    <div class="footer__purchase">
                        <header>MUA HÀNG</header>
                        <span>Trái cây tươi</span>
                        <span>Quà tặng trái cây</span>
                        <span>Hạt - trái cây khô</span>
                        <span>Dịch vụ quà doanh nghiệp</span>
                    </div>
                </b-col>
                <b-col md="2" sm="12">
                    <div class="footer__discount">
                        <header>KHUYẾN MÃI</header>
                        <span>Hot Deal</span>
                        <span>Discount</span>
                        <span>Ưu đã theo dịp lễ</span>
                        <span>Voucher</span>
                    </div>
                </b-col>
                <b-col md="2" sm="12">
                    <div class="footer__support">
                        <header>HỖ TRỢ</header>
                        <span>Khách hàng thân thiết</span>
                        <span>Chính sách vận chuyển</span>
                        <span>Thiết kế theo yêu cầu</span>
                        <span>Theo dõi đơn hàng</span>
                    </div>
                </b-col>
                <b-col md="2" sm="12">
                    <div class="footer__intro">
                        <header>GIỚI THIỆU</header>
                        <span>Về Freshfood</span>
                        <span>Tuyển dụng</span>
                        <span>Chính sách bảo mật</span>
                        <span>Hợp tác và liên kết</span>
                    </div>
                </b-col>
                <b-col md="4" sm="12">
                    <div class="footer__contact">
                        <header>KẾT NỐI VỚI CHHÚNG TÔI</header>
                        <div class="conntact__social-network">
                            <a class="social-network__link" href=""> <b-icon font-scale="1.3" icon="telephone"></b-icon> </a>
                            <a class="social-network__link" href=""> <b-icon font-scale="1.3" icon="mailbox"></b-icon> </a>
                            <a class="social-network__link" href=""> <b-icon font-scale="1.3" icon="instagram"></b-icon> </a>
                            <a class="social-network__link" href=""> <b-icon font-scale="1.3" icon="facebook"></b-icon> </a>
                        </div>
                        <span>ĐĂNG KÝ NHẬN ƯU ĐÃI TỪ FRESHFOOD</span>
                        <input type="text" placeholder="Nhập địa chỉ Email ...." />
                    </div>
                </b-col>
            </b-row>
            <b-row class="footer__copyright">
                <span> &copy; Bản quyền thuộc về UIT-DHQG. Thiết kế website FreshFood </span>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    components: {},
};
</script>

<style scoped>
.footer {
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    padding: 50px 0 12px 0;
    margin-top: 50px;
    background-color: #252932;
}

.footer__purchase,
.footer__discount,
.footer__support,
.footer__intro,
.footer__contact {
    display: flex;
    flex-direction: column;
}

.footer__contact {
    text-align: center;
}

.footer__contact input {
    width: 100%;
    margin: 8px auto;
    padding: 0 16px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
}

header {
    color: var(--white-color);
    font-size: 18px;
}

span {
    color: #666;
    font-size: 16px;
    line-height: 32px;
}

.conntact__social-network {
    margin: 12px 0 8px 0;
}

.social-network__link {
    color: #666;
    text-decoration: none;
    margin: 4px;
}

.footer__copyright {
    margin-top: 50px;
    text-align: center;
    color: #666;
}

/* Mobile */
@media (min-width: 374px) and (max-width: 767px) {
    .footer__purchase,
    .footer__discount,
    .footer__support,
    .footer__intro,
    .footer__contact {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
}
</style>
