-- phpMyAdmin SQL Dump
-- version 4.5.1deb3
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 06-05-2016 a las 10:32:44
-- Versión del servidor: 5.6.27-2
-- Versión de PHP: 5.6.15-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aei`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categotyAsk`
--

CREATE TABLE `categotyAsk` (
  `idcategotyAsk` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `icon` varchar(100) NOT NULL,
  `section` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categotyAsk`
--

INSERT INTO `categotyAsk` (`idcategotyAsk`, `name`, `description`, `icon`, `section`) VALUES
(1, 'No sabes que sembrar', 'Te enseñamos desde cero', './img/iconAsk1.png', 'guias'),
(2, 'Ya sabes como sembrar', 'Comunicate con expertos', './img/iconAsk2.png', 'expertos'),
(3, 'Comunicate con expertos', 'debes estar registrado o tener cuenta', './img/iconAsk3.png', 'registro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chats`
--

CREATE TABLE `chats` (
  `idchats` int(11) NOT NULL,
  `msg` text NOT NULL,
  `dater` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` int(11) NOT NULL,
  `expert` int(11) NOT NULL,
  `name` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `chats`
--

INSERT INTO `chats` (`idchats`, `msg`, `dater`, `user`, `expert`, `name`) VALUES
(1, 'aefserg sergse', '2016-04-04 22:50:51', 1, 1, 'Jorge Snachez'),
(2, 'hello como estan :D', '2016-04-04 22:51:44', 1, 1, 'Jorge Snachez'),
(3, 'sergsreth', '2016-04-04 23:00:22', 1, 1, 'Jorge Snachez'),
(4, 'HOla Camilo como estas :D', '2016-04-04 23:04:29', 1, 1, 'Jorge Snachez'),
(5, 'HOla Camilo como estas :D', '2016-04-04 23:06:33', 1, 1, 'Jorge Snachez'),
(6, 'HOla Camilo como estas :D\n', '2016-04-04 23:11:02', 1, 1, 'Jorge Snachez'),
(7, 'jajajja :P\n', '2016-04-04 23:11:12', 1, 1, 'Jorge Snachez'),
(8, 'jajajja :P\n', '2016-04-04 23:11:38', 1, 1, 'Jorge Snachez'),
(9, 'buenas tardes\n', '2016-04-04 23:11:48', 1, 1, 'Jorge Snachez'),
(10, 'que haces hermanno\n', '2016-04-04 23:12:01', 1, 1, 'Jorge Snachez'),
(11, 'que haces hermanno\n\n', '2016-04-04 23:12:07', 1, 1, 'Jorge Snachez'),
(12, 'si buenas caballero', '2016-04-04 23:12:32', 1, 1, 'Jorge Snachez'),
(13, 'como las busca?', '2016-04-04 23:12:38', 1, 1, 'Jorge Snachez'),
(14, 'con buena pierna XD', '2016-04-04 23:12:51', 1, 1, 'Jorge Snachez'),
(15, 'con buena pierna XD\nsergse', '2016-04-04 23:15:37', 1, 1, 'Jorge Snachez'),
(16, 'con buena pierna XD\nsergse\nser', '2016-04-04 23:15:38', 1, 1, 'Jorge Snachez'),
(17, 'con buena pierna XD\nsergse\nser\nserg', '2016-04-04 23:15:38', 1, 1, 'Jorge Snachez'),
(18, 'con buena pierna XD\nsergse\nser\nserg\nsegr', '2016-04-04 23:15:39', 1, 1, 'Jorge Snachez'),
(19, 'serh ser', '2016-04-04 23:16:30', 1, 1, 'Jorge Snachez'),
(20, 'serh ser\nede', '2016-04-04 23:16:31', 1, 1, 'Jorge Snachez'),
(21, 'serh ser\nede\ndrth', '2016-04-04 23:16:40', 1, 1, 'Jorge Snachez'),
(22, 'serh ser\nede\ndrth\nfrth', '2016-04-04 23:16:41', 1, 1, 'Jorge Snachez'),
(23, 'serh ser\nede\ndrth\nfrth\nftyj', '2016-04-04 23:16:41', 1, 1, 'Jorge Snachez'),
(24, 'iuawefges\n', '2016-04-04 23:17:28', 1, 1, 'Jorge Snachez'),
(25, 'iuawefges\nsrgser\n', '2016-04-04 23:17:33', 1, 1, 'Jorge Snachez'),
(26, 'swegrserg sergserg ser\n', '2016-04-04 23:17:46', 1, 1, 'Jorge Snachez'),
(27, 'Hola caballero', '2016-04-04 23:19:53', 1, 1, 'Jorge Snachez'),
(28, 'y ebtije', '2016-04-04 23:20:40', 1, 1, 'Jorge Snachez'),
(29, ' sknfgser gkiserbgse', '2016-04-04 23:20:44', 1, 1, 'Jorge Snachez'),
(30, ' sknfgser gkiserbgse\nuyyy como estas jajjaj', '2016-04-04 23:20:53', 1, 1, 'Jorge Snachez'),
(31, 'buenas soy faber\n', '2016-04-04 23:25:59', 1, 1, 'Jorge Snachez'),
(32, 'en que puedo colaborarle?\n', '2016-04-04 23:26:13', 1, 1, 'Jorge Snachez'),
(33, 'Buenas buenas :D', '2016-04-04 23:27:02', 1, 1, 'Jorge Snachez'),
(34, 'Buenas buenas :D\nque tal la vida en los USA XD', '2016-04-04 23:27:12', 1, 1, 'Jorge Snachez'),
(35, 'holas', '2016-04-04 23:28:36', 1, 1, 'Jorge Snachez'),
(36, 'soy jorge como es tu nombre señor carillo', '2016-04-04 23:28:47', 1, 1, 'Jorge Snachez'),
(37, 'como va todo :D', '2016-04-04 23:29:03', 1, 1, 'Jorge Snachez'),
(38, 'espero la finca este muy bien :D', '2016-04-04 23:29:13', 1, 1, 'Jorge Snachez'),
(39, 'Hola carino', '2016-04-04 23:53:40', 1, 1, 'Jorge Snachez'),
(40, 'Buenas noches Andres', '2016-04-05 00:00:21', 1, 1, 'Jorge Snachez'),
(41, 'como estas', '2016-04-05 00:00:33', 1, 1, 'Jorge Snachez'),
(42, 'bien muchas garacias', '2016-04-05 00:00:44', 1, 1, 'Camilo Rojas'),
(43, 'sefserg sergse', '2016-04-05 00:03:03', 5, 1, 'Jorge Snachez'),
(44, 'zsrgse', '2016-04-05 00:03:08', 5, 1, 'Jorge Snachez'),
(45, 'srgseth', '2016-04-05 00:03:14', 5, 1, 'Jorge Snachez'),
(46, 'sergsr', '2016-04-05 00:03:25', 5, 1, 'Jorge Snachez'),
(47, 'sois unos ateos de mierda XD', '2016-04-05 00:03:56', 5, 1, 'Jorge Snachez'),
(48, 'y que tetres con sigo adentro', '2016-04-05 00:04:06', 5, 1, 'Jorge Snachez'),
(49, 'Hola buenas', '2016-04-05 00:04:13', 1, 1, 'Camilo Rojas'),
(50, 'sawrgse', '2016-04-05 00:06:27', 5, 1, 'Jorge Snachez'),
(51, 'hola nggia', '2016-04-05 00:06:33', 1, 1, 'Camilo Rojas'),
(52, 'esrrt sergs', '2016-04-05 00:10:07', 5, 1, 'Jorge Snachez'),
(53, 'buuu', '2016-04-05 00:10:12', 5, 1, 'Camilo Rojas'),
(54, 'awgr sergser', '2016-04-05 00:13:01', 5, 1, 'Jorge Snachez'),
(55, 'sergserhs', '2016-04-05 00:13:06', 5, 1, 'Camilo Rojas'),
(56, 'awrgser', '2016-04-05 00:15:06', 5, 1, 'Jorge Snachez'),
(57, 'swgrsergerges', '2016-04-05 00:15:10', 5, 1, 'Camilo Rojas'),
(58, 'jajajja casi que no mk XD', '2016-04-05 00:15:21', 5, 1, 'Camilo Rojas'),
(59, 'basta ede prhibición', '2016-04-05 00:19:39', 5, 1, 'Jorge Snachez'),
(60, 'arriba XD', '2016-04-05 00:19:45', 5, 1, 'Camilo Rojas'),
(61, 'que riko XD', '2016-04-05 00:19:57', 5, 1, 'Camilo Rojas'),
(62, 'no chinas hoy!!', '2016-04-05 00:20:32', 5, 1, 'Camilo Rojas'),
(63, 'aprende villano Xd', '2016-04-05 00:21:03', 5, 1, 'Camilo Rojas'),
(64, 'baby', '2016-04-05 00:28:25', 5, 1, 'Jorge Snachez'),
(65, 'holas', '2016-04-05 00:28:49', 5, 1, 'Jorge Snachez'),
(66, 'awefweg', '2016-04-05 00:29:29', 5, 1, 'Camilo Rojas'),
(67, 'zsrgsrg sergse', '2016-04-05 00:31:32', 5, 1, 'Jorge Snachez'),
(68, 'yeah yeah', '2016-04-05 00:31:51', 5, 1, 'Camilo Rojas'),
(69, 'hai no mierda XD', '2016-04-05 00:34:57', 5, 1, 'Jorge Snachez'),
(70, 'creo que la cague', '2016-04-05 00:35:09', 5, 1, 'Camilo Rojas'),
(71, 'por que?', '2016-04-05 00:35:16', 5, 1, 'Jorge Snachez'),
(72, 'no es que algo no funciona', '2016-04-05 00:35:26', 5, 1, 'Camilo Rojas'),
(73, 'Buenas tardes como esta', '2016-04-05 00:37:08', 5, 1, 'Jorge Snachez'),
(74, 'mi nombre es faber torres en que puedo ayudarle :D', '2016-04-05 00:37:19', 5, 1, 'Jorge Snachez'),
(75, 'Hola Faber soy Andres', '2016-04-05 00:37:33', 5, 1, 'Camilo Rojas'),
(76, 'Mu cultivo tiene estos fallos', '2016-04-05 00:37:50', 5, 1, 'Camilo Rojas'),
(77, 'Hola camilo como estas', '2016-04-05 01:22:51', 66, 1, 'Jorge Snachez'),
(78, 'Te hablamos de AEI en que podemos servirte?', '2016-04-05 01:23:09', 66, 1, 'Jorge Snachez'),
(79, 'Hola como estas es que me preocupa mi cultivo', '2016-04-05 01:23:23', 66, 1, 'Camilo Rojas'),
(80, 'tu cultivo de papa que tiene?', '2016-04-05 01:23:35', 66, 1, 'Jorge Snachez'),
(81, 'Buenas tardes como estan :D', '2016-04-05 01:24:34', 62, 1, 'Jorge Snachez'),
(82, 'Buenas Tardes habla con Jorge Sanchez, en que puedo colaborarle :)', '2016-04-05 03:16:27', 56, 1, 'Jorge Snachez'),
(83, 'A que altura esta su predio?', '2016-04-05 03:16:39', 56, 1, 'Jorge Snachez'),
(84, 'Don Jorge estoy en el municipio de Cajica', '2016-04-05 03:17:03', 56, 1, 'Camilo Rojas'),
(85, 'ok en ese lugar esta perfecto la siembra, y', '2016-04-05 03:17:28', 56, 1, 'Jorge Snachez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `newQuery`
--

CREATE TABLE `newQuery` (
  `idnewQuery` int(11) NOT NULL,
  `dater` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'fecha y hora de guarado',
  `datec` datetime DEFAULT NULL COMMENT 'fecha y hora de respuesta',
  `mgm` text NOT NULL,
  `idtypeAgriculture` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `newQuery`
--

INSERT INTO `newQuery` (`idnewQuery`, `dater`, `datec`, `mgm`, `idtypeAgriculture`) VALUES
(1, '2016-04-04 16:17:37', NULL, 'drtudtyj drthdrthd rthdr', 2),
(2, '2016-04-04 16:17:43', NULL, 'drtudtyj drthdrthd rthdr', 2),
(3, '2016-04-04 16:21:33', NULL, 'por que no hay caminos hacia la casa', 2),
(4, '2016-04-04 23:25:46', NULL, 'Holdbf', 1),
(5, '2016-04-04 23:33:33', NULL, 'no se que hacer con mi vida', 2),
(6, '2016-04-04 23:34:05', NULL, 'no se que hacer con mi vida :''(', 2),
(7, '2016-04-04 23:34:40', NULL, 'no se que hacer :''(', 2),
(8, '2016-04-04 23:42:03', NULL, 'como montar una burra', 2),
(9, '2016-04-04 23:42:23', NULL, 'sergdrt rtgdrth dr', 2),
(10, '2016-04-04 23:44:01', NULL, 'Holas como estan', 2),
(11, '2016-04-04 23:44:54', NULL, 'ya no quiero sufiri mas :''(', 2),
(12, '2016-04-04 23:45:20', NULL, 'ya no quiro sufrir mas .l.', 2),
(13, '2016-04-04 23:53:31', NULL, 'awrgaer', 2),
(14, '2016-04-05 00:00:10', NULL, 'mi nombre es Andres', 2),
(15, '2016-04-05 00:03:21', NULL, 'sergsthtr', 2),
(16, '2016-04-05 00:36:55', NULL, 'Hola smigod', 1),
(17, '2016-04-05 00:47:47', NULL, 'edrgdrthdr', 2),
(18, '2016-04-05 00:48:42', NULL, 'sergserg sergse', 2),
(19, '2016-04-05 01:01:41', NULL, 'miguel pulido', 2),
(20, '2016-04-05 01:03:45', NULL, 'swegsergse', 2),
(21, '2016-04-05 01:05:45', NULL, 'asefserger', 2),
(22, '2016-04-05 01:07:04', NULL, 'srgsergse', 2),
(23, '2016-04-05 01:08:45', NULL, 'zsrgserhdrthd', 2),
(24, '2016-04-05 01:13:30', NULL, 'Holal nena XD', 2),
(25, '2016-04-05 01:14:19', NULL, 'zsrgsergse', 2),
(26, '2016-04-05 01:14:34', NULL, 'zsegfsgrse', 2),
(27, '2016-04-05 01:15:56', NULL, 'drthdrth drthdr', 2),
(28, '2016-04-05 01:16:47', NULL, 'sgzsrgsetgse', 2),
(29, '2016-04-05 01:18:14', NULL, 'zsegsergse', 2),
(30, '2016-04-05 01:19:35', NULL, 'sergserges', 2),
(31, '2016-04-05 01:20:40', NULL, 'srgserg sergser', 2),
(32, '2016-04-05 01:21:08', NULL, 'zsrgserg sergse', 2),
(33, '2016-04-05 01:22:37', NULL, 'Hola a toos como estan :D', 2),
(34, '2016-04-05 01:24:14', NULL, 'No se que hacer con mi música es demaciada', 2),
(35, '2016-04-05 03:15:56', NULL, 'Como comienzo una siembra de papa', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pays`
--

CREATE TABLE `pays` (
  `idpays` int(11) NOT NULL,
  `typePlan` smallint(6) NOT NULL DEFAULT '0' COMMENT 'si es 0 es plan mensual y si es 1 es plan por problema'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `steps`
--

CREATE TABLE `steps` (
  `idsteps` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `allInfo` text NOT NULL,
  `img` varchar(45) DEFAULT NULL,
  `idtypeAgriculture` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `steps`
--

INSERT INTO `steps` (`idsteps`, `name`, `description`, `allInfo`, `img`, `idtypeAgriculture`) VALUES
(1, 'Paso 1', 'Buscar una buena tierra', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', './img/cilantro_weston_500_400.jpg', 1),
(2, 'Paso 2', 'Comprar semillas Saludables', ' the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ', './img/Coriander.jpg', 1),
(3, 'Paso 3', 'Heche buena agua', ' majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin word', './img/aguaRiego.jpg', 1),
(6, 'Paso 1', 'Verificar al altura del terreno', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', './img/alturaPapa.jpg', 2),
(7, 'Paso 2', 'Buscar semillas', 'ry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I', './img/papasemilla.jpg', 2),
(8, 'Paso 1', 'Amabientar el terreno', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true ge', './img/arado004.jpg', 3),
(9, 'Paso 2', 'Buscar Semillas', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)', './img/Image35.gif', 3),
(10, 'Paso 4', 'Que tipo de quimico usar', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reaso', './img/pestisida.jpg', 1),
(11, 'Paso 5', 'Modo de cosecha', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reaso', './img/cosecha-de-tomate.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typeAgriculture`
--

CREATE TABLE `typeAgriculture` (
  `idtypeAgriculture` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `img` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `typeAgriculture`
--

INSERT INTO `typeAgriculture` (`idtypeAgriculture`, `name`, `img`) VALUES
(1, 'Hortaliza', './img/hortaliza.jpg'),
(2, 'papa', './img/papa.jpg'),
(3, 'yuca', './img/yuca.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `localization` varchar(45) DEFAULT NULL,
  `typeuser` smallint(6) NOT NULL COMMENT '0 es campesino, y 1 es agronomo',
  `password` varchar(45) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`iduser`, `name`, `phone`, `localization`, `typeuser`, `password`, `mail`) VALUES
(1, 'Jorge Sanchez', '315487845', NULL, 1, '123456', 'sojoisf@yahoo.es'),
(2, 'Camilo Castillo', '68465', NULL, 1, '123456789', 'camilo@aeiweb.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_typeAgriculture`
--

CREATE TABLE `user_typeAgriculture` (
  `iduser_typeAgriculturecol` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idtypeAgriculture` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user_typeAgriculture`
--

INSERT INTO `user_typeAgriculture` (`iduser_typeAgriculturecol`, `iduser`, `idtypeAgriculture`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 2, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categotyAsk`
--
ALTER TABLE `categotyAsk`
  ADD PRIMARY KEY (`idcategotyAsk`);

--
-- Indices de la tabla `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`idchats`),
  ADD KEY `fk_chats_user1_idx` (`expert`);

--
-- Indices de la tabla `newQuery`
--
ALTER TABLE `newQuery`
  ADD PRIMARY KEY (`idnewQuery`),
  ADD KEY `fk_newQuery_typeAgriculture1_idx` (`idtypeAgriculture`);

--
-- Indices de la tabla `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`idpays`);

--
-- Indices de la tabla `steps`
--
ALTER TABLE `steps`
  ADD PRIMARY KEY (`idsteps`),
  ADD KEY `fk_steps_typeAgriculture1_idx` (`idtypeAgriculture`);

--
-- Indices de la tabla `typeAgriculture`
--
ALTER TABLE `typeAgriculture`
  ADD PRIMARY KEY (`idtypeAgriculture`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`);

--
-- Indices de la tabla `user_typeAgriculture`
--
ALTER TABLE `user_typeAgriculture`
  ADD PRIMARY KEY (`iduser_typeAgriculturecol`),
  ADD KEY `fk_user_has_typeAgriculture_typeAgriculture1_idx` (`idtypeAgriculture`),
  ADD KEY `fk_user_has_typeAgriculture_user_idx` (`iduser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categotyAsk`
--
ALTER TABLE `categotyAsk`
  MODIFY `idcategotyAsk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `chats`
--
ALTER TABLE `chats`
  MODIFY `idchats` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
--
-- AUTO_INCREMENT de la tabla `newQuery`
--
ALTER TABLE `newQuery`
  MODIFY `idnewQuery` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT de la tabla `pays`
--
ALTER TABLE `pays`
  MODIFY `idpays` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `steps`
--
ALTER TABLE `steps`
  MODIFY `idsteps` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `typeAgriculture`
--
ALTER TABLE `typeAgriculture`
  MODIFY `idtypeAgriculture` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `user_typeAgriculture`
--
ALTER TABLE `user_typeAgriculture`
  MODIFY `iduser_typeAgriculturecol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `fk_chats_user1` FOREIGN KEY (`expert`) REFERENCES `user` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `newQuery`
--
ALTER TABLE `newQuery`
  ADD CONSTRAINT `fk_newQuery_typeAgriculture1` FOREIGN KEY (`idtypeAgriculture`) REFERENCES `typeAgriculture` (`idtypeAgriculture`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `steps`
--
ALTER TABLE `steps`
  ADD CONSTRAINT `fk_steps_typeAgriculture1` FOREIGN KEY (`idtypeAgriculture`) REFERENCES `typeAgriculture` (`idtypeAgriculture`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `user_typeAgriculture`
--
ALTER TABLE `user_typeAgriculture`
  ADD CONSTRAINT `fk_user_has_typeAgriculture_typeAgriculture1` FOREIGN KEY (`idtypeAgriculture`) REFERENCES `typeAgriculture` (`idtypeAgriculture`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_has_typeAgriculture_user` FOREIGN KEY (`iduser`) REFERENCES `user` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
