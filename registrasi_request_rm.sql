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

 Date: 12/10/2022 13:09:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for registrasi_request_rm
-- ----------------------------
DROP TABLE IF EXISTS `registrasi_request_rm`;
CREATE TABLE `registrasi_request_rm`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `noreg` varchar(25) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `id_pasien` int NULL DEFAULT NULL,
  `id_ruangan` int NULL DEFAULT NULL,
  `status` tinyint(1) NULL DEFAULT 0,
  `dateCreated` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `noreg`(`noreg`) USING BTREE,
  INDEX `id_pasien`(`id_pasien`) USING BTREE,
  INDEX `id_ruangan`(`id_ruangan`) USING BTREE,
  CONSTRAINT `registrasi_request_rm_ibfk_1` FOREIGN KEY (`noreg`) REFERENCES `registrasi` (`noreg`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `registrasi_request_rm_ibfk_2` FOREIGN KEY (`id_pasien`) REFERENCES `pasien` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `registrasi_request_rm_ibfk_3` FOREIGN KEY (`id_ruangan`) REFERENCES `mst_ruangan` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of registrasi_request_rm
-- ----------------------------
INSERT INTO `registrasi_request_rm` VALUES (1, 'RJ22101200007', 8, 13, 0, '2022-10-12 11:33:37');

SET FOREIGN_KEY_CHECKS = 1;
