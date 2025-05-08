-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 14 2024 г., 10:01
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `rest-api`
--

-- --------------------------------------------------------

--
-- Структура таблицы `histories`
--

CREATE TABLE `histories` (
  `id` int NOT NULL,
  `place_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `visits_count` int DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `places`
--

CREATE TABLE `places` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `x` int DEFAULT NULL,
  `y` int DEFAULT NULL,
  `type` enum('Attraction','Restaurant') DEFAULT NULL,
  `image_path` varchar(50) DEFAULT NULL,
  `open_time` time DEFAULT NULL,
  `close_time` time DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `places`
--

INSERT INTO `places` (`id`, `name`, `latitude`, `longitude`, `x`, `y`, `type`, `image_path`, `open_time`, `close_time`, `description`) VALUES
(1, 'Astana-Baiterek', 13.7501, 100.492, 224, 494, 'Attraction', 'Astana-Baiterek.jpg', '08:30:00', '16:30:00', '«Astana-Baiterek» Monument: Enjoy a panoramic view of the entire city from a bird\'s-eye view, feel its beauty and scale.'),
(2, 'Ailand', 13.7547, 100.49, 176, 392, 'Attraction', 'Ailand.jpg', '10:00:00', '23:00:00', '«Ailand» Family Recreation Center: Oceanarium, jungle, Ferris wheel and other entertainment attractions for the whole family.'),
(3, 'Boat station on the Embankment', 13.7465, 100.493, 248, 574, 'Attraction', 'Astana-Enbankment.jpg', '08:30:00', '18:30:00', 'Boat station on the Embankment (Zheltoksan 2/2): Feel the wind of freedom on the water, enjoying the beautiful views of the Waterfront and the surrounding landscape.'),
(4, 'Khan Shatyr', 13.7441, 100.494, 271, 627, 'Attraction', 'Khan-Shatyr.jpg', '10:00:00', '18:00:00', '«Khan Shatyr» Shopping Center: Take a look into the world of shopping and entertainment, plunge into the atmosphere of modern trade and recreation.'),
(5, 'Arc de Triomphe', 13.7418, 100.497, 343, 678, 'Attraction', 'Arc-Triomphe.jpg', '00:00:00', '23:00:00', 'Arc de Triomphe: Feel the grandeur and significance of this historical symbol of the city while enjoying its majestic view.'),
(6, 'Nur Alem', 13.7518, 100.501, 439, 456, 'Attraction', 'Nur-Alem.jpg', '00:00:00', '23:00:00', '«Nur Alem» Museum of the Future (Expo): Discover the amazing world of science, technology and innovation presented in this futuristic museum.'),
(7, 'The Grand Mosque', 13.7574, 100.492, 224, 333, 'Attraction', 'Grand-Mosque.jpg', '09:00:00', '16:00:00', 'Visit the biggest Mosque in Central Asia! Make sure to wear clothes that do not reveal your body and have something to cover your hair.'),
(8, 'Ak Orda', 13.7577, 100.498, 367, 326, 'Attraction', 'Ak-Orda.jpg', '00:00:00', '23:00:00', 'Walk by the Ak Orda Presidential Palace of Astana.'),
(9, 'Palace of Peace and Reconciliation', 13.748, 100.503, 487, 540, 'Attraction', 'Piramida.jpg', '10:00:00', '19:00:00', 'You will get a chance to take a look at an engineering marvel created by a British Achitect - Norman Foster.'),
(10, 'National Museum', 13.7539, 100.507, 583, 410, 'Attraction', 'National-Museum.jpg', '09:00:00', '19:00:00', 'Discover Kazakhstan\'s history starting all the way from paleonthological period up to modern day Kazakhstan'),
(11, 'The State Theatre of Opera', 13.7666, 100.514, 751, 129, 'Attraction', 'Theatre-Opera.jpg', '06:00:00', '17:00:00', 'Take a look at the modern Theatre of Opera and Ballet in Astana! The State Theatre of Opera and Ballet Astana is not always open for visit.'),
(12, 'Atyrau Bridge', 13.7554, 100.505, 535, 377, 'Attraction', 'Atyrau-Bridge.jpg', '00:00:00', '23:00:00', 'A fascinating product of creative engineering - a bridge that resembles Sturgeon\'s shape - symbol of Atyrau city!'),
(13, 'Ozen', 13.7466, 100.532, 1182, 571, 'Restaurant', 'Ozen.jpg', '11:00:00', '22:00:00', 'A great place to enjoy an impeccably mixed cocktail, freshly brewed coffee or a light meal. Make yourself at home and rest in one of the seating groups.'),
(14, 'Saksaul', 13.755, 100.486, 80, 386, 'Restaurant', 'Saksaul.jpg', '11:00:00', '22:00:00', 'Familiarity with Kazakh and modern kitchen. Unique the national restaurant, where the food is prepared on open fire: in the tandoor, grill and cauldron.'),
(15, 'Daididau', 13.7404, 100.51, 655, 708, 'Restaurant', 'Daididau.jpg', '00:00:00', '23:00:00', 'Daididau is a restaurant that shares a passion for Kazakh music and culinary art.'),
(16, 'Line Brew', 13.7591, 100.512, 703, 295, 'Restaurant', 'Line-Brew.jpg', '08:00:00', '16:00:00', 'This is one of several Line Brews in Astana. This is a Kazakh chain of brewpubs and steakhouses.'),
(17, 'Arnau', 13.7525, 100.504, 511, 441, 'Restaurant', 'Arnau.jpg', '17:00:00', '23:00:00', 'This restaurant is a best place which presents a typical Kazak food in Astana. The menu will give you a time deciding on what to order. '),
(18, 'Riba Pila', 13.762, 100.494, 271, 231, 'Restaurant', 'Riba-Pila.jpg', '11:00:00', '21:30:00', 'There aren\'t enough food, service, value or atmosphere ratings for Riba Pila yet.'),
(19, 'Zina', 13.7553, 100.502, 463, 379, 'Restaurant', 'Zina.jpg', '10:30:00', '20:00:00', 'The food is too good! Do yourself a favour and dine here. Every dish is a perfection itself. I highly recommend this place if you are in Astana'),
(20, 'Satti', 13.7678, 100.505, 535, 103, 'Restaurant', 'Satti.jpg', '06:30:00', '21:00:00', 'Authentic Kazakh cuisine mixed with European dishes, Italian specialties, and the only ethnic show program in town make this restaurant a real Astana Landmark.');

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ADMIN'),
(2, 'USER');

-- --------------------------------------------------------

--
-- Структура таблицы `schedules`
--

CREATE TABLE `schedules` (
  `id` int NOT NULL,
  `line` int DEFAULT NULL,
  `from_place_id` int DEFAULT NULL,
  `to_place_id` int DEFAULT NULL,
  `departure_time` time DEFAULT NULL,
  `arrival_time` time DEFAULT NULL,
  `distance` int DEFAULT NULL,
  `speed` int DEFAULT NULL,
  `status` enum('AVAILABLE','UNAVAILABLE') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `schedules`
--

INSERT INTO `schedules` (`id`, `line`, `from_place_id`, `to_place_id`, `departure_time`, `arrival_time`, `distance`, `speed`, `status`) VALUES
(1, 1, 2, 3, '08:00:00', '08:16:00', 19900, 75, 'AVAILABLE'),
(2, 1, 3, 5, '08:18:00', '08:24:00', 6310, 75, 'AVAILABLE'),
(3, 1, 5, 15, '08:26:00', '08:33:00', 8570, 75, 'AVAILABLE'),
(4, 1, 15, 7, '08:35:00', '08:45:00', 11300, 75, 'AVAILABLE'),
(5, 1, 7, 9, '08:47:00', '08:53:00', 7050, 75, 'AVAILABLE'),
(6, 1, 9, 10, '08:55:00', '08:58:00', 3580, 75, 'AVAILABLE'),
(7, 1, 10, 17, '09:00:00', '09:04:00', 4860, 75, 'AVAILABLE'),
(8, 1, 17, 2, '09:06:00', '09:11:00', 5970, 75, 'AVAILABLE'),
(9, 2, 2, 11, '08:45:00', '08:50:00', 5970, 75, 'AVAILABLE'),
(10, 2, 11, 10, '08:52:00', '08:56:00', 4860, 75, 'AVAILABLE'),
(11, 2, 10, 9, '08:58:00', '09:01:00', 3580, 75, 'AVAILABLE'),
(12, 2, 9, 16, '09:03:00', '09:09:00', 7050, 75, 'AVAILABLE'),
(13, 2, 16, 6, '09:11:00', '09:21:00', 11300, 75, 'AVAILABLE'),
(14, 2, 6, 5, '09:23:00', '09:30:00', 8570, 75, 'AVAILABLE'),
(15, 2, 5, 3, '09:32:00', '09:38:00', 6310, 75, 'AVAILABLE'),
(16, 2, 3, 2, '09:40:00', '09:56:00', 19900, 75, 'AVAILABLE'),
(17, 1, 2, 3, '09:30:00', '09:46:00', 19900, 75, 'AVAILABLE'),
(18, 1, 3, 5, '09:48:00', '09:54:00', 6310, 75, 'AVAILABLE'),
(19, 1, 5, 15, '09:56:00', '10:03:00', 8570, 75, 'AVAILABLE'),
(20, 1, 15, 7, '10:05:00', '10:15:00', 11300, 75, 'AVAILABLE'),
(21, 1, 7, 9, '10:17:00', '10:23:00', 7050, 75, 'AVAILABLE'),
(22, 1, 9, 10, '10:25:00', '10:28:00', 3580, 75, 'AVAILABLE'),
(23, 1, 10, 17, '10:30:00', '10:34:00', 4860, 75, 'AVAILABLE'),
(24, 1, 17, 2, '10:36:00', '10:41:00', 5970, 75, 'AVAILABLE'),
(25, 2, 2, 11, '10:15:00', '10:20:00', 5970, 75, 'AVAILABLE'),
(26, 2, 11, 10, '10:22:00', '10:26:00', 4860, 75, 'AVAILABLE'),
(27, 2, 10, 9, '10:28:00', '10:31:00', 3580, 75, 'AVAILABLE'),
(28, 2, 9, 16, '10:33:00', '10:39:00', 7050, 75, 'AVAILABLE'),
(29, 2, 16, 6, '10:41:00', '10:51:00', 11300, 75, 'AVAILABLE'),
(30, 2, 6, 5, '10:53:00', '11:00:00', 8570, 75, 'AVAILABLE'),
(31, 2, 5, 3, '11:02:00', '11:08:00', 6310, 75, 'AVAILABLE'),
(32, 2, 3, 2, '11:10:00', '11:26:00', 19900, 75, 'AVAILABLE'),
(33, 1, 2, 3, '11:00:00', '11:16:00', 19900, 75, 'AVAILABLE'),
(34, 1, 3, 5, '11:18:00', '11:24:00', 6310, 75, 'AVAILABLE'),
(35, 1, 5, 15, '11:26:00', '11:33:00', 8570, 75, 'AVAILABLE'),
(36, 1, 15, 7, '11:35:00', '11:45:00', 11300, 75, 'AVAILABLE'),
(37, 1, 7, 9, '11:47:00', '11:53:00', 7050, 75, 'AVAILABLE'),
(38, 1, 9, 10, '11:55:00', '11:58:00', 3580, 75, 'AVAILABLE'),
(39, 1, 10, 17, '12:00:00', '12:04:00', 4860, 75, 'AVAILABLE'),
(40, 1, 17, 2, '12:06:00', '12:11:00', 5970, 75, 'AVAILABLE'),
(41, 2, 2, 11, '11:45:00', '11:50:00', 5970, 75, 'AVAILABLE'),
(42, 2, 11, 10, '11:52:00', '11:56:00', 4860, 75, 'AVAILABLE'),
(43, 2, 10, 9, '11:58:00', '12:01:00', 3580, 75, 'AVAILABLE'),
(44, 2, 9, 16, '12:03:00', '12:09:00', 7050, 75, 'AVAILABLE'),
(45, 2, 16, 6, '12:11:00', '12:21:00', 11300, 75, 'AVAILABLE'),
(46, 2, 6, 5, '12:23:00', '12:30:00', 8570, 75, 'AVAILABLE'),
(47, 2, 5, 3, '12:32:00', '12:38:00', 6310, 75, 'AVAILABLE'),
(48, 2, 3, 2, '12:40:00', '12:56:00', 19900, 75, 'AVAILABLE'),
(49, 1, 2, 3, '12:30:00', '12:46:00', 19900, 75, 'AVAILABLE'),
(50, 1, 3, 5, '12:48:00', '12:54:00', 6310, 75, 'AVAILABLE'),
(51, 1, 5, 15, '12:56:00', '13:03:00', 8570, 75, 'AVAILABLE'),
(52, 1, 15, 7, '13:05:00', '13:15:00', 11300, 75, 'AVAILABLE'),
(53, 1, 7, 9, '13:17:00', '13:23:00', 7050, 75, 'AVAILABLE'),
(54, 1, 9, 10, '13:25:00', '13:28:00', 3580, 75, 'AVAILABLE'),
(55, 1, 10, 17, '13:30:00', '13:34:00', 4860, 75, 'AVAILABLE'),
(56, 1, 17, 2, '13:36:00', '13:41:00', 5970, 75, 'AVAILABLE'),
(57, 2, 2, 11, '13:15:00', '13:20:00', 5970, 75, 'AVAILABLE'),
(58, 2, 11, 10, '13:22:00', '13:26:00', 4860, 75, 'AVAILABLE'),
(59, 2, 10, 9, '13:28:00', '13:31:00', 3580, 75, 'AVAILABLE'),
(60, 2, 9, 16, '13:33:00', '13:39:00', 7050, 75, 'AVAILABLE'),
(61, 2, 16, 6, '13:41:00', '13:51:00', 11300, 75, 'AVAILABLE'),
(62, 2, 6, 5, '13:53:00', '14:00:00', 8570, 75, 'AVAILABLE'),
(63, 2, 5, 3, '14:02:00', '14:08:00', 6310, 75, 'AVAILABLE'),
(64, 2, 3, 2, '14:10:00', '14:26:00', 19900, 75, 'AVAILABLE'),
(65, 1, 2, 3, '14:00:00', '14:16:00', 19900, 75, 'AVAILABLE'),
(66, 1, 3, 5, '14:18:00', '14:24:00', 6310, 75, 'AVAILABLE'),
(67, 1, 5, 15, '14:26:00', '14:33:00', 8570, 75, 'AVAILABLE'),
(68, 1, 15, 7, '14:35:00', '14:45:00', 11300, 75, 'AVAILABLE'),
(69, 1, 7, 9, '14:47:00', '14:53:00', 7050, 75, 'AVAILABLE'),
(70, 1, 9, 10, '14:55:00', '14:58:00', 3580, 75, 'AVAILABLE'),
(71, 1, 10, 17, '15:00:00', '15:04:00', 4860, 75, 'AVAILABLE'),
(72, 1, 17, 2, '15:06:00', '15:11:00', 5970, 75, 'AVAILABLE'),
(73, 2, 2, 11, '14:45:00', '14:50:00', 5970, 75, 'AVAILABLE'),
(74, 2, 11, 10, '14:52:00', '14:56:00', 4860, 75, 'AVAILABLE'),
(75, 2, 10, 9, '14:58:00', '15:01:00', 3580, 75, 'AVAILABLE'),
(76, 2, 9, 16, '15:03:00', '15:09:00', 7050, 75, 'AVAILABLE'),
(77, 2, 16, 6, '15:11:00', '15:21:00', 11300, 75, 'AVAILABLE'),
(78, 2, 6, 5, '15:23:00', '15:30:00', 8570, 75, 'AVAILABLE'),
(79, 2, 5, 3, '15:32:00', '15:38:00', 6310, 75, 'AVAILABLE'),
(80, 2, 3, 2, '15:40:00', '15:56:00', 19900, 75, 'AVAILABLE'),
(81, 1, 2, 3, '15:30:00', '15:46:00', 19900, 75, 'AVAILABLE'),
(82, 1, 3, 5, '15:48:00', '15:54:00', 6310, 75, 'AVAILABLE'),
(83, 1, 5, 15, '15:56:00', '16:03:00', 8570, 75, 'AVAILABLE'),
(84, 1, 15, 7, '16:05:00', '16:15:00', 11300, 75, 'AVAILABLE'),
(85, 1, 7, 9, '16:17:00', '16:23:00', 7050, 75, 'AVAILABLE'),
(86, 1, 9, 10, '16:25:00', '16:28:00', 3580, 75, 'AVAILABLE'),
(87, 1, 10, 17, '16:30:00', '16:34:00', 4860, 75, 'AVAILABLE'),
(88, 1, 17, 2, '16:36:00', '16:41:00', 5970, 75, 'AVAILABLE'),
(89, 2, 2, 11, '16:15:00', '16:20:00', 5970, 75, 'AVAILABLE'),
(90, 2, 11, 10, '16:22:00', '16:26:00', 4860, 75, 'AVAILABLE'),
(91, 2, 10, 9, '16:28:00', '16:31:00', 3580, 75, 'AVAILABLE'),
(92, 2, 9, 16, '16:33:00', '16:39:00', 7050, 75, 'AVAILABLE'),
(93, 2, 16, 6, '16:41:00', '16:51:00', 11300, 75, 'AVAILABLE'),
(94, 2, 6, 5, '16:53:00', '17:00:00', 8570, 75, 'AVAILABLE'),
(95, 2, 5, 3, '17:02:00', '17:08:00', 6310, 75, 'AVAILABLE'),
(96, 2, 3, 2, '17:10:00', '17:26:00', 19900, 75, 'AVAILABLE'),
(97, 1, 2, 3, '17:00:00', '17:16:00', 19900, 75, 'AVAILABLE'),
(98, 1, 3, 5, '17:18:00', '17:24:00', 6310, 75, 'AVAILABLE'),
(99, 1, 5, 15, '17:26:00', '17:33:00', 8570, 75, 'AVAILABLE'),
(100, 1, 15, 7, '17:35:00', '17:45:00', 11300, 75, 'AVAILABLE'),
(101, 1, 7, 9, '17:47:00', '17:53:00', 7050, 75, 'AVAILABLE'),
(102, 1, 9, 10, '17:55:00', '17:58:00', 3580, 75, 'AVAILABLE'),
(103, 1, 10, 17, '18:00:00', '18:04:00', 4860, 75, 'AVAILABLE'),
(104, 1, 17, 2, '18:06:00', '18:11:00', 5970, 75, 'AVAILABLE'),
(105, 2, 2, 11, '17:45:00', '17:50:00', 5970, 75, 'AVAILABLE'),
(106, 2, 11, 10, '17:52:00', '17:56:00', 4860, 75, 'AVAILABLE'),
(107, 2, 10, 9, '17:58:00', '18:01:00', 3580, 75, 'AVAILABLE'),
(108, 2, 9, 16, '18:03:00', '18:09:00', 7050, 75, 'AVAILABLE'),
(109, 2, 16, 6, '18:11:00', '18:21:00', 11300, 75, 'AVAILABLE'),
(110, 2, 6, 5, '18:23:00', '18:30:00', 8570, 75, 'AVAILABLE'),
(111, 2, 5, 3, '18:32:00', '18:38:00', 6310, 75, 'AVAILABLE'),
(112, 2, 3, 2, '18:40:00', '18:56:00', 19900, 75, 'AVAILABLE'),
(113, 1, 2, 3, '18:30:00', '18:46:00', 19900, 75, 'AVAILABLE'),
(114, 1, 3, 5, '18:48:00', '18:54:00', 6310, 75, 'AVAILABLE'),
(115, 1, 5, 15, '18:56:00', '19:03:00', 8570, 75, 'AVAILABLE'),
(116, 1, 15, 7, '19:05:00', '19:15:00', 11300, 75, 'AVAILABLE'),
(117, 1, 7, 9, '19:17:00', '19:23:00', 7050, 75, 'AVAILABLE'),
(118, 1, 9, 10, '19:25:00', '19:28:00', 3580, 75, 'AVAILABLE'),
(119, 1, 10, 17, '19:30:00', '19:34:00', 4860, 75, 'AVAILABLE'),
(120, 1, 17, 2, '19:36:00', '19:41:00', 5970, 75, 'AVAILABLE'),
(121, 2, 2, 11, '19:15:00', '19:20:00', 5970, 75, 'AVAILABLE'),
(122, 2, 11, 10, '19:22:00', '19:26:00', 4860, 75, 'AVAILABLE'),
(123, 2, 10, 9, '19:28:00', '19:31:00', 3580, 75, 'AVAILABLE'),
(124, 2, 9, 16, '19:33:00', '19:39:00', 7050, 75, 'AVAILABLE'),
(125, 2, 16, 6, '19:41:00', '19:51:00', 11300, 75, 'AVAILABLE'),
(126, 2, 6, 5, '19:53:00', '20:00:00', 8570, 75, 'AVAILABLE'),
(127, 2, 5, 3, '20:02:00', '20:08:00', 6310, 75, 'AVAILABLE'),
(128, 2, 3, 2, '20:10:00', '20:26:00', 19900, 75, 'AVAILABLE'),
(129, 1, 2, 3, '20:00:00', '20:16:00', 19900, 75, 'AVAILABLE'),
(130, 1, 3, 5, '20:18:00', '20:24:00', 6310, 75, 'AVAILABLE'),
(131, 1, 5, 15, '20:26:00', '20:33:00', 8570, 75, 'AVAILABLE'),
(132, 1, 15, 7, '20:35:00', '20:45:00', 11300, 75, 'AVAILABLE'),
(133, 1, 7, 9, '20:47:00', '20:53:00', 7050, 75, 'AVAILABLE'),
(134, 1, 9, 10, '20:55:00', '20:58:00', 3580, 75, 'AVAILABLE'),
(135, 1, 10, 17, '21:00:00', '21:04:00', 4860, 75, 'AVAILABLE'),
(136, 1, 17, 2, '21:06:00', '21:11:00', 5970, 75, 'AVAILABLE'),
(137, 3, 7, 1, '08:00:00', '08:11:00', 7570, 45, 'AVAILABLE'),
(138, 3, 1, 19, '08:13:00', '08:19:00', 3760, 45, 'AVAILABLE'),
(139, 3, 19, 12, '08:21:00', '08:27:00', 4190, 45, 'AVAILABLE'),
(140, 4, 12, 10, '08:30:00', '08:36:00', 4190, 45, 'AVAILABLE'),
(141, 4, 10, 8, '08:38:00', '08:44:00', 3760, 45, 'AVAILABLE'),
(142, 4, 8, 7, '08:46:00', '08:57:00', 7570, 45, 'AVAILABLE'),
(143, 3, 7, 1, '10:00:00', '10:11:00', 7570, 45, 'AVAILABLE'),
(144, 3, 1, 19, '10:13:00', '10:19:00', 3760, 45, 'AVAILABLE'),
(145, 3, 19, 12, '10:21:00', '10:27:00', 4190, 45, 'AVAILABLE'),
(146, 4, 12, 10, '10:30:00', '10:36:00', 4190, 45, 'AVAILABLE'),
(147, 4, 10, 8, '10:38:00', '10:44:00', 3760, 45, 'AVAILABLE'),
(148, 4, 8, 7, '10:46:00', '10:57:00', 7570, 45, 'AVAILABLE'),
(149, 3, 7, 1, '12:00:00', '12:11:00', 7570, 45, 'AVAILABLE'),
(150, 3, 1, 19, '12:13:00', '12:19:00', 3760, 45, 'AVAILABLE'),
(151, 3, 19, 12, '12:21:00', '12:27:00', 4190, 45, 'AVAILABLE'),
(152, 4, 12, 10, '12:30:00', '12:36:00', 4190, 45, 'AVAILABLE'),
(153, 4, 10, 8, '12:38:00', '12:44:00', 3760, 45, 'AVAILABLE'),
(154, 4, 8, 7, '12:46:00', '12:57:00', 7570, 45, 'AVAILABLE'),
(155, 3, 7, 1, '14:00:00', '14:11:00', 7570, 45, 'AVAILABLE'),
(156, 3, 1, 19, '14:13:00', '14:19:00', 3760, 45, 'AVAILABLE'),
(157, 3, 19, 12, '14:21:00', '14:27:00', 4190, 45, 'AVAILABLE'),
(158, 4, 12, 10, '14:30:00', '14:36:00', 4190, 45, 'AVAILABLE'),
(159, 4, 10, 8, '14:38:00', '14:44:00', 3760, 45, 'AVAILABLE'),
(160, 4, 8, 7, '14:46:00', '14:57:00', 7570, 45, 'AVAILABLE'),
(161, 3, 7, 1, '16:00:00', '16:11:00', 7570, 45, 'AVAILABLE'),
(162, 3, 1, 19, '16:13:00', '16:19:00', 3760, 45, 'AVAILABLE'),
(163, 3, 19, 12, '16:21:00', '16:27:00', 4190, 45, 'AVAILABLE'),
(164, 4, 12, 10, '16:30:00', '16:36:00', 4190, 45, 'AVAILABLE'),
(165, 4, 10, 8, '16:38:00', '16:44:00', 3760, 45, 'AVAILABLE'),
(166, 4, 8, 7, '16:46:00', '16:57:00', 7570, 45, 'AVAILABLE'),
(167, 3, 7, 1, '18:00:00', '18:11:00', 7570, 45, 'AVAILABLE'),
(168, 3, 1, 19, '18:13:00', '18:19:00', 3760, 45, 'AVAILABLE'),
(169, 3, 19, 12, '18:21:00', '18:27:00', 4190, 45, 'AVAILABLE'),
(170, 4, 12, 10, '18:30:00', '18:36:00', 4190, 45, 'AVAILABLE'),
(171, 4, 10, 8, '18:38:00', '18:44:00', 3760, 45, 'AVAILABLE'),
(172, 4, 8, 7, '18:46:00', '18:57:00', 7570, 45, 'AVAILABLE'),
(173, 3, 7, 1, '20:00:00', '20:11:00', 7570, 45, 'AVAILABLE'),
(174, 3, 1, 19, '20:13:00', '20:19:00', 3760, 45, 'AVAILABLE'),
(175, 3, 19, 12, '20:21:00', '20:27:00', 4190, 45, 'AVAILABLE'),
(176, 4, 12, 10, '20:30:00', '20:36:00', 4190, 45, 'AVAILABLE'),
(177, 4, 10, 8, '20:38:00', '20:44:00', 3760, 45, 'AVAILABLE'),
(178, 4, 8, 7, '20:46:00', '20:57:00', 7570, 45, 'AVAILABLE'),
(179, 5, 11, 12, '09:00:00', '09:04:00', 2720, 45, 'AVAILABLE'),
(180, 5, 12, 13, '09:06:00', '09:12:00', 4420, 45, 'AVAILABLE'),
(181, 5, 13, 20, '09:14:00', '09:28:00', 9850, 45, 'AVAILABLE'),
(182, 6, 20, 13, '10:00:00', '10:14:00', 9850, 45, 'AVAILABLE'),
(183, 6, 13, 12, '10:16:00', '10:22:00', 4420, 45, 'AVAILABLE'),
(184, 6, 12, 11, '10:24:00', '10:28:00', 2720, 45, 'AVAILABLE'),
(185, 5, 11, 12, '11:00:00', '11:04:00', 2720, 45, 'AVAILABLE'),
(186, 5, 12, 13, '11:06:00', '11:12:00', 4420, 45, 'AVAILABLE'),
(187, 5, 13, 20, '11:14:00', '11:28:00', 9850, 45, 'AVAILABLE'),
(188, 6, 20, 13, '12:00:00', '12:14:00', 9850, 45, 'AVAILABLE'),
(189, 6, 13, 12, '12:16:00', '12:22:00', 4420, 45, 'AVAILABLE'),
(190, 6, 12, 11, '12:24:00', '12:28:00', 2720, 45, 'AVAILABLE'),
(191, 5, 11, 12, '13:00:00', '13:04:00', 2720, 45, 'AVAILABLE'),
(192, 5, 12, 13, '13:06:00', '13:12:00', 4420, 45, 'AVAILABLE'),
(193, 5, 13, 20, '13:14:00', '13:28:00', 9850, 45, 'AVAILABLE'),
(194, 6, 20, 13, '14:00:00', '14:14:00', 9850, 45, 'AVAILABLE'),
(195, 6, 13, 12, '14:16:00', '14:22:00', 4420, 45, 'AVAILABLE'),
(196, 6, 12, 11, '14:24:00', '14:28:00', 2720, 45, 'AVAILABLE'),
(197, 5, 11, 12, '15:00:00', '15:04:00', 2720, 45, 'AVAILABLE'),
(198, 5, 12, 13, '15:06:00', '15:12:00', 4420, 45, 'AVAILABLE'),
(199, 5, 13, 20, '15:14:00', '15:28:00', 9850, 45, 'AVAILABLE'),
(200, 6, 20, 13, '16:00:00', '16:14:00', 9850, 45, 'AVAILABLE'),
(201, 6, 13, 12, '16:16:00', '16:22:00', 4420, 45, 'AVAILABLE'),
(202, 6, 12, 11, '16:24:00', '16:28:00', 2720, 45, 'AVAILABLE'),
(203, 5, 11, 12, '17:00:00', '17:04:00', 2720, 45, 'AVAILABLE'),
(204, 5, 12, 13, '17:06:00', '17:12:00', 4420, 45, 'AVAILABLE'),
(205, 5, 13, 20, '17:14:00', '17:28:00', 9850, 45, 'AVAILABLE'),
(206, 6, 20, 13, '18:00:00', '18:14:00', 9850, 45, 'AVAILABLE'),
(207, 6, 13, 12, '18:16:00', '18:22:00', 4420, 45, 'AVAILABLE'),
(208, 6, 12, 11, '18:24:00', '18:28:00', 2720, 45, 'AVAILABLE'),
(209, 5, 11, 12, '19:00:00', '19:04:00', 2720, 45, 'AVAILABLE'),
(210, 5, 12, 13, '19:06:00', '19:12:00', 4420, 45, 'AVAILABLE'),
(211, 5, 13, 20, '19:14:00', '19:28:00', 9850, 45, 'AVAILABLE'),
(212, 6, 20, 13, '20:00:00', '20:14:00', 9850, 45, 'AVAILABLE'),
(213, 6, 13, 12, '20:16:00', '20:22:00', 4420, 45, 'AVAILABLE'),
(214, 6, 12, 11, '20:24:00', '20:28:00', 2720, 45, 'AVAILABLE'),
(215, 7, 1, 2, '09:00:00', '09:04:00', 2260, 45, 'AVAILABLE'),
(216, 8, 2, 1, '09:00:00', '09:04:00', 2260, 45, 'AVAILABLE'),
(217, 7, 1, 2, '09:30:00', '09:34:00', 2260, 45, 'AVAILABLE'),
(218, 8, 2, 1, '09:30:00', '09:34:00', 2260, 45, 'AVAILABLE'),
(219, 7, 1, 2, '11:00:00', '11:04:00', 2260, 45, 'AVAILABLE'),
(220, 8, 2, 1, '11:00:00', '11:04:00', 2260, 45, 'AVAILABLE'),
(221, 7, 1, 2, '11:30:00', '11:34:00', 2260, 45, 'AVAILABLE'),
(222, 8, 2, 1, '11:30:00', '11:34:00', 2260, 45, 'AVAILABLE'),
(223, 7, 1, 2, '13:00:00', '13:04:00', 2260, 45, 'AVAILABLE'),
(224, 8, 2, 1, '13:00:00', '13:04:00', 2260, 45, 'AVAILABLE'),
(225, 7, 1, 2, '13:30:00', '13:34:00', 2260, 45, 'AVAILABLE'),
(226, 8, 2, 1, '13:30:00', '13:34:00', 2260, 45, 'AVAILABLE'),
(227, 7, 1, 2, '15:00:00', '15:04:00', 2260, 45, 'AVAILABLE'),
(228, 8, 2, 1, '15:00:00', '15:04:00', 2260, 45, 'AVAILABLE'),
(229, 7, 1, 2, '15:30:00', '15:34:00', 2260, 45, 'AVAILABLE'),
(230, 8, 2, 1, '15:30:00', '15:34:00', 2260, 45, 'AVAILABLE'),
(231, 7, 1, 2, '17:00:00', '17:04:00', 2260, 45, 'AVAILABLE'),
(232, 8, 2, 1, '17:00:00', '17:04:00', 2260, 45, 'AVAILABLE'),
(233, 7, 1, 2, '17:30:00', '17:34:00', 2260, 45, 'AVAILABLE'),
(234, 8, 2, 1, '17:30:00', '17:34:00', 2260, 45, 'AVAILABLE'),
(235, 7, 1, 2, '19:00:00', '19:04:00', 2260, 45, 'AVAILABLE'),
(236, 8, 2, 1, '19:00:00', '19:04:00', 2260, 45, 'AVAILABLE'),
(237, 7, 1, 2, '19:30:00', '19:34:00', 2260, 45, 'AVAILABLE'),
(238, 8, 2, 1, '19:30:00', '19:34:00', 2260, 45, 'AVAILABLE'),
(239, 7, 1, 2, '21:00:00', '21:04:00', 2260, 45, 'AVAILABLE'),
(240, 8, 2, 1, '21:00:00', '21:04:00', 2260, 45, 'AVAILABLE'),
(241, 9, 3, 4, '08:00:00', '08:06:00', 4450, 45, 'AVAILABLE'),
(242, 9, 4, 5, '08:08:00', '08:14:00', 4220, 45, 'AVAILABLE'),
(243, 9, 5, 3, '08:16:00', '08:25:00', 6310, 45, 'AVAILABLE'),
(244, 10, 3, 5, '09:00:00', '09:09:00', 6310, 45, 'AVAILABLE'),
(245, 10, 5, 4, '09:11:00', '09:17:00', 4220, 45, 'AVAILABLE'),
(246, 10, 4, 3, '09:19:00', '09:25:00', 4450, 45, 'AVAILABLE'),
(247, 9, 3, 4, '10:00:00', '10:06:00', 4450, 45, 'AVAILABLE'),
(248, 9, 4, 5, '10:08:00', '10:14:00', 4220, 45, 'AVAILABLE'),
(249, 9, 5, 3, '10:16:00', '10:25:00', 6310, 45, 'AVAILABLE'),
(250, 10, 3, 5, '11:00:00', '11:09:00', 6310, 45, 'AVAILABLE'),
(251, 10, 5, 4, '11:11:00', '11:17:00', 4220, 45, 'AVAILABLE'),
(252, 10, 4, 3, '11:19:00', '11:25:00', 4450, 45, 'AVAILABLE'),
(253, 9, 3, 4, '12:00:00', '12:06:00', 4450, 45, 'AVAILABLE'),
(254, 9, 4, 5, '12:08:00', '12:14:00', 4220, 45, 'AVAILABLE'),
(255, 9, 5, 3, '12:16:00', '12:25:00', 6310, 45, 'AVAILABLE'),
(256, 10, 3, 5, '13:00:00', '13:09:00', 6310, 45, 'AVAILABLE'),
(257, 10, 5, 4, '13:11:00', '13:17:00', 4220, 45, 'AVAILABLE'),
(258, 10, 4, 3, '13:19:00', '13:25:00', 4450, 45, 'AVAILABLE'),
(259, 9, 3, 4, '14:00:00', '14:06:00', 4450, 45, 'AVAILABLE'),
(260, 9, 4, 5, '14:08:00', '14:14:00', 4220, 45, 'AVAILABLE'),
(261, 9, 5, 3, '14:16:00', '14:25:00', 6310, 45, 'AVAILABLE'),
(262, 10, 3, 5, '15:00:00', '15:09:00', 6310, 45, 'AVAILABLE'),
(263, 10, 5, 4, '15:11:00', '15:17:00', 4220, 45, 'AVAILABLE'),
(264, 10, 4, 3, '15:19:00', '15:25:00', 4450, 45, 'AVAILABLE'),
(265, 9, 3, 4, '16:00:00', '16:06:00', 4450, 45, 'AVAILABLE'),
(266, 9, 4, 5, '16:08:00', '16:14:00', 4220, 45, 'AVAILABLE'),
(267, 9, 5, 3, '16:16:00', '16:25:00', 6310, 45, 'AVAILABLE'),
(268, 10, 3, 5, '17:00:00', '17:09:00', 6310, 45, 'AVAILABLE'),
(269, 10, 5, 4, '17:11:00', '17:17:00', 4220, 45, 'AVAILABLE'),
(270, 10, 4, 3, '17:19:00', '17:25:00', 4450, 45, 'AVAILABLE'),
(271, 9, 3, 4, '18:00:00', '18:06:00', 4450, 45, 'AVAILABLE'),
(272, 9, 4, 5, '18:08:00', '18:14:00', 4220, 45, 'AVAILABLE'),
(273, 9, 5, 3, '18:16:00', '18:25:00', 6310, 45, 'AVAILABLE'),
(274, 10, 3, 5, '19:00:00', '19:09:00', 6310, 45, 'AVAILABLE'),
(275, 10, 5, 4, '19:11:00', '19:17:00', 4220, 45, 'AVAILABLE'),
(276, 10, 4, 3, '19:19:00', '19:25:00', 4450, 45, 'AVAILABLE'),
(277, 9, 3, 4, '20:00:00', '20:06:00', 4450, 45, 'AVAILABLE'),
(278, 9, 4, 5, '20:08:00', '20:14:00', 4220, 45, 'AVAILABLE'),
(279, 9, 5, 3, '20:16:00', '20:25:00', 6310, 45, 'AVAILABLE'),
(280, 11, 6, 4, '08:15:00', '08:24:00', 6040, 45, 'AVAILABLE'),
(281, 11, 4, 5, '08:26:00', '08:32:00', 4220, 45, 'AVAILABLE'),
(282, 11, 5, 6, '08:34:00', '08:46:00', 8570, 45, 'AVAILABLE'),
(283, 12, 6, 5, '09:45:00', '09:57:00', 8570, 45, 'AVAILABLE'),
(284, 12, 5, 4, '09:59:00', '10:05:00', 4220, 45, 'AVAILABLE'),
(285, 12, 4, 6, '10:07:00', '10:16:00', 6040, 45, 'AVAILABLE'),
(286, 11, 6, 4, '11:15:00', '11:24:00', 6040, 45, 'AVAILABLE'),
(287, 11, 4, 5, '11:26:00', '11:32:00', 4220, 45, 'AVAILABLE'),
(288, 11, 5, 6, '11:34:00', '11:46:00', 8570, 45, 'AVAILABLE'),
(289, 12, 6, 5, '12:45:00', '12:57:00', 8570, 45, 'AVAILABLE'),
(290, 12, 5, 4, '12:59:00', '13:05:00', 4220, 45, 'AVAILABLE'),
(291, 12, 4, 6, '13:07:00', '13:16:00', 6040, 45, 'AVAILABLE'),
(292, 11, 6, 4, '14:15:00', '14:24:00', 6040, 45, 'AVAILABLE'),
(293, 11, 4, 5, '14:26:00', '14:32:00', 4220, 45, 'AVAILABLE'),
(294, 11, 5, 6, '14:34:00', '14:46:00', 8570, 45, 'AVAILABLE'),
(295, 12, 6, 5, '15:45:00', '15:57:00', 8570, 45, 'AVAILABLE'),
(296, 12, 5, 4, '15:59:00', '16:05:00', 4220, 45, 'AVAILABLE'),
(297, 12, 4, 6, '16:07:00', '16:16:00', 6040, 45, 'AVAILABLE'),
(298, 11, 6, 4, '17:15:00', '17:24:00', 6040, 45, 'AVAILABLE'),
(299, 11, 4, 5, '17:26:00', '17:32:00', 4220, 45, 'AVAILABLE'),
(300, 11, 5, 6, '17:34:00', '17:46:00', 8570, 45, 'AVAILABLE'),
(301, 12, 6, 5, '18:45:00', '18:57:00', 8570, 45, 'AVAILABLE'),
(302, 12, 5, 4, '18:59:00', '19:05:00', 4220, 45, 'AVAILABLE'),
(303, 12, 4, 6, '19:07:00', '19:16:00', 6040, 45, 'AVAILABLE'),
(304, 11, 6, 4, '20:15:00', '20:24:00', 6040, 45, 'AVAILABLE'),
(305, 11, 4, 5, '20:26:00', '20:32:00', 4220, 45, 'AVAILABLE'),
(306, 11, 5, 6, '20:34:00', '20:46:00', 8570, 45, 'AVAILABLE');

-- --------------------------------------------------------

--
-- Структура таблицы `schedule_choices`
--

CREATE TABLE `schedule_choices` (
  `id` int NOT NULL,
  `from_place_id` int DEFAULT NULL,
  `to_place_id` int DEFAULT NULL,
  `segments_hash` varchar(255) NOT NULL,
  `selects_count` int DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `schedule_choice_segments`
--

CREATE TABLE `schedule_choice_segments` (
  `id` int NOT NULL,
  `schedule_id` int DEFAULT NULL,
  `schedule_choice_id` int DEFAULT NULL,
  `order` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `role_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `token`, `role_id`) VALUES
