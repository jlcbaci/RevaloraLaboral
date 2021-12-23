-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-12-2021 a las 05:29:21
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jorge_coello`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenido`
--

CREATE TABLE `contenido` (
  `idcontenido` int(5) UNSIGNED NOT NULL,
  `titcontenido` varchar(100) NOT NULL,
  `desccontenido` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `usercrea` varchar(50) NOT NULL,
  `feccrea` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `usermod` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `fecmod` datetime DEFAULT NULL,
  `flag` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `contenido`
--

INSERT INTO `contenido` (`idcontenido`, `titcontenido`, `desccontenido`, `usercrea`, `feccrea`, `usermod`, `fecmod`, `flag`) VALUES
(1, 'Testimonio', '\"En el proceso de aprender yo aproximadamente 17 meses bien porque me he reencontrado conmigo mismo y dando cuenta que tengo capacidades como para ser un oficio\"', 'Administrador', '2021-12-22 02:06:09', '', '0000-00-00 00:00:00', 1),
(2, 'Sistema de Catalogo de Perfil Ocupacional', 'Tenemos lo que buscas y descubre al instante en la matriz de resultados donde se integran la información general del Catálogo Nacional de Perfiles Ocupacionales.', 'Administrador', '2021-12-22 00:28:28', '', '0000-00-00 00:00:00', 1),
(3, 'Revalora Laboral', 'Somos una empresa autorizada por el Ministerio de Promoción de Trabajo y del Empleo, que presta servicios integrados para CERTIFICACION DE COMPETENCIAS LABORALES.', '', '2021-12-22 19:52:21', NULL, NULL, 1),
(4, 'Nuestra Misión', 'Su misión es lograr que las competencias laborales a los usuarios, a través de procesos de evaluación y certificación alineados con las demandas del mercado del trabajo y propiciando su articulación con una oferta de capacitación laboral basada en competencias. Al mismo tiempo, promover el enfoque de competencias en la educación formal de nivel medio y superior, en programas de innovación y fomento productivo, en la gestión de personas a nivel de empresas, en programas sociales y sistemas de intermediación laboral, en un esquema de formación permanente.', '', '2021-12-22 19:52:34', NULL, NULL, 1),
(5, 'Nuestra Visión\r\n', 'Ser una entidad líder a nivel nacional, diferenciándonos por la excelente calidad, creatividad e innovación de nuestra oferta de catalogo de perfiles ocupacionales, con el compromiso de promover las ofertas de competencias laborales.', '', '2021-12-22 22:06:08', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `idperfil` int(5) UNSIGNED NOT NULL COMMENT 'Código primario de perfil ocupacional',
  `idsector` int(2) UNSIGNED NOT NULL COMMENT 'Código primario de división',
  `codperfil` varchar(11) NOT NULL COMMENT 'Código generado de perfil ocupacional',
  `compgen` text NOT NULL COMMENT 'Descripción de competencia general',
  `nomperfil` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Descripción de perfil ocupacional',
  `numvigencia` int(2) NOT NULL COMMENT 'Número de años de vigencia',
  `version` decimal(2,1) NOT NULL COMMENT 'Número de versión de perfil ocupacional',
  `fecaproba` date NOT NULL COMMENT 'Fecha aprobado de perfil ocupacional',
  `fecexpira` date NOT NULL COMMENT 'Fecha expiración de perfil ocupacional',
  `usercrea` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Auditoria: Usuario de Creación',
  `feccrea` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Auditoria: Fecha de Creación',
  `usermod` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Auditoria: Usuario de Modificación',
  `fecmod` datetime DEFAULT NULL COMMENT 'Auditoria: Fecha de Modificación',
  `flag` tinyint(1) NOT NULL COMMENT 'Activado (1) / Desactivado (0)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `perfil`
--

INSERT INTO `perfil` (`idperfil`, `idsector`, `codperfil`, `compgen`, `nomperfil`, `numvigencia`, `version`, `fecaproba`, `fecexpira`, `usercrea`, `usermod`, `fecmod`, `flag`) VALUES
(1, 1, 'A0101001', 'Realizar la ejecución y recojo de la cosecha de turiones, aplicando las técnicas correspondientes, de acuerdo con los protocolos de calidad en uso y las especificaciones técnicas, según los tipos de espárragos.', 'Cosechador-Jabero de Espárragos', 4, '1.0', '2011-06-20', '2015-06-19', 'Administrador', '', NULL, 1),
(2, 1, 'A0101002', 'Realizar las tareas de evaluación de condiciones fitosanitarias así como la aplicación de técnicas de manejo integrado de plagas (MIP) según el protocolo de calidad en uso, la programación del jefe de sanidad e indicaciones del supervisor.', 'Evaluador Fitosanitario - Aplicador', 4, '1.0', '2011-06-20', '2015-06-19', 'Administrador', '', NULL, 1),
(3, 1, 'A0101003', 'Ejecutar detección de celo, operaciones de monta natural  dirigida, labores de apoyo y atención de parto; así como formular el plan de manejo reproductivo, diagnóstico y seguimiento de gestación, efectuar el proceso de inseminación artificial, teniendo en cuenta los estándares y recomendaciones de higiene y cuidado del ganado, proceso productivo y técnicas establecidas de  Manejo Reproductivo.', 'Promotor Rural en Manejo Reproductivo del Ganado Bovino', 3, '1.0', '2012-08-29', '2015-08-28', 'Administrador', '', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sector`
--

CREATE TABLE `sector` (
  `idsector` int(5) UNSIGNED NOT NULL,
  `codsector` varchar(1) NOT NULL,
  `sector` varchar(100) NOT NULL,
  `usercrea` varchar(50) NOT NULL,
  `feccrea` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usermod` varchar(50) NOT NULL,
  `fecmod` datetime NOT NULL,
  `flag` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sector`
--

INSERT INTO `sector` (`idsector`, `codsector`, `sector`, `usercrea`, `usermod`, `fecmod`, `flag`) VALUES
(1, 'A', 'Construcción', 'Administrador', '', '2021-12-10 10:25:00', 1),
(2, 'B', 'Comercio', 'Administrador', '', '0000-00-00 00:00:00', 1),
(3, 'C', 'Extractivo', 'Administrador', '', '0000-00-00 00:00:00', 1),
(4, 'D', 'Industria', 'Administrador', '', '0000-00-00 00:00:00', 1),
(5, 'E', 'Servicios 2', 'Administrador', '', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `user` varchar(50) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `pass`, `email`, `status`) VALUES
(1, 'demo', 'b94e7cf8db51a46527764854ca845152', 'jlcbaci@gmail.com', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contenido`
--
ALTER TABLE `contenido`
  ADD PRIMARY KEY (`idcontenido`);

--
-- Indices de la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`idperfil`),
  ADD KEY `iddivision` (`idsector`);

--
-- Indices de la tabla `sector`
--
ALTER TABLE `sector`
  ADD PRIMARY KEY (`idsector`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contenido`
--
ALTER TABLE `contenido`
  MODIFY `idcontenido` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `sector`
--
ALTER TABLE `sector`
  MODIFY `idsector` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
