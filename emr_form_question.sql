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

 Date: 11/10/2022 19:14:36
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
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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

-- ----------------------------
-- Table structure for emr_form_question_options
-- ----------------------------
DROP TABLE IF EXISTS `emr_form_question_options`;
CREATE TABLE `emr_form_question_options`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `key`(`key` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of emr_form_question_options
-- ----------------------------
INSERT INTO `emr_form_question_options` VALUES (1, 'ya', 'Ya');
INSERT INTO `emr_form_question_options` VALUES (2, 'tidak', 'Tidak');
INSERT INTO `emr_form_question_options` VALUES (3, '0', '0');
INSERT INTO `emr_form_question_options` VALUES (4, '1', '1');
INSERT INTO `emr_form_question_options` VALUES (5, '2', '2');
INSERT INTO `emr_form_question_options` VALUES (6, '3', '3');
INSERT INTO `emr_form_question_options` VALUES (7, '4', '4');
INSERT INTO `emr_form_question_options` VALUES (8, '5', '5');
INSERT INTO `emr_form_question_options` VALUES (9, '6', '6');
INSERT INTO `emr_form_question_options` VALUES (10, '7', '7');
INSERT INTO `emr_form_question_options` VALUES (11, '8', '8');
INSERT INTO `emr_form_question_options` VALUES (12, '9', '9');
INSERT INTO `emr_form_question_options` VALUES (13, '10', '10');
INSERT INTO `emr_form_question_options` VALUES (14, 'cemas', 'Cemas');
INSERT INTO `emr_form_question_options` VALUES (15, 'takut', 'Takut');
INSERT INTO `emr_form_question_options` VALUES (16, 'marah', 'Marah');
INSERT INTO `emr_form_question_options` VALUES (17, 'sedih', 'Sedih');
INSERT INTO `emr_form_question_options` VALUES (18, 'bunuhdiri', 'Kecenderungan Bunuh Diri');
INSERT INTO `emr_form_question_options` VALUES (19, 'lainlain', 'Lain-lain');
INSERT INTO `emr_form_question_options` VALUES (20, 'dinas', 'Dinas');
INSERT INTO `emr_form_question_options` VALUES (21, 'asuransi', 'Asuransi');
INSERT INTO `emr_form_question_options` VALUES (22, 'bpjs', 'BPJS');
INSERT INTO `emr_form_question_options` VALUES (23, 'biayasendiri', 'Biaya Sendiri');
INSERT INTO `emr_form_question_options` VALUES (24, 'aktivitasmobilitas', 'Aktivitas dan Mobilitas');
INSERT INTO `emr_form_question_options` VALUES (25, 'mandiri', 'Mandiri');
INSERT INTO `emr_form_question_options` VALUES (26, 'perlubantuan', 'Perlu Bantuan');
INSERT INTO `emr_form_question_options` VALUES (27, 'perlualatbantu', 'Perlu Alat Bantu');
INSERT INTO `emr_form_question_options` VALUES (28, 'baik', 'Baik');
INSERT INTO `emr_form_question_options` VALUES (29, 'tidakbaik', 'Tidak Baik');
INSERT INTO `emr_form_question_options` VALUES (30, 'rumah', 'Rumah');
INSERT INTO `emr_form_question_options` VALUES (31, 'apartement', 'Apartement');
INSERT INTO `emr_form_question_options` VALUES (32, 'panti', 'Panti');

-- ----------------------------
-- Table structure for emr_form_ruangan
-- ----------------------------
DROP TABLE IF EXISTS `emr_form_ruangan`;
CREATE TABLE `emr_form_ruangan`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_emr_form_question` int NULL DEFAULT NULL,
  `id_ruangan` int NULL DEFAULT NULL,
  `id_parent` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_emr_form_question`(`id_emr_form_question` ASC) USING BTREE,
  INDEX `id_ruangan`(`id_ruangan` ASC) USING BTREE,
  INDEX `id_parent`(`id_parent` ASC) USING BTREE,
  CONSTRAINT `emr_form_ruangan_ibfk_1` FOREIGN KEY (`id_emr_form_question`) REFERENCES `emr_form_question` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `emr_form_ruangan_ibfk_2` FOREIGN KEY (`id_ruangan`) REFERENCES `mst_ruangan` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `emr_form_ruangan_ibfk_3` FOREIGN KEY (`id_parent`) REFERENCES `emr_form_ruangan` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of emr_form_ruangan
-- ----------------------------
INSERT INTO `emr_form_ruangan` VALUES (1, 1, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (2, 2, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (3, 3, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (4, 7, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (5, 8, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (6, 9, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (7, 10, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (8, 11, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (9, 12, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (10, 13, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (11, 14, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (12, 15, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (13, 16, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (14, 17, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (15, 18, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (16, 19, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (17, 20, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (18, 21, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (19, 22, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (20, 23, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (21, 24, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (22, 25, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (23, 26, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (24, 27, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (25, 28, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (26, 29, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (27, 30, 18, NULL);
INSERT INTO `emr_form_ruangan` VALUES (28, 31, 18, 3);
INSERT INTO `emr_form_ruangan` VALUES (29, 32, 18, 3);
INSERT INTO `emr_form_ruangan` VALUES (30, 33, 18, 3);
INSERT INTO `emr_form_ruangan` VALUES (33, 40, 18, 4);
INSERT INTO `emr_form_ruangan` VALUES (34, 42, 18, 4);
INSERT INTO `emr_form_ruangan` VALUES (35, 41, 18, 5);
INSERT INTO `emr_form_ruangan` VALUES (36, 42, 18, 5);
INSERT INTO `emr_form_ruangan` VALUES (37, 43, 18, 6);
INSERT INTO `emr_form_ruangan` VALUES (38, 42, 18, 6);
INSERT INTO `emr_form_ruangan` VALUES (39, 44, 18, 7);
INSERT INTO `emr_form_ruangan` VALUES (40, 45, 18, 7);
INSERT INTO `emr_form_ruangan` VALUES (41, 43, 18, 11);
INSERT INTO `emr_form_ruangan` VALUES (42, 47, 18, 12);
INSERT INTO `emr_form_ruangan` VALUES (43, 48, 18, 12);
INSERT INTO `emr_form_ruangan` VALUES (44, 49, 18, 12);
INSERT INTO `emr_form_ruangan` VALUES (46, 50, 18, 14);
INSERT INTO `emr_form_ruangan` VALUES (47, 51, 18, 14);

-- ----------------------------
-- Table structure for emr_form_ruangan_options
-- ----------------------------
DROP TABLE IF EXISTS `emr_form_ruangan_options`;
CREATE TABLE `emr_form_ruangan_options`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_emr_form_ruangan` int NULL DEFAULT NULL,
  `id_emr_form_question_options` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_emr_form_ruangan`(`id_emr_form_ruangan` ASC) USING BTREE,
  INDEX `id_emr_form_question_options`(`id_emr_form_question_options` ASC) USING BTREE,
  CONSTRAINT `emr_form_ruangan_options_ibfk_1` FOREIGN KEY (`id_emr_form_ruangan`) REFERENCES `emr_form_ruangan` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `emr_form_ruangan_options_ibfk_2` FOREIGN KEY (`id_emr_form_question_options`) REFERENCES `emr_form_question_options` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of emr_form_ruangan_options
-- ----------------------------
INSERT INTO `emr_form_ruangan_options` VALUES (1, 3, 1);
INSERT INTO `emr_form_ruangan_options` VALUES (2, 3, 2);
INSERT INTO `emr_form_ruangan_options` VALUES (3, 7, 1);
INSERT INTO `emr_form_ruangan_options` VALUES (4, 7, 2);
INSERT INTO `emr_form_ruangan_options` VALUES (5, 8, 3);
INSERT INTO `emr_form_ruangan_options` VALUES (6, 8, 4);
INSERT INTO `emr_form_ruangan_options` VALUES (7, 8, 5);
INSERT INTO `emr_form_ruangan_options` VALUES (8, 8, 6);
INSERT INTO `emr_form_ruangan_options` VALUES (9, 8, 7);
INSERT INTO `emr_form_ruangan_options` VALUES (10, 8, 8);
INSERT INTO `emr_form_ruangan_options` VALUES (11, 8, 9);
INSERT INTO `emr_form_ruangan_options` VALUES (13, 8, 10);
INSERT INTO `emr_form_ruangan_options` VALUES (14, 8, 11);
INSERT INTO `emr_form_ruangan_options` VALUES (15, 8, 12);
INSERT INTO `emr_form_ruangan_options` VALUES (16, 8, 13);
INSERT INTO `emr_form_ruangan_options` VALUES (17, 27, 14);
INSERT INTO `emr_form_ruangan_options` VALUES (18, 27, 15);
INSERT INTO `emr_form_ruangan_options` VALUES (19, 27, 16);
INSERT INTO `emr_form_ruangan_options` VALUES (20, 27, 17);
INSERT INTO `emr_form_ruangan_options` VALUES (21, 27, 18);
INSERT INTO `emr_form_ruangan_options` VALUES (22, 27, 19);
INSERT INTO `emr_form_ruangan_options` VALUES (23, 12, 28);
INSERT INTO `emr_form_ruangan_options` VALUES (24, 12, 29);
INSERT INTO `emr_form_ruangan_options` VALUES (25, 13, 20);
INSERT INTO `emr_form_ruangan_options` VALUES (26, 13, 21);
INSERT INTO `emr_form_ruangan_options` VALUES (27, 13, 22);
INSERT INTO `emr_form_ruangan_options` VALUES (28, 13, 23);
INSERT INTO `emr_form_ruangan_options` VALUES (30, 4, 1);
INSERT INTO `emr_form_ruangan_options` VALUES (31, 4, 2);
INSERT INTO `emr_form_ruangan_options` VALUES (32, 5, 1);
INSERT INTO `emr_form_ruangan_options` VALUES (33, 5, 2);
INSERT INTO `emr_form_ruangan_options` VALUES (34, 6, 1);
INSERT INTO `emr_form_ruangan_options` VALUES (35, 6, 2);
INSERT INTO `emr_form_ruangan_options` VALUES (36, 11, 30);
INSERT INTO `emr_form_ruangan_options` VALUES (37, 11, 31);
INSERT INTO `emr_form_ruangan_options` VALUES (38, 11, 32);
INSERT INTO `emr_form_ruangan_options` VALUES (39, 11, 19);
INSERT INTO `emr_form_ruangan_options` VALUES (42, 15, 1);
INSERT INTO `emr_form_ruangan_options` VALUES (43, 15, 2);
INSERT INTO `emr_form_ruangan_options` VALUES (45, 12, 1);
INSERT INTO `emr_form_ruangan_options` VALUES (46, 12, 2);
INSERT INTO `emr_form_ruangan_options` VALUES (47, 14, 24);
INSERT INTO `emr_form_ruangan_options` VALUES (49, 14, 25);
INSERT INTO `emr_form_ruangan_options` VALUES (50, 14, 26);
INSERT INTO `emr_form_ruangan_options` VALUES (51, 14, 27);

SET FOREIGN_KEY_CHECKS = 1;
