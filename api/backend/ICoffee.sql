-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 26, 2021 at 04:14 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ICoffee`
--

-- --------------------------------------------------------

--
-- Table structure for table `ico_admin_meta`
--

CREATE TABLE `ico_admin_meta` (
  `id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ico_admin_meta`
--

INSERT INTO `ico_admin_meta` (`id`, `admin_id`, `meta_key`, `meta_value`) VALUES
(1, 25, 'birth_date', '1370/08/23'),
(2, 25, 'address', 'test address'),
(3, 25, 'avatar', ''),
(4, 25, 'phone', '05138474541'),
(5, 25, 'mobile', '09352399329'),
(11, 27, 'birth_date', '1370/08/23'),
(12, 27, 'address', 'test address'),
(13, 27, 'avatar', ''),
(14, 27, 'phone', '05138474541'),
(15, 27, 'mobile', '09352399329');

-- --------------------------------------------------------

--
-- Table structure for table `ico_card`
--

CREATE TABLE `ico_card` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `card` text NOT NULL,
  `created_at` varchar(30) NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_category`
--

CREATE TABLE `ico_category` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `parent` int(11) NOT NULL,
  `status` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_jwt_token`
--

CREATE TABLE `ico_jwt_token` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ico_jwt_token`
--

INSERT INTO `ico_jwt_token` (`id`, `token`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiIiLCJmaXJzdG5hbWUiOiIiLCJsYXN0bmFtZSI6IiIsImJpcnRoZGF0ZSI6IiIsInJvbGUiOjAsImV4cCI6MTYyNzI0NDQ5NH0.Gs8FuntkAFLWHqwEtCLEgx7sqEY4z1q83wOTipBG1ro'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NDc4MH0.a0BCoqc3j4NVjT_6pireTP5WCxcMfSnsvQvO6c1_GQ0'),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NDc4MH0.a0BCoqc3j4NVjT_6pireTP5WCxcMfSnsvQvO6c1_GQ0'),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NDc4MH0.a0BCoqc3j4NVjT_6pireTP5WCxcMfSnsvQvO6c1_GQ0'),
(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NTIxMH0.T7Q-v13T012oWKpdweOD8FaTikFaM_Kfyy8t3MPDy5E'),
(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NTMwMH0.onVG3IA0W3Wi_qkGsb-V9_epOEzJms7htXyZRsfAy7E'),
(7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NTQxNX0.yazIPYM3gNwBFT23Fzyfn7OS9fvEgmHpqHYdYqQiQyY'),
(8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NTQ5OH0.vN3xkspHxnc6HA185dd7W5RB-1ldJBkXDiTp7GOuMdc'),
(9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NTcyOX0.-vrdWISffSclAdkjkL_AwQZETCrXp9iwgeWVW--twg4'),
(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NTc4Nn0.tREB-NKYF6N7S1eAUPZWpoCxKzhPBvxUFCtgFzCYAAc'),
(11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NTg3OX0.jCVllFUsJnyNVlCAGzU5nNXWVK2rFMAGzzmtvC0-oso'),
(12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NTk1M30.M9jrlMNFvmmCg02gzcNomenmxpGaA6FIfzSsjcqMwDw'),
(13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NjAyOH0.y4bpPWduIvV2ojBLftxaeXbM7s2BSwuba_K1Ra--wk8'),
(14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NjIxNX0.VbY23vm7l_w_q1DyHcOOYjdngMPup9vdCzQ_7MTm8d4'),
(15, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NjI1Nn0.vOkpBqUlqgh9oLBIgszcSdvrvcB3XTN1dvl4K7dPx_g'),
(16, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzI0NjM5N30.o64BfrxEa1zGGaYnLj-vzsYiJMZuqZ00ciHhHuLza-g'),
(17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwMDkwOX0.sdVJE4rN_He9uuDHfoFuJ_g7R0ojaeHzY8jo5QOiR-8'),
(18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwMTA0OX0.hfDSibDX8M7e66wyakSohRNN_ltqcGjH4ImI8WIshZQ'),
(19, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwMTQzOH0.JzU722GTLOWhS_r4sKDRdDMuVEvwm5SiRy_ndw_nkE0'),
(20, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwMjA2MH0.oftHAvedXlsTQRMxwAMYTrVY0seXfC6Ql1kDbS_SkpE'),
(21, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwMzIzNX0.4N_0NuxYt3lm6K1FVGa5LgbmpSWlP2mED1ntNJM4us4'),
(22, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwNDU3MX0.ssELA2uHEJEGHb94N1fUtY7JpdxeiGk6CA9ehPaCU5c'),
(23, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwNDc3M30.Oq1MIm5ruHAc-aPOvCAq3voMEdzA3F_PY1TPHe6J66Q'),
(24, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwNTgwOX0.xttGnV7Povc-tUm3bCcnItiF-vbtB_9M7EQVXn7amcw'),
(25, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwNTk3NX0.6QPcWA7awE8W_zrTCqZgmA_CdPh5_iqGJmBGkHBqEMA'),
(26, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwNzA3M30.yJZhwrBYSdhJc7mNOdJTTVXemBl69XmgYlFgCaPRMVw'),
(27, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoia2Fuc2FpIiwiZmlyc3RuYW1lIjoiYWxpcmV6YSIsImxhc3RuYW1lIjoic2FmZmFyIiwiYmlydGhkYXRlIjoiMTM3MC8wOC8yMyIsInJvbGUiOjIsImV4cCI6MTYyNzMwNzg0OX0.8u6kQXP9N8-aSoGXB0kUYUFHC-zIYqUsmGQSEGhFERE');

-- --------------------------------------------------------

--
-- Table structure for table `ico_order`
--

CREATE TABLE `ico_order` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `products` text NOT NULL,
  `ref_id` varchar(255) NOT NULL,
  `order_token` varchar(255) NOT NULL,
  `authority` varchar(255) NOT NULL,
  `transport_price` varchar(255) NOT NULL,
  `total_price` varchar(255) NOT NULL,
  `discount_amount` varchar(255) NOT NULL,
  `discount_coupon` varchar(255) NOT NULL,
  `wallet_reduction` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `date_paid` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_product`
--

CREATE TABLE `ico_product` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_product_meta`
--

CREATE TABLE `ico_product_meta` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `meta_key` varchar(255) NOT NULL,
  `meta_value` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_roles`
--

CREATE TABLE `ico_roles` (
  `id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ico_roles`
--

INSERT INTO `ico_roles` (`id`, `role_name`, `status`) VALUES
(1, 'admin', 1),
(2, 'super-admin', 1),
(4, 'employer', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ico_shop`
--

CREATE TABLE `ico_shop` (
  `id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `shop_name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_shop_meta`
--

CREATE TABLE `ico_shop_meta` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `meta_key` varchar(255) NOT NULL,
  `meta_value` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_taxonomy_products_cat`
--

CREATE TABLE `ico_taxonomy_products_cat` (
  `id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_taxonomy_products_shop`
--

CREATE TABLE `ico_taxonomy_products_shop` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_usermeta`
--

CREATE TABLE `ico_usermeta` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_users`
--

CREATE TABLE `ico_users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `status` tinyint(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ico_user_admin`
--

CREATE TABLE `ico_user_admin` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `status` tinyint(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ico_user_admin`
--

INSERT INTO `ico_user_admin` (`id`, `firstname`, `lastname`, `username`, `password`, `email`, `role_id`, `created_at`, `status`) VALUES
(25, 'alireza', 'saffar', 'kansai', '1f78c629944e103fe7db671208bfc8038dee47b9', 'a.khorasany@gmail.com', 2, '2021-07-26 00:00:02.724701195 +0430 +0430 m=+221.862843278', 1),
(27, 'alireza', 'saffar', 'quintin', '1f78c629944e103fe7db671208bfc8038dee47b9', 'a.khorasany@gmail.com', 1, '2021-07-26 15:51:48.182930761 +0430 +0430 m=+47.485192166', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ico_admin_meta`
--
ALTER TABLE `ico_admin_meta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_id` (`admin_id`);

--
-- Indexes for table `ico_card`
--
ALTER TABLE `ico_card`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `ico_category`
--
ALTER TABLE `ico_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ico_jwt_token`
--
ALTER TABLE `ico_jwt_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ico_order`
--
ALTER TABLE `ico_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `ico_product`
--
ALTER TABLE `ico_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ico_product_meta`
--
ALTER TABLE `ico_product_meta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `ico_roles`
--
ALTER TABLE `ico_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ico_shop`
--
ALTER TABLE `ico_shop`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat_id` (`cat_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- Indexes for table `ico_shop_meta`
--
ALTER TABLE `ico_shop_meta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shop_id` (`shop_id`);

--
-- Indexes for table `ico_taxonomy_products_cat`
--
ALTER TABLE `ico_taxonomy_products_cat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat_id` (`cat_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `ico_taxonomy_products_shop`
--
ALTER TABLE `ico_taxonomy_products_shop`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `shop_id` (`shop_id`);

--
-- Indexes for table `ico_usermeta`
--
ALTER TABLE `ico_usermeta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `ico_users`
--
ALTER TABLE `ico_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ico_user_admin`
--
ALTER TABLE `ico_user_admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ico_admin_meta`
--
ALTER TABLE `ico_admin_meta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `ico_card`
--
ALTER TABLE `ico_card`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_category`
--
ALTER TABLE `ico_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_jwt_token`
--
ALTER TABLE `ico_jwt_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `ico_order`
--
ALTER TABLE `ico_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_product`
--
ALTER TABLE `ico_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_product_meta`
--
ALTER TABLE `ico_product_meta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_roles`
--
ALTER TABLE `ico_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ico_shop`
--
ALTER TABLE `ico_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_shop_meta`
--
ALTER TABLE `ico_shop_meta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_taxonomy_products_cat`
--
ALTER TABLE `ico_taxonomy_products_cat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_taxonomy_products_shop`
--
ALTER TABLE `ico_taxonomy_products_shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_usermeta`
--
ALTER TABLE `ico_usermeta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_users`
--
ALTER TABLE `ico_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ico_user_admin`
--
ALTER TABLE `ico_user_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ico_admin_meta`
--
ALTER TABLE `ico_admin_meta`
  ADD CONSTRAINT `ico_admin_meta_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `ico_user_admin` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ico_card`
--
ALTER TABLE `ico_card`
  ADD CONSTRAINT `ico_card_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `ico_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ico_order`
--
ALTER TABLE `ico_order`
  ADD CONSTRAINT `ico_order_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `ico_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ico_product_meta`
--
ALTER TABLE `ico_product_meta`
  ADD CONSTRAINT `ico_product_meta_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `ico_product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ico_shop`
--
ALTER TABLE `ico_shop`
  ADD CONSTRAINT `ico_shop_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `ico_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ico_shop_ibfk_2` FOREIGN KEY (`owner_id`) REFERENCES `ico_user_admin` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ico_shop_meta`
--
ALTER TABLE `ico_shop_meta`
  ADD CONSTRAINT `ico_shop_meta_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `ico_shop` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ico_taxonomy_products_cat`
--
ALTER TABLE `ico_taxonomy_products_cat`
  ADD CONSTRAINT `ico_taxonomy_products_cat_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `ico_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ico_taxonomy_products_cat_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `ico_product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ico_taxonomy_products_shop`
--
ALTER TABLE `ico_taxonomy_products_shop`
  ADD CONSTRAINT `ico_taxonomy_products_shop_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `ico_product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ico_taxonomy_products_shop_ibfk_2` FOREIGN KEY (`shop_id`) REFERENCES `ico_shop` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ico_usermeta`
--
ALTER TABLE `ico_usermeta`
  ADD CONSTRAINT `ico_usermeta_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `ico_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ico_user_admin`
--
ALTER TABLE `ico_user_admin`
  ADD CONSTRAINT `ico_user_admin_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `ico_roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
