-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2024 at 04:46 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mess_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_accounts`
--

CREATE TABLE `tbl_accounts` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email_address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_accounts`
--

INSERT INTO `tbl_accounts` (`user_id`, `username`, `password`, `email_address`) VALUES
(0, 'admin', 'admin', 'hmontejo123@gmail.com'),
(1, 'test', 'test', 'email@gmail.com'),
(2, 'asdvbasdhj', '', 'hmontejo123@gmail.com'),
(3, '', '', 'hmontejo123@gmail.com'),
(4, 'heidern', '123', 'heidernmyx@gmail.com'),
(5, 'adminwas', '123', 'hmontejo123@gmail.comasdasd'),
(6, 'testdata', 'testdata', 'testdata@email.com'),
(7, 'test1', 'test1', 'test1@test.com'),
(8, 'awd', 'asd', 'awdqa@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contacts`
--

CREATE TABLE `tbl_contacts` (
  `contact_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT 'used as anchor to list its friends',
  `friend_id` int(11) NOT NULL COMMENT 'user_id''s friend (basically another user''s id)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_profile`
--

CREATE TABLE `tbl_profile` (
  `profile_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `mname` varchar(50) DEFAULT NULL,
  `lname` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `birthdate` date DEFAULT NULL,
  `profile_path` varchar(255) DEFAULT NULL COMMENT 'directory that leads to an image',
  `bio` varchar(255) DEFAULT NULL,
  `date_created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_profile`
--

INSERT INTO `tbl_profile` (`profile_id`, `user_id`, `fname`, `mname`, `lname`, `gender`, `birthdate`, `profile_path`, `bio`, `date_created`) VALUES
(0, 0, 'Heidern', 'Heidern', 'Heidern', 'Male', NULL, '', '', '2024-03-09'),
(1, 1, 'Layla', 'Bea', 'Eudora', 'Female', '2000-12-12', NULL, NULL, '2024-03-09'),
(217, 0, '', '', '', 'Male', '0000-00-00', NULL, NULL, '2024-03-13'),
(218, 0, '', '', '', 'Male', '0000-00-00', NULL, NULL, '2024-03-13'),
(219, 0, '', '', '', 'Male', '0000-00-00', NULL, NULL, '2024-03-13'),
(220, 0, '', '', '', 'Male', '0000-00-00', NULL, NULL, '2024-03-13'),
(221, 0, 'asd', '', '', 'Male', '0000-00-00', NULL, NULL, '2024-03-13'),
(222, 0, 'asd', 'asd', '', 'Male', '0000-00-00', NULL, NULL, '2024-03-13'),
(223, 0, 'asd', 'asd', 'asd', 'Female', '0010-10-10', NULL, NULL, '2024-03-13'),
(224, 0, 'asd', 'asd', 'asd', 'Female', '0010-10-10', NULL, NULL, '2024-03-13'),
(225, 0, '123', '123', 'qwe', 'Male', '1000-02-01', NULL, NULL, '2024-03-13'),
(226, 5, '123', '123', 'qwe', 'Male', '1000-02-01', NULL, NULL, '2024-03-13'),
(227, 6, 'testdata', 'testdata', 'testdata', 'Male', '1111-11-11', NULL, NULL, '2024-03-13'),
(228, 7, 'test1', 'test1', 'test1', 'Other', '2222-02-22', NULL, NULL, '2024-03-13'),
(229, 0, 'test1', 'test1', 'test1', 'Other', '2222-02-22', NULL, NULL, '2024-03-13'),
(230, 0, '', '', '', 'Male', '0000-00-00', NULL, NULL, '2024-03-13'),
(231, 8, 'asdqwd', 'qweasd', 'asdawd', 'Other', '1111-11-11', NULL, NULL, '2024-03-13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tbl_contacts`
--
ALTER TABLE `tbl_contacts`
  ADD PRIMARY KEY (`contact_id`),
  ADD KEY `contact_id` (`contact_id`,`user_id`,`friend_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `friend_id` (`friend_id`);

--
-- Indexes for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  ADD PRIMARY KEY (`profile_id`),
  ADD KEY `tbl_profile_ibfk_1` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_contacts`
--
ALTER TABLE `tbl_contacts`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=232;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
