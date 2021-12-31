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
- Mở terminal Git Bash tại thư mục htdocs của XAMPP.
- Chạy lệnh `git clone https://github.com/ducducqn123/Website-Selling-Food.git`
### Thêm các File và Folder
- Mở Visual Studio Code.
- Thêm File **.env** vào thự mục **finalproject** có nội dung [env-backend](env_and_image/env_backend.txt).
- Thêm File **.env** vào thự mục **frontend** có nội dung [env-frontend](env_and_image/env_frontend.txt).
- Thêm Folder **product** vào `Website-Selling-Food\finalproject\storage\app\public`
- Thêm Folder **storage** vào `Website-Selling-Food\finalproject\public`
#### Run code:
- Tiếp tục ở terminal vừa clone git repository.  
- Run **serve Back-end**: `cd finalproject`
  - Cài đặt `composer install` 
  - Thực hiện lệnh `php artisan serve`
  - Code Back-end được chạy ở port 8000.
  - User: 19521383@gm.uit.edu.vn/ Password:
- Mở thêm một terminal mới để run **serve Front-end**: `cd frontend`
  - Cài đặt `composer install`  
  - Thực hiện lệnh: `php artisan serve --port=8080`
- Mở thêm một terminal mới chạy giao diện: `cd frontend`
  - Cài đặt `composer install`
  - npm install --save-dev cross-env
  - Thực hiện lệnh: `npm run watch`
  - Code Front-end được chạy ở port 8080.
## Demo
<p align='center'><img style="height: 800px" src="https://github.com/ducducqn123/Website-Selling-Food/blob/ce4ab91b045d777d82beee1935e5df8eed736797/demo.png"></p>
