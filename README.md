# Website Selling Food
## Các công nghệ sử dụng
- Front-end: HTML, CSS, Javascript, VueJS, Laravel.
- Back-end: Laravel, MySQL.
## Yêu cầu và Hướng dẫn sử dụng
### Yêu cầu
- Git Bash, Visual Studio Code.
- Back-end: **PHP** version 7.4.25, **Laravel** version 5.8.38.
- Front-end: **NodeJS**, **VueJS** version 2, **Laravel** version 7.30.6.
### Hướng dẫn sử dụng
#### Clone git repository
- Khởi động XAMPP.
- Mở terminal Git Bash tại thư mục htdocs của XAMPP.
- Chạy lệnh `git clone https://github.com/ducducqn123/Website-Selling-Food.git`
#### Import database
- Mở trang **phpMyAdmin**.
- Tạo database mới có tên: selling_food
- Improt database [project.sql](env_and_database/selling_food.sql) vào trang **phpMyAdmin**.
#### Download Composer
- Vào đường link https://getcomposer.org/download/ chọn Composer-Setup.exe để tải composer
#### Run code:
- Tiếp tục ở terminal vừa clone git repository.  
- Run **serve Back-end**: `cd finalproject`
  - Thực hiện lệnh `php artisan serve`
  - Code Back-end được chạy ở port 8000.
  - User: 19521383@gmail.com/ Password: 123123123
- Mở thêm một terminal mới để run **serve Front-end**: `cd frontend`
  - Cài đặt `composer install`  
  - Thực hiện lệnh: `php artisan serve --port=8060`
- Mở thêm một terminal mới chạy giao diện: `cd frontend`
  - Cài đặt `npm install --save-dev cross-env`
  - Thực hiện lệnh: `npm run watch`
  - Code Front-end được chạy ở port 8060.
## Demo
<p align='center'><img style="height: 800px" src="https://github.com/ducducqn123/Website-Selling-Food/blob/ce4ab91b045d777d82beee1935e5df8eed736797/demo.png"></p>
