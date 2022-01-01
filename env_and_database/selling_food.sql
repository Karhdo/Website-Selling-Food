-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2022 at 02:01 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `selling_food`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `parent_id`, `slug`, `created_at`, `updated_at`, `deleted_at`) VALUES
(17, 'Trái cây', 0, 'trai-cay', '2021-12-01 07:54:29', '2021-12-01 07:54:29', NULL),
(18, 'Rau củ', 0, 'rau-cu', '2021-12-01 07:54:35', '2021-12-01 07:54:35', NULL),
(19, 'Đồ uống', 0, 'do-uong', '2021-12-01 07:54:41', '2021-12-01 07:54:41', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `parent_id`, `created_at`, `updated_at`, `slug`, `deleted_at`) VALUES
(17, 'Rau củ', 0, '2021-12-30 21:34:44', '2021-12-31 00:00:56', 'rau-cu', '2021-12-31 00:00:56'),
(18, 'Đồ uống', 0, '2021-12-30 21:34:58', '2021-12-31 00:00:58', 'do-uong', '2021-12-31 00:00:58'),
(19, 'Trái cây', 0, '2021-12-30 21:35:09', '2021-12-31 00:01:00', 'trai-cay', '2021-12-31 00:01:00');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(4, '2014_10_12_000000_create_users_table', 1),
(5, '2014_10_12_100000_create_password_resets_table', 1),
(6, '2021_11_28_025809_create_categories_table', 1),
(7, '2021_11_28_102912_add_column_deleted_at_table_categories', 2),
(8, '2021_11_28_110504_create_menus_table', 3),
(9, '2021_11_28_134815_add_column_slug_to_menus_table', 4),
(10, '2021_11_28_144014_add_column_soft_delete_to_menu_table', 5),
(11, '2021_11_29_040642_create_products_table', 6),
(12, '2021_11_29_111154_add_column_feature_image_name', 7),
(13, '2021_11_30_044253_add_column_deleted_at_to_product_table', 8),
(14, '2021_11_30_100728_create_settings_table', 9),
(15, '2021_11_30_134133_add_column_type_settings_table', 10),
(16, '2019_08_19_000000_create_failed_jobs_table', 11),
(17, '2021_12_19_110105_create_session_customers_table', 11),
(18, '2021_12_19_112354_add_type_to_users_table', 12),
(21, '2021_12_28_135341_create_transactions_table', 13),
(22, '2021_12_28_135443_create_orders_table', 13);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_price` int(11) NOT NULL,
  `quantity` int(191) NOT NULL,
  `transaction_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `product_id`, `product_name`, `product_price`, `quantity`, `transaction_id`, `created_at`, `updated_at`) VALUES
