/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 100138
 Source Host           : localhost:3306
 Source Schema         : app_bihealth

 Target Server Type    : MySQL
 Target Server Version : 100138
 File Encoding         : 65001

 Date: 12/10/2022 13:09:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for antrian
-- ----------------------------
DROP TABLE IF EXISTS `antrian`;
CREATE TABLE `antrian`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode_booking` varchar(10) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `id_pasien` int NULL DEFAULT NULL,
  `id_ruangan` int NULL DEFAULT NULL,
  `id_pelaksana` int NULL DEFAULT NULL,
  `tgl_kunjungan` date NULL DEFAULT NULL,
  `prefix` varchar(5) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `nomor` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `antrian_pasien`(`id_pasien`) USING BTREE,
  INDEX `antrian_ruangan`(`id_ruangan`) USING BTREE,
  INDEX `antrian_pelaksana`(`id_pelaksana`) USING BTREE,
  UNIQUE INDEX `kode_booking`(`kode_booking`) USING BTREE,
  CONSTRAINT `antrian_pasien` FOREIGN KEY (`id_pasien`) REFERENCES `pasien` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `antrian_pelaksana` FOREIGN KEY (`id_pelaksana`) REFERENCES `mst_pelaksana` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `antrian_ruangan` FOREIGN KEY (`id_ruangan`) REFERENCES `mst_ruangan` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of antrian
-- ----------------------------
INSERT INTO `antrian` VALUES (1, '588F6E', 9, 13, 22, '2022-10-12', 'A2', 12);
INSERT INTO `antrian` VALUES (2, '5A76C1', 9, 13, 22, '2022-10-12', NULL, 11);
INSERT INTO `antrian` VALUES (3, 'CF3334', 10, 13, 22, '2022-10-12', 'A2', 13);
INSERT INTO `antrian` VALUES (6, 'CE6926', 12, 13, 22, '2022-10-12', 'A2', 14);
INSERT INTO `antrian` VALUES (7, 'A270F3', 8, 13, 22, '2022-10-12', 'A2', 15);

-- ----------------------------
-- Table structure for registrasi_antrian
-- ----------------------------
DROP TABLE IF EXISTS `registrasi_antrian`;
CREATE TABLE `registrasi_antrian`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `noreg` varchar(15) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `id_antrian` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `noreg`(`noreg`) USING BTREE,
  INDEX `id_antrian`(`id_antrian`) USING BTREE,
  CONSTRAINT `registrasi_antrian_ibfk_1` FOREIGN KEY (`noreg`) REFERENCES `registrasi` (`noreg`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `registrasi_antrian_ibfk_2` FOREIGN KEY (`id_antrian`) REFERENCES `antrian` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of registrasi_antrian
-- ----------------------------
INSERT INTO `registrasi_antrian` VALUES (1, 'RJ22101200006', 6);
INSERT INTO `registrasi_antrian` VALUES (2, 'RJ22101200007', 7);

SET FOREIGN_KEY_CHECKS = 1;
