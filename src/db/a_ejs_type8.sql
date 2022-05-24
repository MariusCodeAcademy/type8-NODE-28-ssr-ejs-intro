-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2022 at 08:28 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `a_ejs_type8`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `author` varchar(30) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `year` year(4) NOT NULL,
  `image` varchar(100) NOT NULL,
  `category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `timeStamp`, `year`, `image`, `category`) VALUES
(1, 'War an Peace', 'Tolstoy', '2021-10-04 02:37:06', 1950, 'war.jpg', 1),
(2, 'Red Riding Hood', 'James', '2021-10-04 02:37:15', 2000, 'redHood.jpg', 2),
(4, 'Big blue sea', 'Jane Doe', '2021-10-04 02:38:00', 2020, 'sea.jpg', 3),
(5, 'Star wars', 'Jedi', '2021-10-04 02:51:11', 2015, 'wars.jpg', NULL),
(6, '1984', 'George Orvel', '2021-10-01 06:05:18', 1970, '1984.jpg', 1),
(7, '20000 Thousand miles under sea', 'Jules Vern', '2021-10-04 04:02:05', 1960, 'sea.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `book_categories`
--

CREATE TABLE `book_categories` (
  `id` int(11) NOT NULL,
  `cat_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book_categories`
--

INSERT INTO `book_categories` (`id`, `cat_name`) VALUES
(1, 'History'),
(2, 'Chidren'),
(3, 'Fantasy'),
(4, 'Poetry');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_categories`
--
ALTER TABLE `book_categories`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