(5, 12, 'Bắp cải tím', 38000, 1, 5, '2021-12-29 01:26:24', '2021-12-29 01:26:24'),
(6, 31, 'Nải chuối', 35000, 2, 5, '2021-12-29 01:26:24', '2021-12-29 01:26:24'),
(7, 31, 'Nải chuối', 35000, 1, 6, '2021-12-30 21:10:28', '2021-12-30 21:10:28'),
(8, 32, 'Trái dừa', 15000, 1, 6, '2021-12-30 21:10:28', '2021-12-30 21:10:28'),
(9, 35, 'Trái ổi', 25000, 1, 6, '2021-12-30 21:10:28', '2021-12-30 21:10:28'),
(10, 33, 'Trái mãng cầu', 70000, 1, 6, '2021-12-30 21:10:28', '2021-12-30 21:10:28'),
(11, 30, 'Trái chôm chôm', 30000, 1, 7, '2022-01-01 04:27:22', '2022-01-01 04:27:22'),
(12, 31, 'Nải chuối', 35000, 1, 7, '2022-01-01 04:27:23', '2022-01-01 04:27:23');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(191) NOT NULL,
  `feature_img_path` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `feature_image_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `feature_img_path`, `content`, `user_id`, `category_id`, `created_at`, `updated_at`, `feature_image_name`, `deleted_at`) VALUES
(11, 'Bắp cải trắng', 19000, '/storage/product/3/qh4675Mun5vqiSGe51No.jpg', 'Bắp cải trắng rất ngon', 3, 18, '2021-12-01 08:06:10', '2021-12-01 08:10:09', 'bapcai.jpg', NULL),
(12, 'Bắp cải tím', 38000, '/storage/product/3/WS8Sq2LITGLgsdS9Wt0M.jpg', 'Bắp cải tím rất ngon', 3, 18, '2021-12-01 08:06:58', '2021-12-01 08:10:02', 'bapcaitim.jpg', NULL),
(13, 'Cải bó xôi', 15000, '/storage/product/3/UM89mTaMYg4jCfjJIAb5.jpeg', 'Cải bó xôi rất ngon', 3, 18, '2021-12-01 08:07:56', '2021-12-01 08:09:56', 'caiboxoi.jpeg', NULL),
(14, 'Cà rốt', 17000, '/storage/product/3/oEwm4wySkv0NpOKCoKRi.jpg', 'Cà rốt rất ngon', 3, 18, '2021-12-01 08:08:35', '2021-12-01 08:09:50', 'carot.jpg', NULL),
(18, 'Gừng thường', 20000, '/storage/product/3/aCaUYy7GPBaM9uOqOwc0.jpg', 'Gừng ngon', 3, 18, '2021-12-01 08:15:06', '2021-12-01 08:15:06', 'gung.jpg', NULL),
(19, 'Súp lơ xanh', 16000, '/storage/product/3/6FpUcEcoyJ33yL02fcWm.jpg', 'Súp lơ ngon', 3, 18, '2021-12-01 08:15:37', '2021-12-01 08:15:37', 'suploxanh.jpg', NULL),
(20, 'Rau muống', 9000, '/storage/product/3/uyAQ9VPmNBu2uy3W6ZTI.jpg', 'Rau muống ngon', 3, 18, '2021-12-02 09:29:14', '2021-12-02 09:29:14', 'raumuong.jpg', NULL),
(30, 'Trái chôm chôm', 30000, '/storage/product/3/mI18nvgF0cteRpYNHOi3.png', 'Chôm chôm ngon', 3, 17, '2021-12-03 09:30:17', '2021-12-03 09:30:17', 'chomchom.png', NULL),
(31, 'Nải chuối', 35000, '/storage/product/3/GB14jFDLJ6E7owi6ESbJ.jpg', 'Chuối ngon', 3, 17, '2021-12-03 09:31:16', '2021-12-03 09:31:16', 'chuoi.jpg', NULL),
(32, 'Trái dừa', 15000, '/storage/product/3/lIZaOvQeL8yTqRjkrbBj.png', 'Dừa ngon', 3, 17, '2021-12-03 09:32:00', '2021-12-03 09:32:00', 'dua.png', NULL),
(33, 'Trái mãng cầu', 70000, '/storage/product/3/JAOqajHWKcZU0pnEJbJx.jpg', 'Mãng cầu ngon', 3, 17, '2021-12-03 09:32:41', '2021-12-03 09:32:41', 'mangcau.jpg', NULL),
(34, 'Trái măng cụt', 38100, '/storage/product/3/DL9HscOBrSaQdQqjGD28.jpg', 'Măng cụt ngon', 3, 17, '2021-12-03 09:33:16', '2021-12-03 09:33:16', 'mangcut.jpg', NULL),
(35, 'Trái ổi', 25000, '/storage/product/3/G18a2XGd6QIfV3a2YGhB.jpg', 'Ổi', 3, 17, '2021-12-03 09:33:45', '2021-12-03 09:33:45', 'oi.jpg', NULL),
(36, 'Thanh long', 35000, '/storage/product/3/NIcN0JVQMLIe7Js9XTLs.jpg', 'Thanh long', 3, 17, '2021-12-04 01:27:06', '2021-12-04 01:27:06', 'thanhlong.jpg', NULL),
(37, 'Xoài cát Hoà Lộc', 65000, '/storage/product/3/VaoM5VJZVuGS8R9a7TZh.jpg', 'Xoài cát', 3, 17, '2021-12-04 01:27:54', '2021-12-04 01:27:54', 'xoaicathoaloc.jpg', NULL),
(38, 'Nhãn xuồng cơm vàng', 10000, '/storage/product/3/27ZsthdDBkVwGLwAAxWy.jpg', 'Nhãn xuồng', 3, 17, '2021-12-04 01:28:51', '2021-12-04 01:28:51', 'nhanxuongcomvang.jpg', NULL),
(39, 'Vú sữa', 200000, '/storage/product/3/1HLl2RntpU7DjoaUADuQ.jpg', 'Vú sữa', 3, 17, '2021-12-04 01:37:10', '2021-12-04 01:37:10', 'vusua.jpg', NULL),
(40, 'Quả thơm', 19000, '/storage/product/3/WLqdgUhXoT8nkD6bz7Zx.jpg', 'Thơm ngon', 3, 17, '2021-12-04 01:37:50', '2021-12-04 01:37:50', 'thom.jpg', NULL),
(41, 'Quả tầm bóp', 50000, '/storage/product/3/5tLDxEVzlT1zyselYHxh.jpg', 'Quả tầm bóp', 3, 17, '2021-12-04 01:38:49', '2021-12-04 01:38:49', 'tambop.jpg', NULL),
(42, 'Mãng cầu', 35000, '/storage/product/3/7juYvohyqgmXjnpFOXfg.jpg', 'Mãng cầu', 3, 17, '2021-12-04 01:40:05', '2021-12-04 01:40:05', 'mangcau.jpg', NULL),
(43, 'Khoai tây', 40000, '/storage/product/3/AfGwlykIJYLIAxbrmELr.jpg', 'Khoai tây', 3, 18, '2021-12-04 04:16:55', '2021-12-04 04:16:55', 'khoaitay.jpg', NULL),
(44, 'Bắp ngô', 8500, '/storage/product/3/vzrrwrkzRmSHUOG1LgJx.jpg', 'Bắp ngô', 3, 17, '2021-12-04 04:18:00', '2021-12-04 04:18:00', 'bapngo.jpg', NULL),
(46, 'Khoai lang', 10000, '/storage/product/3/Iz22qBOXRdVCAk2ImjQV.jpg', 'Khoai lang', 3, 18, '2021-12-04 04:20:33', '2021-12-04 04:20:33', 'khoailang.jpg', NULL),
(47, 'Rau dền', 15000, '/storage/product/3/nKKn2PWSqPdEAdluuNOd.jpg', 'Rau dền', 3, 18, '2021-12-04 04:25:10', '2021-12-04 04:25:10', 'rauden.jpg', NULL),
(49, 'Dưa hấu', 25000, '/storage/product/3/UZBKftPHkX4rvw6YwUWB.jpg', 'Dưa hấu', 3, 17, '2021-12-04 06:38:41', '2021-12-04 06:38:41', 'duahau.jpg', NULL),
(53, 'Nước ép cà rốt', 20000, '/storage/product/3/Q18syNyGmzD18T4thX6U.png', 'Nước ép', 3, 19, '2021-12-30 02:10:58', '2021-12-30 02:10:58', 'Nước ép cà rốt - 20.000đ.png', NULL),
(55, 'Nước dừa', 20000, '/storage/product/3/ILkW2UatSPN6g4MDJJYN.png', 'Nước dừa ngon', 3, 19, '2021-12-31 00:28:15', '2021-12-31 00:28:15', 'Nước dừa - 20.000đ.png', NULL),
(56, 'Nước ép cam', 20000, '/storage/product/3/6VqFcQEI4vAa4UjarMso.png', 'Nước ép cam ngon', 3, 19, '2021-12-31 00:28:39', '2021-12-31 00:28:39', 'Nước ép cam - 20.000đ.png', NULL),
(57, 'Nước ép chanh', 20000, '/storage/product/3/pTEspBqYN9GyQgLkYWNi.png', 'Nước ép cam ngon', 3, 19, '2021-12-31 00:29:01', '2021-12-31 00:29:01', 'Nước ép chanh - 20.000đ.png', NULL),
(58, 'Nước ép đào', 30000, '/storage/product/3/jnuwoF2wvpM9685hHpxk.png', 'Nước ép đào ngon', 3, 19, '2021-12-31 00:29:24', '2021-12-31 00:29:24', 'Nước ép đào - 30.000đ.png', NULL),
(59, 'Nước ép dâu', 30000, '/storage/product/3/1BGc8CjbSMhktQj4s3ce.png', 'Nước ép dâu ngon', 3, 19, '2021-12-31 00:29:46', '2021-12-31 00:29:46', 'Nước ép dâu - 30.000đ.png', NULL),
(60, 'Nước ép dứa', 30000, '/storage/product/3/kCgIQdZv0s9akGJPMjnR.png', 'Nước ép dứa ngon', 3, 19, '2021-12-31 00:30:05', '2021-12-31 00:30:05', 'Nước ép dứa - 30.000đ.png', NULL),
(61, 'Nước ép dưa hấu', 40000, '/storage/product/3/DVRDgVkPWYG38QErZdBZ.png', 'Nước ép dưa hấu ngon', 3, 19, '2021-12-31 00:30:31', '2021-12-31 00:30:31', 'Nước ép dưa hấu - 40.000đ.png', NULL),
(62, 'Nước ép dưa leo', 40000, '/storage/product/3/MXFUi37nQDGonMOrez5G.png', 'Nước ép dưa leo ngon', 3, 19, '2021-12-31 00:31:21', '2021-12-31 00:31:21', 'Nước ép dưa leo - 40.000đ.png', NULL),
(63, 'Nước ép lựu', 40000, '/storage/product/3/xsqrmt9P2xMMBeVvIpmb.png', 'Nước ép lựu ngon', 3, 19, '2021-12-31 00:32:04', '2021-12-31 00:32:04', 'Nước ép lựu - 40.000đ.png', NULL),
(64, 'Nước ép mía', 40000, '/storage/product/3/cqOdyNGznlCtOeN63STz.png', 'Nước ép mía ngon', 3, 19, '2021-12-31 00:32:39', '2021-12-31 00:32:39', 'Nước ép mía - 40.000đ.png', NULL),
(65, 'Nước ép nho', 40000, '/storage/product/3/Z0zlxIGWNVMMsAFBCJzG.png', 'Nước ép nho ngon', 3, 19, '2021-12-31 00:33:01', '2021-12-31 00:33:01', 'Nước ép nho - 40.000đ.png', NULL),
(66, 'Nước ép ổi', 40000, '/storage/product/3/n4SOt0P56TjKVNTk4jMw.png', 'Nước ép ổi ngon', 3, 19, '2021-12-31 00:33:20', '2021-12-31 00:33:20', 'Nước ép ổi - 40.000đ.png', NULL),
(67, 'Nước ép xoài', 40000, '/storage/product/3/62643HipZkzsjxZjFWg3.png', 'Nước ép xoài ngon', 3, 19, '2021-12-31 00:33:42', '2021-12-31 00:33:42', 'Nước ép xoài - 40.000đ.png', NULL),
(68, 'Sinh tố bơ', 50000, '/storage/product/3/zuhhXFIFvABN9v6Mx0jh.png', 'Sinh tố bơ ngon', 3, 19, '2021-12-31 00:34:05', '2021-12-31 00:34:05', 'Sinh tố bơ - 50.000đ.png', NULL),
(69, 'Sinh tố Kiwi', 50000, '/storage/product/3/CWruuBrNz1NJ3sYsH6J8.png', 'Sinh tố Kiwi ngon', 3, 19, '2021-12-31 00:34:30', '2021-12-31 00:34:30', 'Sinh tố kiwi - 50.000đ.png', NULL),
(70, 'Sinh tố sầu riêng', 50000, '/storage/product/3/xXOnRNTukX95EWj350DS.png', 'Sinh tố sầu riêng ngon', 3, 19, '2021-12-31 00:34:56', '2021-12-31 00:34:56', 'Sinh tố sầu riêng - 50.000đ.png', NULL),
(71, 'Sinh tố xoài', 50000, '/storage/product/3/0UymrRkr0T0wSeQGDfS3.png', 'Sinh tố xoài ngon', 3, 19, '2021-12-31 00:35:20', '2021-12-31 00:35:20', 'Sinh tố xoài - 50.000đ.png', NULL),
(72, 'Bạc hà', 10000, '/storage/product/3/Ir2GD1wzZY2f97eU7Wp3.png', 'Bạc hà ngon', 3, 18, '2021-12-31 00:51:47', '2021-12-31 00:51:47', 'Bạc hà - 10.000đ.png', NULL),
(73, 'Bí xanh', 10000, '/storage/product/3/XjPneQFqeZVZ5RJPq7a7.png', 'Bí xanh ngon', 3, 18, '2021-12-31 00:52:09', '2021-12-31 00:52:09', 'Bí xanh - 10.000đ.png', NULL),
(74, 'Cà chua', 10000, '/storage/product/3/oges3PUxIlfgi9JVdHiB.png', 'Cà chua ngon', 3, 18, '2021-12-31 00:52:30', '2021-12-31 00:52:30', 'Cà chua - 10.000đ.png', NULL),
(75, 'Cà tím', 15000, '/storage/product/3/KFBWpci5uLbR3hmfhY4h.png', 'Cà tím ngon', 3, 18, '2021-12-31 00:52:52', '2021-12-31 00:52:52', 'Cà tím - 15.000đ.png', NULL),
(76, 'Cải ngọt', 15000, '/storage/product/3/BLSpdc5IDzrWLtO55rcZ.png', 'Cải ngon ngọt', 3, 18, '2021-12-31 00:53:16', '2021-12-31 00:53:16', 'Cải ngọt - 15.000đ.png', NULL),
(77, 'Cải xanh', 15000, '/storage/product/3/L7OETc7nziWMuZ957lu1.png', 'Cải xanh ngon', 3, 18, '2021-12-31 00:59:39', '2021-12-31 00:59:39', 'Cải xanh - 15.000đ.png', NULL),
(78, 'Cần tây', 15000, '/storage/product/3/wUEZGJFwMV9aEYCNhwPE.png', 'Cần tây ngon', 3, 18, '2021-12-31 01:00:03', '2021-12-31 01:00:03', 'Cần tây - 15.000đ.png', NULL),
(79, 'Củ cải trắng', 15000, '/storage/product/3/TDYMLDaAeFdbJUITUbQq.png', 'Củ cải trắng ngon', 3, 18, '2021-12-31 01:05:09', '2021-12-31 01:05:09', 'Củ cải trắng - 15.000đ.png', NULL),
(80, 'Củ sả', 15000, '/storage/product/3/japCv83nrrmzs3el7pSU.png', 'Củ sả ngon', 3, 18, '2021-12-31 01:05:30', '2021-12-31 01:05:30', 'Củ sả - 15.000đ.png', NULL),
(81, 'Củ tỏi', 15000, '/storage/product/3/dYjg9UCxVZLr0k2NEuRj.png', 'Củ tỏi ngon', 3, 18, '2021-12-31 01:05:54', '2021-12-31 01:05:54', 'Củ tỏi - 15000đ.png', NULL),
(82, 'Khoai tím', 20000, '/storage/product/3/VHLq2fZ624wHye9r0wCR.png', 'Khoai tím', 3, 18, '2021-12-31 01:06:17', '2021-12-31 01:06:17', 'Khoai tím - 20.000đ.png', NULL),
(83, 'Ớt chuông đỏ', 20000, '/storage/product/3/J311UwfVjdJTHg2nTU1f.png', 'Ớt chuông đỏ', 3, 18, '2021-12-31 01:06:46', '2021-12-31 01:06:46', 'Ớt chuông đỏ - 20.000đ.png', NULL),
(84, 'Ớt hiểm', 20000, '/storage/product/3/PCTlsvDSvvU7WXXfzRfo.png', 'Ớt hiểm ngon', 3, 18, '2021-12-31 01:07:08', '2021-12-31 01:07:08', 'Ớt hiểm - 20.000đ.png', NULL),
(85, 'Rau diếp cá', 20000, '/storage/product/3/tzGYc7juS1KSuLuhJLij.png', 'Rau diếp cá ngon', 3, 18, '2021-12-31 01:10:11', '2021-12-31 01:10:11', 'Rau diếp ca - 20.000đ.png', NULL),
(86, 'Súp lơ', 20000, '/storage/product/3/Ieu6DHoi6LtiB3IYHuOM.png', 'Súp lơ ngon', 3, 18, '2021-12-31 01:10:53', '2021-12-31 01:10:53', 'Súp lơ - 20.000đ.png', NULL),
(87, 'Xà lách', 20000, '/storage/product/3/PzFVjwJKL41G4ZMg4B6L.png', 'Xà lách xanh sạch', 3, 18, '2021-12-31 01:11:21', '2021-12-31 01:11:21', 'Xà lách - 20.000đ.png', NULL),
(88, 'Trái cam', 40000, '/storage/product/3/wprKOtT26W0Lr9Vccp7d.png', 'Cam ngon', 3, 17, '2021-12-31 01:16:43', '2021-12-31 01:16:43', 'Cam - 40.000đ.png', NULL),
(89, 'Chanh leo', 40000, '/storage/product/3/2DsrhS7jKAapAYmzgfmv.png', 'Chanh leo ngon', 3, 17, '2021-12-31 01:17:13', '2021-12-31 01:17:13', 'Chanh leo - 40.000đ.png', NULL),
(90, 'Cherry', 40000, '/storage/product/3/nzHHrevDkBt0nSrypqg2.png', 'Cherry ngon', 3, 17, '2021-12-31 01:17:40', '2021-12-31 01:17:40', 'Cherry - 40.000đ.png', NULL),
(91, 'Quả đào', 50000, '/storage/product/3/7ow3cGeczClGGOAsDyLR.png', 'Quả đào ngon', 3, 17, '2021-12-31 01:18:07', '2021-12-31 01:18:07', 'Đào - 50.000đ.png', NULL),
(92, 'Dưa gang', 50000, '/storage/product/3/XdxiIWQNLlUKApJtKjIr.png', 'Dưa gang ngon', 3, 17, '2021-12-31 01:18:29', '2021-12-31 01:18:29', 'Dưa gang - 50.000đ.png', NULL),
(93, 'Quả lựu', 50000, '/storage/product/3/3JOqeGHmMk1grcTWL9Mv.png', 'Quả lựu ngon', 3, 17, '2021-12-31 01:18:48', '2021-12-31 01:18:48', 'Lựu - 50.000đ.png', NULL),
(94, 'Quả quýt', 50000, '/storage/product/3/h0oO4qAHdkkxhl7hmX4L.png', 'Quả quýt ngon', 3, 17, '2021-12-31 01:19:15', '2021-12-31 01:19:15', 'Quýt - 50.000đ.png', NULL),
(95, 'Quả táo', 60000, '/storage/product/3/85pYqrZS9stILe6lJ5Ju.png', 'Quả táo ngon', 3, 17, '2021-12-31 01:19:33', '2021-12-31 01:19:33', 'Táo - 60.000đ.png', NULL),
(96, 'Quả vải', 60000, '/storage/product/3/sYPS0E6mF1w7AHkljJPu.png', 'Quả vải ngon', 3, 17, '2021-12-31 01:19:59', '2021-12-31 01:19:59', 'Vải - 60.000đ.png', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `session_customers`
--

CREATE TABLE `session_customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `refresh_token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token_expired` datetime NOT NULL,
  `refresh_token_expired` datetime NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `session_customers`
