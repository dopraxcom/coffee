-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 18, 2021 at 07:18 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

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

-- --------------------------------------------------------

--
-- Table structure for table `ico_category`
--

CREATE TABLE `ico_category` (
  `id` int(11) NOT NULL,
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
(1, 'admin', 1);

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
-- Indexes for dumped tables
--

--
-- Indexes for table `ico_admin_meta`
--
ALTER TABLE `ico_admin_meta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_id` (`admin_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ico_admin_meta`
--
ALTER TABLE `ico_admin_meta`
  ADD CONSTRAINT `ico_admin_meta_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `ico_user_admin` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
