/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100424 (10.4.24-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : app_bihealth

 Target Server Type    : MySQL
 Target Server Version : 100424 (10.4.24-MariaDB)
 File Encoding         : 65001

 Date: 11/10/2022 23:55:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for emr_form_question
-- ----------------------------
DROP TABLE IF EXISTS `emr_form_question`;
CREATE TABLE `emr_form_question`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `required` tinyint(1) NULL DEFAULT NULL,
  `order` int NULL DEFAULT NULL,
  `controlType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `display` tinyint(1) NULL DEFAULT NULL,
  `prefix` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `postfix` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `key`(`key` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of emr_form_question
-- ----------------------------
INSERT INTO `emr_form_question` VALUES (1, 'keluhan_utama', NULL, 'Keluhan Utama', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (2, 'riwayat_penyakit_sekarang', NULL, 'Riwayat Penyakit Sekarang (Lengkap)', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (3, 'pernah_dirawat', 'tidak', 'Pernah Dirawat', 0, 1, 'dropdown', 'dropdown', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (7, 'alergi_obat', 'tidak', 'Riwayat Alergi Obat', 0, 1, 'dropdown', 'dropdown', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (8, 'alergi_makanan', 'tidak', 'Riwayat Alergi Makanan', 0, 1, 'dropdown', 'dropdown', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (9, 'alergi_lain', 'tidak', 'Riwayat Alergi Lain', 0, 1, 'dropdown', 'dropdown', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (10, 'resiko_cidera', 'tidak', 'Resiko Cidera / Jatuh', 0, 1, 'dropdown', 'dropdown', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (11, 'skala_nyeri', '0', 'Skala Nyeri', 0, 1, 'dropdown', 'dropdown', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (12, 'nyeri_kronis', 'ya', NULL, 0, 1, 'checkbox', 'text', 1, NULL, 'Nyeri Kronis');
INSERT INTO `emr_form_question` VALUES (13, 'hubungan_keluarga', NULL, 'Hubungan pasien dengan anggota keluarga', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (14, 'tempat_tinggal', NULL, 'Tempat Tinggal', 0, 1, 'dropdown', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (15, 'kerabat_dihubungi', NULL, 'Kerabat terdekat yang dapat dihubungi', 0, 1, 'dropdown', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (16, 'status_eko', NULL, 'Status Ekonomi', 0, 1, 'dropdown', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (17, 'status_fungsi', NULL, 'Status Fungsional', 0, 1, 'dropdown', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (18, 'keadaan_umum', NULL, 'Keadaan Umum', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (19, 'kesadaran', NULL, 'Kesadaran', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (20, 'kesan_sakit', NULL, 'Kesan Sakit', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (21, 'bb', NULL, 'BB', 0, 1, 'textbox', 'text', 1, NULL, 'kg');
INSERT INTO `emr_form_question` VALUES (22, 'tb', NULL, 'TB', 0, 1, 'textbox', 'text', 1, NULL, 'cm');
INSERT INTO `emr_form_question` VALUES (23, 'gizi', NULL, 'Gizi', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (24, 'nadi', NULL, 'Nadi', 0, 1, 'textbox', 'text', 1, NULL, 'x/mnt');
INSERT INTO `emr_form_question` VALUES (25, 'tensi', NULL, 'Tensi', 0, 1, 'textbox', 'text', 1, NULL, 'mmHg');
INSERT INTO `emr_form_question` VALUES (26, 'suhu', NULL, 'Suhu', 0, 1, 'textbox', 'text', 1, NULL, 'C');
INSERT INTO `emr_form_question` VALUES (27, 'respirasi', NULL, 'Respirasi', 0, 1, 'textbox', 'text', 1, NULL, 'x/mnt');
INSERT INTO `emr_form_question` VALUES (28, 'kegiatan_agama', NULL, 'Kegiatan keagamaan yang biasa dilakukan', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (29, 'kegiatan_spiritual', NULL, 'Kegiatan spiritual yang dibutuhkan selama perawatan', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (30, 'status_priskologis', NULL, 'Status Psikologis', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (31, 'kapan', NULL, 'Kapan', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (32, 'dimana', NULL, 'Dimana', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (33, 'diagnosis', NULL, 'Diagnosis', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (40, 'obat', NULL, 'Obat', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (41, 'makanan', NULL, 'Makanan', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (42, 'tipereaksi', NULL, 'Tipe Reaksi', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (43, 'lainlain', NULL, 'Lain-lain', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (44, 'ya_isi_form', 'ya', NULL, 0, 1, 'checkbox', 'text', 1, NULL, 'Jika Ya, isi form monitoring pencegah jatuh');
INSERT INTO `emr_form_question` VALUES (45, 'ya_pasang_gelang', 'ya', NULL, 0, 1, 'checkbox', 'text', 1, NULL, 'Jika Ya, pasang gelang resiko jatuh warna kuning');
INSERT INTO `emr_form_question` VALUES (47, 'nama', NULL, 'Nama', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (48, 'hubungan', NULL, 'Hubungan', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (49, 'telepon', NULL, 'Telepon', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (50, 'sebutkan_bantuan', NULL, 'Jika Perlu Bantuan, sebutkan', 0, 1, 'textbox', 'text', 1, NULL, NULL);
INSERT INTO `emr_form_question` VALUES (51, 'sebutkan_alat_bantu', NULL, 'Jika Perlu Alat Bantu, sebutkan', 0, 1, 'textbox', 'text', 1, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
