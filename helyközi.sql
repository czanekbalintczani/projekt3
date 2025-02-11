-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Feb 11. 10:27
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `gyoribuszok`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `buszok`
--

CREATE TABLE `buszok` (
  `id` int(11) NOT NULL,
  `tipus` varchar(255) NOT NULL,
  `rendszam` varchar(50) NOT NULL,
  `evjarat` int(11) NOT NULL,
  `kepek` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `buszok`
--

INSERT INTO `buszok` (`id`, `tipus`, `rendszam`, `evjarat`, `kepek`) VALUES
(7, 'Irisbus Crossway', 'NKW-902', 2010, 'nkw902_1.jpg,nkw902_2.jpg'),
(8, 'Irisbus Crossway', 'NKW-905', 2010, 'nkw905_1.jpg,nkw905_2.jpg'),
(9, 'Irisbus Crossway', 'NKW-906', 2010, 'nkw906_1.jpg,nkw906_2.jpg'),
(10, 'Irisbus Crossway', 'NKW-907', 2011, 'nkw907_1.jpg,nkw907_2.jpg'),
(11, 'Irisbus Crossway', 'NKW-908', 2010, 'nkw908_1.jpg,nkw908_2.jpg'),
(12, 'Volvo 8900 LE', 'SWR-556', 2021, 'swr556_1.jpg,swr556_2.jpg'),
(13, 'Volvo 8900 LE', 'SWR-557', 2021, 'swr557_1.jpg,swr557_2.jpg'),
(14, 'Volvo 8900 LE', 'SWR-558', 2021, 'swr558_1.jpg,swr558_2.jpg'),
(15, 'Volvo 8900 LE', 'SWR-559', 2021, 'swr559_1.jpg,swr559_2.jpg'),
(16, 'Volvo 8900 LE', 'SWR-560', 2021, 'swr560_1.jpg,swr560_2.jpg'),
(17, 'Volvo 7700A', 'KPK-293', 2007, 'kpk293_1.jpg,kpk293_2.jpg'),
(18, 'Volvo 7700A', 'KPK-294', 2007, 'kpk294_1.jpg,kpk294_2.jpg'),
(19, 'Neoplan Tourliner', 'SEF-377', 2020, 'sef377_1.jpg,sef377_2.jpg'),
(20, 'Neoplan Tourliner', 'SEF-387', 2020, 'sef387_1.jpg,sef387_2.jpg'),
(21, 'Mercedes-Benz Intouro M', 'TDE-322', 2022, 'tde322_1.jpg,tde322_2.jpg'),
(22, 'Mercedes-Benz Intouro M', 'TDE-323', 2022, 'tde323_1.jpg,tde323_2.jpg'),
(23, 'Mercedes-Benz Intouro M', 'TDE-324', 2022, 'tde324_1.jpg,tde324_2.jpg'),
(24, 'Mercedes-Benz Intouro M', 'AA IL-157', 2023, 'aa_il157_1.jpg,aa_il157_2.jpg'),
(25, 'Mercedes Conecto O 345 G', 'KHA-778', 2006, 'kha778_1.jpg,kha778_2.jpg'),
(26, 'Setra S 319 UL', 'MWA-403', 1999, 'mwa403_1.jpg,mwa403_2.jpg'),
(27, 'Credo Inovell IC 12', 'MYR-721', 2014, 'myr721_1.jpg,myr721_2.jpg'),
(28, 'Credo Inovell IC 12', 'MYR-722', 2014, 'myr722_1.jpg,myr722_2.jpg'),
(29, 'Credo Inovell IC 12', 'MYR-742', 2014, 'myr742_1.jpg,myr742_2.jpg'),
(30, 'Credo Inovell IC 12', 'MYR-747', 2014, 'myr747_1.jpg,myr747_2.jpg'),
(31, 'Credo Inovell IC 12', 'MYR-748', 2014, 'myr748_1.jpg,myr748_2.jpg'),
(32, 'Credo Inovell IC 12', 'MYR-750', 2014, 'myr750_1.jpg,myr750_2.jpg'),
(33, 'Credo Inovell IC 12', 'MYR-751', 2014, 'myr751_1.jpg,myr751_2.jpg'),
(34, 'Credo Inovell IC 12', 'MYR-753', 2014, 'myr753_1.jpg,myr753_2.jpg'),
(35, 'Credo Inovell IC 12', 'NUD-419', 2014, 'nud419_1.jpg,nud419_2.jpg'),
(36, 'Credo Inovell IC 12', 'NUD-420', 2014, 'nud420_1.jpg,nud420_2.jpg'),
(37, 'Credo Inovell IC 12', 'NZM-368', 2016, 'nzm368_1.jpg,nzm368_2.jpg'),
(38, 'Credo Inovell IC 12', 'NZM-369', 2016, 'nzm369_1.jpg,nzm369_2.jpg'),
(39, 'Credo Inovell IC 12', 'NZM-370', 2016, 'nzm370_1.jpg,nzm370_2.jpg'),
(40, 'Credo Inovell IC 12', 'PPH-633', 2018, 'pph633_1.jpg,pph633_2.jpg'),
(41, 'Credo Inovell EC 12', 'MYR-686', 2014, 'myr686_1.jpg,myr686_2.jpg'),
(42, 'Credo Econell 12', 'MHK-091', 2011, 'mhk091_1.jpg,mhk091_2.jpg'),
(43, 'Credo Econell 12', 'AE FI-861', 2021, 'aefi861_1.jpg,aefi861_2.jpg'),
(44, 'Credo Econell 12', 'AE FI-862', 2021, 'aefi862_1.jpg,aefi862_2.jpg'),
(45, 'Credo Econell 12', 'AE FI-863', 2021, 'aefi863_1.jpg,aefi863_2.jpg'),
(46, 'Credo IC 11', 'IOT-794', 2003, 'iot794_1.jpg,iot794_2.jpg'),
(47, 'Credo EC 12', 'FLD-401', 2005, 'fld401_1.jpg,fld401_2.jpg'),
(48, 'Credo EC 12', 'MIY-618', 2012, 'miy618_1.jpg,miy618_2.jpg'),
(49, 'Credo EC 12', 'MIY-619', 2012, 'miy619_1.jpg,miy619_2.jpg'),
(50, 'Credo EC 12', 'MNY-911', 2012, 'mny911_1.jpg,mny911_2.jpg'),
(51, 'Credo EC 12', 'MNY-913', 2012, 'mny913_1.jpg,mny913_2.jpg'),
(52, 'Credo IC 12', 'FLR-245', 2006, 'flr245_1.jpg,flr245_2.jpg'),
(53, 'Credo IC 12', 'FLR-371', 2007, 'flr371_1.jpg,flr371_2.jpg'),
(54, 'Credo IC 12', 'FLR-372', 2007, 'flr372_1.jpg,flr372_2.jpg'),
(55, 'Credo IC 12', 'FLR-373', 2007, 'flr373_1.jpg,flr373_2.jpg'),
(56, 'Credo IC 12', 'FLR-374', 2007, 'flr374_1.jpg,flr374_2.jpg'),
(57, 'Credo IC 12', 'LHT-490', 2008, 'lht490_1.jpg,lht490_2.jpg'),
(58, 'Credo IC 12', 'LHT-491', 2008, 'lht491_1.jpg,lht491_2.jpg'),
(59, 'Credo IC 12', 'LHT-492', 2008, 'lht492_1.jpg,lht492_2.jpg'),
(60, 'Credo IC 12', 'LHT-493', 2008, 'lht493_1.jpg,lht493_2.jpg'),
(61, 'Credo IC 12', 'LHT-495', 2008, 'lht495_1.jpg,lht495_2.jpg'),
(62, 'Credo IC 12', 'LKG-062', 2008, 'lkg062_1.jpg,lkg062_2.jpg'),
(63, 'Credo IC 12', 'LKG-063', 2008, 'lkg063_1.jpg,lkg063_2.jpg'),
(64, 'Credo IC 12', 'LKG-064', 2008, 'lkg064_1.jpg,lkg064_2.jpg'),
(65, 'Credo IC 12', 'LKG-065', 2008, 'lkg065_1.jpg,lkg065_2.jpg'),
(66, 'Credo IC 12', 'LKG-066', 2008, 'lkg066_1.jpg,lkg066_2.jpg'),
(67, 'Credo IC 12', 'LKG-067', 2008, 'lkg067_1.jpg,lkg067_2.jpg'),
(68, 'Credo IC 12', 'LKG-068', 2008, 'lkg068_1.jpg,lkg068_2.jpg'),
(69, 'Credo IC 12', 'LKG-069', 2008, 'lkg069_1.jpg,lkg069_2.jpg'),
(70, 'Credo IC 12', 'LKG-070', 2008, 'lkg070_1.jpg,lkg070_2.jpg'),
(71, 'Credo IC 12', 'LKG-071', 2008, 'lkg071_1.jpg,lkg071_2.jpg'),
(72, 'Credo IC 12', 'LKG-072', 2008, 'lkg072_1.jpg,lkg072_2.jpg'),
(73, 'Credo IC 12', 'LKG-073', 2008, 'lkg073_1.jpg,lkg073_2.jpg'),
(74, 'Credo IC 12', 'MHK-086', 2012, 'mhk086_1.jpg,mhk086_2.jpg'),
(75, 'Credo IC 12', 'MHK-087', 2012, 'mhk087_1.jpg,mhk087_2.jpg'),
(76, 'Credo IC 12', 'MHK-089', 2012, 'mhk089_1.jpg,mhk089_2.jpg'),
(77, 'Credo LH 12', 'LHT-746', 2008, 'lht746_1.jpg,lht746_2.jpg'),
(78, 'Credo LH 12', 'LWM-503', 2011, 'lwm503_1.jpg,lwm503_2.jpg'),
(79, 'Credo LH 12', 'LWM-504', 2011, 'lwm504_1.jpg,lwm504_2.jpg'),
(80, 'Credo LH 12', 'MNY-664', 2012, 'mny664_1.jpg,mny664_2.jpg'),
(81, 'Credo EN 18', 'LKC-294', 2008, 'lkc294_1.jpg,lkc294_2.jpg'),
(82, 'Credo EN 18', 'LKC-295', 2008, 'lkc295_1.jpg,lkc295_2.jpg'),
(83, 'MAN Lion\'s City G', 'SRD-274', 2021, 'srd274_1.jpg,srd274_2.jpg'),
(84, 'MAN Lion\'s City G', 'SRD-275', 2021, 'srd275_1.jpg,srd275_2.jpg'),
(85, 'MAN Lion\'s City G', 'SRD-276', 2021, 'srd276_1.jpg,srd276_2.jpg'),
(86, 'MAN Lion\'s City G', 'SRD-277', 2021, 'srd277_1.jpg,srd277_2.jpg'),
(87, 'MAN Lion\'s City G', 'SRD-278', 2021, 'srd278_1.jpg,srd278_2.jpg'),
(88, 'MAN Lion\'s City G', 'SRD-279', 2021, 'srd279_1.jpg,srd279_2.jpg'),
(89, 'MAN Lion\'s City G', 'SRD-280', 2021, 'srd280_1.jpg,srd280_2.jpg'),
(90, 'MAN Lion\'s City G', 'SRD-281', 2021, 'srd281_1.jpg,srd281_2.jpg'),
(91, 'MAN Lion\'s City G', 'SRD-282', 2021, 'srd282_1.jpg,srd282_2.jpg'),
(92, 'MAN Lion\'s City G', 'SRD-283', 2021, 'srd283_1.jpg,srd283_2.jpg'),
(93, 'MAN Lion\'s City G', 'SRD-284', 2021, 'srd284_1.jpg,srd284_2.jpg'),
(94, 'MAN Lion\'s City G', 'SRD-285', 2021, 'srd285_1.jpg,srd285_2.jpg'),
(95, 'MAN Lion\'s City G', 'SRD-286', 2021, 'srd286_1.jpg,srd286_2.jpg'),
(96, 'MAN Lion\'s City G', 'SRD-287', 2021, 'srd287_1.jpg,srd287_2.jpg'),
(97, 'MAN Lion\'s City G', 'SRD-288', 2021, 'srd288_1.jpg,srd288_2.jpg'),
(98, 'MAN Lion\'s City G', 'SRD-289', 2021, 'srd289_1.jpg,srd289_2.jpg'),
(99, 'MAN Lion\'s City G', 'SRD-290', 2021, 'srd290_1.jpg,srd290_2.jpg'),
(100, 'MAN Lion\'s City G', 'SRD-291', 2021, 'srd291_1.jpg,srd291_2.jpg'),
(101, 'MAN Lion\'s City G', 'SRD-293', 2021, 'srd293_1.jpg,srd293_2.jpg'),
(102, 'Ikarus 260.20M', 'GNX-310', 1998, 'gnx310_1.jpg,gnx310_2.jpg'),
(103, 'Ikarus 260.20M', 'GNX-312', 1998, 'gnx312_1.jpg,gnx312_2.jpg'),
(104, 'Ikarus 260.20 M2', 'HSW-657', 2001, 'hsw657_1.jpg,hsw657_2.jpg'),
(105, 'Ikarus 260.20 M2', 'HSW-658', 2001, 'hsw658_1.jpg,hsw658_2.jpg'),
(106, 'Ikarus 260.20 M2', 'HSW-659', 2001, 'hsw659_1.jpg,hsw659_2.jpg'),
(107, 'Ikarus 260.20 M2', 'HSW-673', 2001, 'hsw673_1.jpg,hsw673_2.jpg'),
(108, 'Ikarus 260.20 M2', 'IAA-825', 2002, 'iaa825_1.jpg,iaa825_2.jpg'),
(109, 'Ikarus 260.20 M2', 'JXW-453', 2002, 'jxw453_1.jpg,jxw453_2.jpg'),
(110, 'Ikarus 260.20 M2', 'KCM-502', 2001, 'kcm502_1.jpg,kcm502_2.jpg'),
(111, 'Ikarus 263.10', 'GZF-212', 1998, 'gzf212_1.jpg,gzf212_2.jpg'),
(112, 'Ikarus 280.30M', 'HNF-498', 2000, 'hnf498_1.jpg,hnf498_2.jpg'),
(113, 'Ikarus C80.30A', 'KRR-180', 2000, 'krr180_1.jpg,krr180_2.jpg'),
(114, 'Ikarus EAG E94.16', 'KIC-698', 2006, 'kic698_1.jpg,kic698_2.jpg'),
(115, 'Ikarus EAG E94.16', 'KSM-091', 2006, 'ksm091_1.jpg,ksm091_2.jpg'),
(116, 'Ikarus EAG E94.17', 'KYV-344', 2004, 'kyv344_1.jpg,kyv344_2.jpg'),
(117, 'MB O350 Tourismo', 'LZR-253', 2006, 'lzr253_1.jpg,lzr253_2.jpg');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `buszok`
--
ALTER TABLE `buszok`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rendszam` (`rendszam`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `buszok`
--
ALTER TABLE `buszok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
