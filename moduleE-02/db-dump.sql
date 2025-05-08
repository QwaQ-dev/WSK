-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 16 2024 г., 09:59
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
-- База данных: `survey-hub`
--

-- --------------------------------------------------------

--
-- Структура таблицы `admins`
--

CREATE TABLE `admins` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin', '$2b$06$83DCCx/KJ.D/T2af9TMLgOaGqM6wQFyPThyY3Iog8TjJ0bfws54.G', '2024-11-16 09:27:04', '2024-11-16 09:27:04');

-- --------------------------------------------------------

--
-- Структура таблицы `answers`
--

CREATE TABLE `answers` (
  `id` int NOT NULL,
  `value` varchar(128) NOT NULL,
  `question_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `answers`
--

INSERT INTO `answers` (`id`, `value`, `question_id`, `created_at`, `updated_at`) VALUES
(1, 'Ежедневно', 1, '2024-11-16 06:29:49', '2024-11-16 06:29:49'),
(2, 'Несколько раз в неделю', 1, '2024-11-16 06:29:49', '2024-11-16 06:29:49'),
(3, 'Раз в неделю', 1, '2024-11-16 06:29:49', '2024-11-16 06:29:49'),
(4, 'Реже одного раза в неделю', 1, '2024-11-16 06:29:49', '2024-11-16 06:29:49'),
(5, 'Общение с друзьями и семьей', 2, '2024-11-16 06:29:49', '2024-11-16 06:29:49'),
(6, 'Чтение новостей', 2, '2024-11-16 06:29:49', '2024-11-16 06:29:49'),
(7, 'Развлечения', 2, '2024-11-16 06:29:49', '2024-11-16 06:29:49'),
(8, 'Работа и обучение', 2, '2024-11-16 06:29:49', '2024-11-16 06:29:49'),
(9, 'fasdf', 3, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(10, 'fasdf', 3, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(11, 'fasdf', 3, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(12, 'fasdf', 3, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(13, 'fasdf', 4, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(14, 'fasdf', 4, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(15, 'fasdf', 4, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(16, 'fasdf', 4, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(17, 'fasdf', 5, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(18, 'fasdf', 5, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(19, 'fasdf', 5, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(20, 'fasdf', 5, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(21, 'asdfads', 6, '2024-11-16 06:56:17', '2024-11-16 06:56:17'),
(22, 'fasdfasdf', 6, '2024-11-16 06:56:17', '2024-11-16 06:56:17'),
(23, 'fasdfasd', 6, '2024-11-16 06:56:17', '2024-11-16 06:56:17'),
(24, 'sdafsadfsadf', 6, '2024-11-16 06:56:17', '2024-11-16 06:56:17'),
(25, 'sdafasd', 7, '2024-11-16 06:56:17', '2024-11-16 06:56:17'),
(26, 'fsadfasdf', 7, '2024-11-16 06:56:17', '2024-11-16 06:56:17'),
(27, 'sdafasd', 7, '2024-11-16 06:56:17', '2024-11-16 06:56:17'),
(28, 'dsaf', 7, '2024-11-16 06:56:17', '2024-11-16 06:56:17');

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Привычки использования социальных сетей', '2024-11-16 06:28:01', '2024-11-16 06:28:01'),
(2, 'Окружающая среда и экология', '2024-11-16 06:28:07', '2024-11-16 06:28:07'),
(3, 'Предпочтения в еде', '2024-11-16 06:28:11', '2024-11-16 06:28:11'),
(4, 'Путешествия и отдых', '2024-11-16 06:28:21', '2024-11-16 06:28:21'),
(5, 'Спортивные увлечения', '2024-11-16 06:28:23', '2024-11-16 06:28:23'),
(6, 'Работа и карьера', '2024-11-16 06:28:26', '2024-11-16 06:28:26'),
(7, 'Образ жизни и здоровье', '2024-11-16 06:28:28', '2024-11-16 06:28:28'),
(8, 'Технологии и гаджеты', '2024-11-16 06:28:33', '2024-11-16 06:28:33'),
(9, 'Финансовые привычки и сбережения', '2024-11-16 06:28:36', '2024-11-16 06:28:36'),
(10, 'Культура и предпочтения в искусстве', '2024-11-16 06:28:40', '2024-11-16 06:28:40');

-- --------------------------------------------------------

--
-- Структура таблицы `links`
--

CREATE TABLE `links` (
  `id` int NOT NULL,
  `code` varchar(8) NOT NULL,
  `survey_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `questions`
--

CREATE TABLE `questions` (
  `id` int NOT NULL,
  `value` varchar(255) NOT NULL,
  `survey_id` int DEFAULT NULL,
  `question_type_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `questions`
--

INSERT INTO `questions` (`id`, `value`, `survey_id`, `question_type_id`, `created_at`, `updated_at`) VALUES
(1, 'Как часто вы заходите в социальные сети?', 1, 1, '2024-11-16 06:29:49', '2024-11-16 06:29:49'),
(2, 'Для чего вы чаще всего используете социальные сети?', 1, 2, '2024-11-16 06:29:49', '2024-11-16 06:29:49'),
(3, 'fasdf', 2, 2, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(4, 'fasdf', 2, 2, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(5, 'fasdf', 2, 2, '2024-11-16 06:39:26', '2024-11-16 06:39:26'),
(6, 'asdfadsfsdafsad', 3, 1, '2024-11-16 06:56:17', '2024-11-16 06:59:01'),
(7, 'asdfasdf', 3, 1, '2024-11-16 06:56:17', '2024-11-16 06:56:17');

-- --------------------------------------------------------

--
-- Структура таблицы `question_types`
--

CREATE TABLE `question_types` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `question_types`
--

INSERT INTO `question_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'one', '2024-11-16 09:27:13', '2024-11-16 09:27:13'),
(2, 'many', '2024-11-16 09:27:13', '2024-11-16 09:27:13');

-- --------------------------------------------------------

--
-- Структура таблицы `surveys`
--

CREATE TABLE `surveys` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `surveys`
--

INSERT INTO `surveys` (`id`, `title`, `description`, `category_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Как часто вы пользуетесь социальными сетями? Edited', 'Этот опрос направлен на изучение предпочтений в использовании социальных сетей: частоты использования, целей и любимых платформ. Результаты помогут узнать, как современные пользователи взаимодействуют с социальными платформами.', 1, '2024-11-16 06:29:49', '2024-11-16 06:32:43', NULL),
(2, 'sdafasdf', 'fdsafsdf', 1, '2024-11-16 06:39:26', '2024-11-16 06:46:34', '2024-11-16 06:46:34'),
(3, 'asdfasd', 'dsafadsf', 1, '2024-11-16 06:56:17', '2024-11-16 06:56:17', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `ip` varchar(128) NOT NULL,
  `user_agent` varchar(128) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `user_answers`
--

CREATE TABLE `user_answers` (
  `id` int NOT NULL,
  `survey_id` int DEFAULT NULL,
  `link_id` int DEFAULT NULL,
  `question_id` int DEFAULT NULL,
  `answer_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `survey_id` (`survey_id`);

--
-- Индексы таблицы `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `survey_id` (`survey_id`),
  ADD KEY `question_type_id` (`question_type_id`);

--
-- Индексы таблицы `question_types`
--
ALTER TABLE `question_types`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_answers`
--
ALTER TABLE `user_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `survey_id` (`survey_id`),
  ADD KEY `link_id` (`link_id`),
  ADD KEY `question_id` (`question_id`),
  ADD KEY `answer_id` (`answer_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `links`
--
ALTER TABLE `links`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `question_types`
--
ALTER TABLE `question_types`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `surveys`
--
ALTER TABLE `surveys`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `user_answers`
--
ALTER TABLE `user_answers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `links`
--
ALTER TABLE `links`
  ADD CONSTRAINT `links_ibfk_1` FOREIGN KEY (`survey_id`) REFERENCES `surveys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`survey_id`) REFERENCES `surveys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `questions_ibfk_2` FOREIGN KEY (`question_type_id`) REFERENCES `question_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `surveys`
--
ALTER TABLE `surveys`
  ADD CONSTRAINT `surveys_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `user_answers`
--
ALTER TABLE `user_answers`
  ADD CONSTRAINT `user_answers_ibfk_1` FOREIGN KEY (`survey_id`) REFERENCES `surveys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_answers_ibfk_2` FOREIGN KEY (`link_id`) REFERENCES `links` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `user_answers_ibfk_3` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_answers_ibfk_4` FOREIGN KEY (`answer_id`) REFERENCES `answers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_answers_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
