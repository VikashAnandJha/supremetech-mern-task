-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 05, 2023 at 05:12 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mern_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `join_date` date NOT NULL,
  `department` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `join_date`, `department`) VALUES
(1, 'vikash anand jha', 'vikashjha', '$2b$10$ON.sTJRwQBVi89vprubJx.IY9QNFgZfr1eqW8yG5yR/yuLAncC2Wq', '2023-10-04', 'backend'),
(2, 'User 2', 'user2', 'user2pwd', '2023-10-01', 'frontend'),
(7, 'Ramesh', 'vikashjha', '$2b$10$LSGOa.j1L1.7hZxjJeroG.9018.IPc.aYlw2Fd0HZnDiuej2lLVBC', '2023-10-17', 'marketing'),
(12, 'Suresh', 'vikashjha1', '$2b$10$8AnKpZB2jsKnFDBmFdQhS.cuksf0ZYwOHBfuxzmy6WylPEi0iG4EK', '2023-10-31', 'marketing'),
(13, 'Mahesh', 'vikashjha11', '$2b$10$RWd3Y.8T6svviUbXCCTKm.euoPxfhXU9y9HwRe6tBZHxFfbqePzGq', '2023-10-04', 'marketing'),
(14, 'demo hr user', 'hruser', '$2b$10$c5iV5j7U0D4TyrbhYBRGJu7WYpR5KUyusg7E035GYlEk5vPoeAOTm', '2023-10-04', 'HR'),
(15, 'Vikash Real', 'realvikash', '$2b$10$Bm03Aw3QI7SdsWdl6G..9.vUamZDHM36AI.hRBDd3qJnuRqmm5lCC', '2023-10-04', 'backend'),
(16, 'Vikash Anand Jha', ' vikashjha', '$2b$10$xMOv53ofQE/5Vuo9606aNuMTMbYTkrqpc6W.srZruhwjMFVjbtf/a', '2023-10-05', 'dept'),
(17, 'Test User', 'vikashjha12', '$2b$10$zXuuXmLeaYs3cVmczuB.qOcMtxOVl1asEvj8NodXXTsAs6pd9/eI2', '2023-10-05', 'code'),
(18, 'Vikash Anand Jha', 'vikashjha122', '$2b$10$/A3PknDEvlJo4A6n1DclJOJkcym/rwjWzfaZnrUg8PwLVIT8TK1de', '2023-10-19', 'code'),
(19, 'amit ', 'vikashjha1224', '$2b$10$6nZF7x/qQCHVd9.9WkN9s.oZ0mAFv14Df/Au.CyzYkoi4oroyzyYi', '2023-10-05', 'code'),
(20, 'Vijay', 'vikashjha12244', '$2b$10$NqRILNqrBMGuVN6A8QdUK.Cv4tJNcWeEAELfgSjfz7dvKYuX05Fg6', '2023-10-05', 'code'),
(21, 'Ajay', 'vikashjha122446', '$2b$10$lrbf7zQmKz2BAsKtVS9KP.GgtN4pGxRkFzh1IaGDxgN2AiGvaVwH6', '2023-10-05', 'code'),
(22, 'Anand', 'vikashjha1224465', '$2b$10$lq2oP4GKbC2qZ.mDk7BLWuJsOwlKmZ.WIorwq6kfFpkEkNNP7uqMy', '2023-10-05', 'code');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