--

INSERT INTO `session_customers` (`id`, `token`, `refresh_token`, `token_expired`, `refresh_token_expired`, `customer_id`, `created_at`, `updated_at`) VALUES
(50, 'QK16TJpjkE8ERkgfw1j18ejd6cRfSdOanApk7cKa', '9QvOpx1mrnE4of2QEOWGjcAcQ76u6Qdev0qYtHhR', '2022-01-31 12:01:09', '2022-12-27 12:01:09', 5, '2022-01-01 05:01:09', '2022-01-01 05:01:09');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `config_key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `config_value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `config_key`, `config_value`, `created_at`, `updated_at`, `type`) VALUES
(1, 'phone_contact', '093564689656', '2021-11-30 04:22:48', '2021-11-30 04:22:48', ''),
(2, 'facebook_link', 'https://www.facebook.com/ziduckziduck/', '2021-11-30 04:52:59', '2021-11-30 04:52:59', ''),
(3, 'linkedin_link', 'https://www.facebook.com/ziduckziduck/', '2021-11-30 04:53:38', '2021-11-30 04:53:38', ''),
(6, 'telegram_link', 'https://www.facebook.com/ziduckziduck/', '2021-11-30 04:54:37', '2021-11-30 04:54:37', ''),
(7, 'phone_contact7', '0707215137', '2021-11-30 06:47:00', '2021-11-30 06:59:13', 'Text');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_customer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_money` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `name_customer`, `address`, `country`, `phone_number`, `email`, `note`, `total_money`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(5, 'Trịnh Công Danh', '32 Hùng Vương, phường Trần Phú', 'Thành phố Quảng Nam, Tỉnh Quảng Nam', '0707215137', 'danhdanhqn123@gmail.com', 'Mong shop ship càng sớm càng tốt', 108000, 1, 6, '2021-12-29 01:26:24', '2021-12-29 01:26:24'),
(6, 'Đỗ Trọng Khánh', '32 Hùng Vương, phường Trần Phú', 'Thành phố Quảng Ngãi, Tỉnh Quảng Ngãi', '0707568782', 'khanhkhanhqn123@gmail.com', 'Bỏ vào bao đầy đủ', 145000, 1, 5, '2021-12-30 21:10:28', '2021-12-30 21:10:28'),
(7, 'aaaaaaaa', 'aaaaaaaaaaaaa', 'aaaaaaaaaaaa', '0123456789', 'danhdanhqn123@gmail.com', 'aaa', 65000, 1, 6, '2022-01-01 04:27:22', '2022-01-01 04:27:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type_of_user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `type_of_user`) VALUES
(3, 'Võ Phạm Duy Đức', '19521383@gm.uit.edu.vn', NULL, '$2y$10$S51N9JvJ7Xe0wsJgRZqMPOVdWTWLmQlj/qbFmC3VhLMwA23h7QSvu', '7EMX9CjSWd3MlZMswVZjY6sq1LBQ0A2EQwwsjSWPIcIzxCwBwrnoEWzoKHcl', NULL, NULL, 'admin'),
(4, 'Võ Phạm Duy Đức', 'ducducqn123@gmail.com', NULL, '$2y$10$8TqUFkpbyUMkAW4ysCxsMOY/ZD4709P7VkI6cL7fnFJ9VM1jxcyLa', NULL, '2021-12-19 07:48:54', '2021-12-19 07:48:54', 'user'),
(5, 'Đỗ Trọng Khánh', 'khanhkhanhqn123@gmail.com', NULL, '$2y$10$UAUd1xe/wTws/zxucv/ajeG56s/Cp7ok1hy/UfqBWlFuZOvMrDdvi', NULL, '2021-12-25 02:13:20', '2021-12-25 02:13:20', 'user'),
(6, 'Trịnh Công Danh', 'danhdanhqn123@gmail.com', NULL, '$2y$10$9ec.3wkp/hvyEWj9NZUnkeZ6QV/VDwVfydiiu3h6eouBGuz/hf60C', NULL, '2021-12-26 20:30:47', '2021-12-26 20:30:47', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `transaction_id` (`transaction_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `session_customers`
--
ALTER TABLE `session_customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `session_customers`
--
ALTER TABLE `session_customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
