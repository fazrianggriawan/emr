/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 100138
 Source Host           : localhost:3306
 Source Schema         : app_emr

 Target Server Type    : MySQL
 Target Server Version : 100138
 File Encoding         : 65001

 Date: 12/07/2021 06:21:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sig_template
-- ----------------------------
DROP TABLE IF EXISTS `sig_template`;
CREATE TABLE `sig_template`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `value`(`value`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sig_template
-- ----------------------------
INSERT INTO `sig_template` VALUES (1, '0.1 Miligram Makan 1x Sehari Sebelum makan 1 hari', '2021-07-11 13:34:15', '2021-07-11 13:34:15');
INSERT INTO `sig_template` VALUES (3, '0.1 Miligram Minum 1x Sehari Sebelum makan 1 hari', '2021-07-11 13:34:49', '2021-07-11 13:34:49');
INSERT INTO `sig_template` VALUES (4, '0.25 Mililiter Minum 2x Sehari Sesudah makan 10 hari', '2021-07-11 13:36:14', '2021-07-11 13:36:14');
INSERT INTO `sig_template` VALUES (5, '0.1 Mililiter Minum 3x Sehari Jika diperlukan ', '2021-07-11 13:36:45', '2021-07-11 13:36:45');
INSERT INTO `sig_template` VALUES (6, '0.1 Mililiter Minum 2x Sehari Sebelum makan ', '2021-07-11 13:42:02', '2021-07-11 13:42:02');
INSERT INTO `sig_template` VALUES (7, '0.1 Mililiter Minum Setiap 36 Jam Waktu pagi hari ', '2021-07-11 13:42:19', '2021-07-11 13:42:19');
INSERT INTO `sig_template` VALUES (8, '0.1  Oles Setiap 1 Jam Waktu siang hari 7 hari', '2021-07-11 13:43:16', '2021-07-11 13:43:16');
INSERT INTO `sig_template` VALUES (9, '0.1 Sendok makan Oles 3x Sehari Waktu siang hari 7 hari', '2021-07-11 13:43:50', '2021-07-11 13:43:50');
INSERT INTO `sig_template` VALUES (10, '0.1 Gram Oles 3x Sehari Waktu siang hari 7 hari', '2021-07-11 13:43:52', '2021-07-11 13:43:52');
INSERT INTO `sig_template` VALUES (11, '1 Tab Makan 3x Sehari Sebelum makan 1 bulan', '2021-07-11 13:44:14', '2021-07-11 13:44:14');
INSERT INTO `sig_template` VALUES (12, '1 Tab Makan 2x Sehari Sesudah makan 2 hari', '2021-07-11 13:46:07', '2021-07-11 13:46:07');
INSERT INTO `sig_template` VALUES (13, '1-2 Sendok makan Oles 3x Sehari Sesudah makan 7 hari', '2021-07-11 13:46:15', '2021-07-11 13:46:15');
INSERT INTO `sig_template` VALUES (14, '0.1 Mililiter Minum 3x Sehari  ', '2021-07-11 13:46:32', '2021-07-11 13:46:32');
INSERT INTO `sig_template` VALUES (15, '2 Tab Oles 4x Sehari  ', '2021-07-11 13:46:36', '2021-07-11 13:46:36');
INSERT INTO `sig_template` VALUES (16, '0.25  Minum 3x Sehari Jika diperlukan ', '2021-07-11 13:47:00', '2021-07-11 13:47:00');
INSERT INTO `sig_template` VALUES (17, '0.25 Sendok teh Suntik Setiap 1 Jam Jika diperlukan ', '2021-07-11 13:47:03', '2021-07-11 13:47:03');
INSERT INTO `sig_template` VALUES (18, '0.1 Mililiter Minum 5x Sehari Waktu malam hari 3 minggu', '2021-07-11 13:48:06', '2021-07-11 13:48:06');
INSERT INTO `sig_template` VALUES (19, '0.1 Mililiter Minum 2x Sehari Jika diperlukan 7 hari', '2021-07-11 13:48:12', '2021-07-11 13:48:12');
INSERT INTO `sig_template` VALUES (20, '2-3 Sendok teh Suntik Setiap 15 Menit Waktu siang hari 3 minggu', '2021-07-11 13:48:16', '2021-07-11 13:48:16');

SET FOREIGN_KEY_CHECKS = 1;
