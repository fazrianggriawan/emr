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

 Date: 10/10/2022 10:27:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for app_menu
-- ----------------------------
DROP TABLE IF EXISTS `app_menu`;
CREATE TABLE `app_menu`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of app_menu
-- ----------------------------
INSERT INTO `app_menu` VALUES (1, 'Data Pasien');
INSERT INTO `app_menu` VALUES (2, 'Assessment Awal');
INSERT INTO `app_menu` VALUES (3, 'CPPT');
INSERT INTO `app_menu` VALUES (4, 'Radiologi');
INSERT INTO `app_menu` VALUES (5, 'Laboratorium');
INSERT INTO `app_menu` VALUES (6, 'Diagnosa & Prosedur');
INSERT INTO `app_menu` VALUES (7, 'E-Resep');
INSERT INTO `app_menu` VALUES (8, 'Konsul');
INSERT INTO `app_menu` VALUES (9, 'Penanda Organ');
INSERT INTO `app_menu` VALUES (10, 'Resume Medis');
INSERT INTO `app_menu` VALUES (11, 'Surat Masuk Perawatan');
INSERT INTO `app_menu` VALUES (12, 'Laporan Operasi');

-- ----------------------------
-- Table structure for app_module
-- ----------------------------
DROP TABLE IF EXISTS `app_module`;
CREATE TABLE `app_module`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `router` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of app_module
-- ----------------------------
INSERT INTO `app_module` VALUES (1, 'Admisi & Pendafataran', 'registrasi');
INSERT INTO `app_module` VALUES (2, 'Rawat Jalan', 'rawatJalan');
INSERT INTO `app_module` VALUES (3, 'Radiologi', 'radiologi');
INSERT INTO `app_module` VALUES (4, 'Laboratorium', 'laboratorium');
INSERT INTO `app_module` VALUES (5, 'Rawat Inap', 'rawatInap');
INSERT INTO `app_module` VALUES (6, 'Kasir', 'kasir');
INSERT INTO `app_module` VALUES (7, 'VClaim BPJS', 'vclaim');
INSERT INTO `app_module` VALUES (8, 'E-Klaim INACBG', 'e-klaim');
INSERT INTO `app_module` VALUES (9, 'eMedical Record', 'medicalRecord');
INSERT INTO `app_module` VALUES (10, 'Laporan', 'laporan');

-- ----------------------------
-- Table structure for app_module_user
-- ----------------------------
DROP TABLE IF EXISTS `app_module_user`;
CREATE TABLE `app_module_user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NULL DEFAULT NULL,
  `id_module` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_module`(`id_module`) USING BTREE,
  INDEX `id_user`(`id_user`) USING BTREE,
  CONSTRAINT `app_module_user_ibfk_1` FOREIGN KEY (`id_module`) REFERENCES `app_module` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `app_module_user_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `app_user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of app_module_user
-- ----------------------------
INSERT INTO `app_module_user` VALUES (1, 1, 9);
INSERT INTO `app_module_user` VALUES (2, 1, 2);

-- ----------------------------
-- Table structure for app_role
-- ----------------------------
DROP TABLE IF EXISTS `app_role`;
CREATE TABLE `app_role`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of app_role
-- ----------------------------
INSERT INTO `app_role` VALUES (1, 'dokter');
INSERT INTO `app_role` VALUES (2, 'perawat');
INSERT INTO `app_role` VALUES (3, 'radiologi');
INSERT INTO `app_role` VALUES (4, 'laboratorium');
INSERT INTO `app_role` VALUES (5, 'farmasi');
INSERT INTO `app_role` VALUES (6, 'administrasi');

-- ----------------------------
-- Table structure for app_role_user
-- ----------------------------
DROP TABLE IF EXISTS `app_role_user`;
CREATE TABLE `app_role_user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NULL DEFAULT NULL,
  `id_role` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_user`(`id_user`) USING BTREE,
  INDEX `id_role`(`id_role`) USING BTREE,
  CONSTRAINT `app_role_user_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `app_user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `app_role_user_ibfk_2` FOREIGN KEY (`id_role`) REFERENCES `app_role` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of app_role_user
-- ----------------------------
INSERT INTO `app_role_user` VALUES (1, 1, 1);

-- ----------------------------
-- Table structure for app_user
-- ----------------------------
DROP TABLE IF EXISTS `app_user`;
CREATE TABLE `app_user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  INDEX `password`(`password`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of app_user
-- ----------------------------
INSERT INTO `app_user` VALUES (1, 'dokter', 'dokter');

-- ----------------------------
-- Table structure for app_user_logged_in
-- ----------------------------
DROP TABLE IF EXISTS `app_user_logged_in`;
CREATE TABLE `app_user_logged_in`  (
  `id` int NOT NULL,
  `id_user` int NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `login_datetime` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `token`(`token`) USING BTREE,
  INDEX `id_user`(`id_user`) USING BTREE,
  CONSTRAINT `app_user_logged_in_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `app_user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of app_user_logged_in
-- ----------------------------

-- ----------------------------
-- Table structure for app_user_pelaksana
-- ----------------------------
DROP TABLE IF EXISTS `app_user_pelaksana`;
CREATE TABLE `app_user_pelaksana`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NULL DEFAULT NULL,
  `id_pelaksana` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_user`(`id_user`) USING BTREE,
  INDEX `id_pelaksana`(`id_pelaksana`) USING BTREE,
  CONSTRAINT `app_user_pelaksana_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `app_user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `app_user_pelaksana_ibfk_2` FOREIGN KEY (`id_pelaksana`) REFERENCES `mst_pelaksana` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of app_user_pelaksana
-- ----------------------------
INSERT INTO `app_user_pelaksana` VALUES (1, 1, 6);

SET FOREIGN_KEY_CHECKS = 1;