(1, 'admin', '$2b$06$fFqxG0q4Ezy6k.AvPCFftO1uHn4xPM2ztHbDdLgSPIxyh.6z8L7Bu', '$2b$06$iJxEci6WdNr6ReINngVble9CeYZjwrekvSozrZuZfu7DEcqqk4obO', 1),
(2, 'user1', '$2b$06$nG5.l5hmuZxq7HkZT.Et2.FIERPAgSooQUeSZSyifiBt80kaV4OvK', NULL, 2),
(3, 'user2', '$2b$06$fk9XaIs7EkS15NPRTBukGewHH5x4D8kQ1CXTv76k9XZDvRCrT0s5.', NULL, 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place_id` (`place_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `from_place_id` (`from_place_id`),
  ADD KEY `to_place_id` (`to_place_id`);

--
-- Индексы таблицы `schedule_choices`
--
ALTER TABLE `schedule_choices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `from_place_id` (`from_place_id`),
  ADD KEY `to_place_id` (`to_place_id`);

--
-- Индексы таблицы `schedule_choice_segments`
--
ALTER TABLE `schedule_choice_segments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `schedule_id` (`schedule_id`),
  ADD KEY `schedule_choice_id` (`schedule_choice_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `places`
--
ALTER TABLE `places`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=307;

--
-- AUTO_INCREMENT для таблицы `schedule_choices`
--
ALTER TABLE `schedule_choices`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `schedule_choice_segments`
--
ALTER TABLE `schedule_choice_segments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `histories`
--
ALTER TABLE `histories`
  ADD CONSTRAINT `histories_ibfk_3` FOREIGN KEY (`place_id`) REFERENCES `places` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `histories_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `schedules_ibfk_1` FOREIGN KEY (`from_place_id`) REFERENCES `places` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `schedules_ibfk_2` FOREIGN KEY (`to_place_id`) REFERENCES `places` (`id`) ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `schedule_choices`
--
ALTER TABLE `schedule_choices`
  ADD CONSTRAINT `schedule_choices_ibfk_1` FOREIGN KEY (`from_place_id`) REFERENCES `places` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `schedule_choices_ibfk_2` FOREIGN KEY (`to_place_id`) REFERENCES `places` (`id`) ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `schedule_choice_segments`
--
ALTER TABLE `schedule_choice_segments`
  ADD CONSTRAINT `schedule_choice_segments_ibfk_3` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedule_choice_segments_ibfk_4` FOREIGN KEY (`schedule_choice_id`) REFERENCES `schedule_choices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
