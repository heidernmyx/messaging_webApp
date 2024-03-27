-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2024 at 07:13 PM
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
(1, 'admin', 'admin', 'admin@admin.com'),
(2, 'asd', 'asd', 'asd@asd.com'),
(3, 'heidernmyx', 'montejo', 'hmontejo123@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_add`
--

CREATE TABLE `tbl_add` (
  `add_id` int(11) NOT NULL,
  `added_by` int(11) NOT NULL,
  `added_user` int(11) NOT NULL,
  `time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contacts`
--

CREATE TABLE `tbl_contacts` (
  `contact_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT 'used as anchor to list its friends',
  `friend_id` int(11) NOT NULL COMMENT 'user_id''s friend (basically another user''s id)',
  `conversation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_contacts`
--

INSERT INTO `tbl_contacts` (`contact_id`, `user_id`, `friend_id`, `conversation_id`) VALUES
(5, 1, 2, 4),
(6, 2, 1, 4),
(7, 1, 3, 5),
(8, 3, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_conversation`
--

CREATE TABLE `tbl_conversation` (
  `conversation_id` int(11) NOT NULL,
  `user1_id` int(11) NOT NULL,
  `user2_id` int(11) NOT NULL,
  `last_message_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_conversation`
--

INSERT INTO `tbl_conversation` (`conversation_id`, `user1_id`, `user2_id`, `last_message_id`, `created_at`) VALUES
(4, 1, 2, NULL, '2024-03-25 11:58:44'),
(5, 1, 3, NULL, '2024-03-25 12:10:07');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_messages`
--

CREATE TABLE `tbl_messages` (
  `message_id` int(11) NOT NULL,
  `conversation_id` int(11) NOT NULL,
  `sent_by` int(11) NOT NULL,
  `sent_to` int(11) NOT NULL,
  `message_content` varchar(255) NOT NULL,
  `time_sent` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_messages`
--

INSERT INTO `tbl_messages` (`message_id`, `conversation_id`, `sent_by`, `sent_to`, `message_content`, `time_sent`) VALUES
(4, 5, 1, 3, 'asdas', '2024-03-26 01:03:51'),
(5, 5, 3, 1, 'planned a future', '2024-03-26 02:05:48'),
(6, 5, 1, 3, 'by myself', '2024-03-26 02:07:15');

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
  `profile_path` varchar(255) NOT NULL COMMENT 'directory that leads to an image',
  `bio` varchar(255) NOT NULL,
  `date_created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Indexes for table `tbl_add`
--
ALTER TABLE `tbl_add`
  ADD PRIMARY KEY (`add_id`),
  ADD KEY `added_by` (`added_by`),
  ADD KEY `added_user` (`added_user`);

--
-- Indexes for table `tbl_contacts`
--
ALTER TABLE `tbl_contacts`
  ADD PRIMARY KEY (`contact_id`),
  ADD KEY `contact_id` (`contact_id`,`user_id`,`friend_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `friend_id` (`friend_id`),
  ADD KEY `conversation_id` (`conversation_id`);

--
-- Indexes for table `tbl_conversation`
--
ALTER TABLE `tbl_conversation`
  ADD PRIMARY KEY (`conversation_id`),
  ADD KEY `user1_id` (`user1_id`),
  ADD KEY `user2_id` (`user2_id`);

--
-- Indexes for table `tbl_messages`
--
ALTER TABLE `tbl_messages`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `sent_by` (`sent_by`),
  ADD KEY `sent_to` (`sent_to`),
  ADD KEY `conversation_id` (`conversation_id`);

--
-- Indexes for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  ADD PRIMARY KEY (`profile_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_add`
--
ALTER TABLE `tbl_add`
  MODIFY `add_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_contacts`
--
ALTER TABLE `tbl_contacts`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_conversation`
--
ALTER TABLE `tbl_conversation`
  MODIFY `conversation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_messages`
--
ALTER TABLE `tbl_messages`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_add`
--
ALTER TABLE `tbl_add`
  ADD CONSTRAINT `tbl_add_ibfk_1` FOREIGN KEY (`added_by`) REFERENCES `tbl_accounts` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_add_ibfk_2` FOREIGN KEY (`added_user`) REFERENCES `tbl_accounts` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_contacts`
--
ALTER TABLE `tbl_contacts`
  ADD CONSTRAINT `tbl_contacts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_accounts` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_contacts_ibfk_2` FOREIGN KEY (`friend_id`) REFERENCES `tbl_accounts` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_contacts_ibfk_3` FOREIGN KEY (`conversation_id`) REFERENCES `tbl_conversation` (`conversation_id`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_conversation`
--
ALTER TABLE `tbl_conversation`
  ADD CONSTRAINT `tbl_conversation_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `tbl_accounts` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_conversation_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `tbl_accounts` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_messages`
--
ALTER TABLE `tbl_messages`
  ADD CONSTRAINT `tbl_messages_ibfk_1` FOREIGN KEY (`sent_by`) REFERENCES `tbl_accounts` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_messages_ibfk_2` FOREIGN KEY (`sent_to`) REFERENCES `tbl_accounts` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_messages_ibfk_3` FOREIGN KEY (`conversation_id`) REFERENCES `tbl_conversation` (`conversation_id`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  ADD CONSTRAINT `tbl_profile_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_accounts` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
