/*
 Navicat Premium Data Transfer

 Source Server         : lxy
 Source Server Type    : MySQL
 Source Server Version : 50090
 Source Host           : localhost:3306
 Source Schema         : kaola

 Target Server Type    : MySQL
 Target Server Version : 50090
 File Encoding         : 65001

 Date: 31/01/2021 19:54:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for loggin
-- ----------------------------
DROP TABLE IF EXISTS `loggin`;
CREATE TABLE `loggin`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `phonenumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY USING BTREE (`id`)
) ENGINE = MyISAM AUTO_INCREMENT = 23 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of loggin
-- ----------------------------
INSERT INTO `loggin` VALUES (1, 'lisheng', '123456', '12345678901');
INSERT INTO `loggin` VALUES (2, 'chengzheng', '654321', '0');
INSERT INTO `loggin` VALUES (3, 'liutao', '123321', '0');
INSERT INTO `loggin` VALUES (4, 'hansansan', '321123', '0');
INSERT INTO `loggin` VALUES (5, 'zhangweiwei', '123456', '0');
INSERT INTO `loggin` VALUES (6, '李永辉', '1111111', '0');
INSERT INTO `loggin` VALUES (7, '李永辉', '121345', '0');
INSERT INTO `loggin` VALUES (8, '李升', 'wewewe', '0');
INSERT INTO `loggin` VALUES (9, '李升', 'wewewewe', '0');
INSERT INTO `loggin` VALUES (10, '李升', 'asaasa', '0');
INSERT INTO `loggin` VALUES (11, 'asd', '233233323', '0');
INSERT INTO `loggin` VALUES (18, '张三', '123456', '0');
INSERT INTO `loggin` VALUES (19, '刘涛', '19980505@lt', '0');
INSERT INTO `loggin` VALUES (20, '', '', '0');
INSERT INTO `loggin` VALUES (21, '', '123456', '17629255687');
INSERT INTO `loggin` VALUES (22, '', '123456', '3439439434334');

SET FOREIGN_KEY_CHECKS = 1;
