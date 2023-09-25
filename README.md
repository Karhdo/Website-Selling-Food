# Website Selling Food
## Technologies Used
- Front-end: HTML, CSS, Javascript, VueJS, Laravel.
- Back-end: Laravel, MySQL.

## Requirements and Usage Instructions
### Requirements
- Git Bash, Visual Studio Code.
- PHP version 7.4.25, NodeJS, VueJS version 2.

### Usage Instructions
#### Clone the Git Repository
- Start XAMPP.
- Open the Git Bash terminal in the htdocs directory of XAMPP.
- Run the command `git clone https://github.com/ducducqn123/Website-Selling-Food.git`.

#### Import the Database
- Open the **phpMyAdmin** page.
- Create a new database named: selling_food.
- Import the database [selling_food.sql](database/selling_food.sql) into the **phpMyAdmin** page.

#### Download Composer
- Go to the link [Composer Download](https://getcomposer.org/download/) and select Composer-Setup.exe to download Composer.

#### Run the Code
- Continue in the terminal where you cloned the Git repository.
- Run **serve Back-end**: `cd finalproject`
  - Execute the command `php artisan serve`
  - The Back-end code will run on port 8000 (localhost:8000/admin).
  - User: 19521383@gmail.com / Password: 123123123.

- Open a new terminal to run **serve Front-end**: `cd frontend`
  - Execute the command: `php artisan serve --port=8060`.

- Open another new terminal to run the interface: `cd frontend`
  - Install `npm install --save-dev cross-env`
  - Execute the command: `npm run watch`
  - The Front-end code will run on port 8060 (localhost:8060).

## Demo
![Demo Image](https://github.com/ducducqn123/Website-Selling-Food/blob/ce4ab91b045d777d82beee1935e5df8eed736797/demo.png)
