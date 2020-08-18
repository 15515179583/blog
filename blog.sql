-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about`
--

DROP TABLE IF EXISTS `about`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `content` longtext COMMENT '内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about`
--

LOCK TABLES `about` WRITE;
/*!40000 ALTER TABLE `about` DISABLE KEYS */;
INSERT INTO `about` VALUES (1,NULL);
/*!40000 ALTER TABLE `about` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artcle`
--

DROP TABLE IF EXISTS `artcle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artcle` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `content` longtext NOT NULL COMMENT '正文',
  `time` datetime NOT NULL COMMENT '发表时间',
  `hot` tinyint(1) DEFAULT '1' COMMENT '非热门(0),热门(1)',
  `hits` int NOT NULL DEFAULT '0' COMMENT '点击量',
  `category_id` int NOT NULL COMMENT '类目编号',
  `thumbnail` varchar(255) DEFAULT NULL COMMENT '缩略图',
  `about` varchar(255) DEFAULT NULL COMMENT '文章简介',
  `like` int DEFAULT '0' COMMENT '喜欢',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artcle`
--

LOCK TABLES `artcle` WRITE;
/*!40000 ALTER TABLE `artcle` DISABLE KEYS */;
/*!40000 ALTER TABLE `artcle` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(50) NOT NULL COMMENT '类目名称',
  `index` int DEFAULT NULL COMMENT '排序，值越大越前',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gbooks`
--

DROP TABLE IF EXISTS `gbooks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gbooks` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `content` longtext COMMENT '内容',
  `user` varchar(255) DEFAULT NULL COMMENT '留言者',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gbooks`
--

LOCK TABLES `gbooks` WRITE;
/*!40000 ALTER TABLE `gbooks` DISABLE KEYS */;
/*!40000 ALTER TABLE `gbooks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `links` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(255) NOT NULL COMMENT '链接名称',
  `linkUrl` varchar(255) NOT NULL COMMENT '链接地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `links`
--

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;
INSERT INTO `links` VALUES (1,'smile','http://smile6666.com/');
/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `handle` varchar(50)  NOT NULL COMMENT '操作内容',
  `time` timestamp NOT NULL COMMENT '操作时间',
  `ip` varchar(30) NULL COMMENT '来源IP',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='日志表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
INSERT INTO `log` VALUES (1,'登录','2020-02-27 03:22:46','114.235.246.154'),(2,'添加类目','2020-02-06 08:11:50','114.235.246.154'),(3,'添加博文','2020-02-06 08:12:00','114.235.246.154'),(4,'添加博文','2020-02-27 03:22:21','114.235.246.154'),(5,'登录','2020-02-27 03:23:10','49.81.173.95'),(6,'编辑博文','2020-02-27 03:23:29','49.81.173.95'),(7,'添加类目','2020-02-27 03:23:47','49.81.173.95'),(8,'添加博文','2020-02-27 03:24:02','49.81.173.95');
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photos` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(255)  DEFAULT NULL COMMENT '标题',
  `content` varchar(255) DEFAULT NULL COMMENT '说明',
  `photoUrl` varchar(255) NOT NULL COMMENT '照片地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pv`
--

DROP TABLE IF EXISTS `pv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pv` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `time` date NOT NULL COMMENT '日期',
  `hits` int NOT NULL DEFAULT '0' COMMENT '点击量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='访问记录表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pv`
--

LOCK TABLES `pv` WRITE;
/*!40000 ALTER TABLE `pv` DISABLE KEYS */;
/*!40000 ALTER TABLE `pv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabs`
--

DROP TABLE IF EXISTS `tabs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabs` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(100) NOT NULL COMMENT '标签名称',
  `article_id` int DEFAULT NULL COMMENT '所属文章编号',
  `index` int DEFAULT NULL COMMENT '排序',
  KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabs`
--

LOCK TABLES `tabs` WRITE;
/*!40000 ALTER TABLE `tabs` DISABLE KEYS */;
INSERT INTO `tabs` VALUES (1,'个人博客',NULL,NULL),(2,'随笔',NULL,NULL),(3,'前端',NULL,NULL),(4,'编程',NULL,NULL),(5,'生活',NULL,NULL),(6,'游戏',NULL,NULL),(7,'娱乐',NULL,NULL);
/*!40000 ALTER TABLE `tabs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `user_img` varchar(255) DEFAULT '/images/user_img.jpg' COMMENT '用户头像',
  `admin` int DEFAULT '0' COMMENT '用户权限',
  PRIMARY KEY (`username`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

ALTER table `user` add `email` varchar(255) NOT NULL COMMENT '用户邮箱';

--
-- Table structure for table `website`
--

DROP TABLE IF EXISTS `website`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `website` (
  `name` varchar(255) NOT NULL DEFAULT 'smile个人小站' COMMENT '网站标题',
  `message` varchar(255) DEFAULT 'smile个人小站欢迎你的到来' COMMENT '网站播报信息',
  `beian` varchar(255) DEFAULT NULL COMMENT '网站备案信息',
  `about_img` varchar(255) DEFAULT '/images/about.jpg' COMMENT '关于我图片',
  `about_content` varchar(255) DEFAULT NULL COMMENT '关于我内容说明',
  `logo` varchar(255) DEFAULT NULL COMMENT '网站logo',
  `keywords` varchar(255) DEFAULT '个人博客,smile个人博客,个人博客模板,smile' COMMENT '网站关键词',
  `user` varchar(255) DEFAULT 'smile' COMMENT '网站用户',
  `wx` varchar(255) DEFAULT '/images/wx.png' COMMENT '网站微信',
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `website`
--

LOCK TABLES `website` WRITE;
/*!40000 ALTER TABLE `website` DISABLE KEYS */;
INSERT INTO `website` VALUES ('smile个人小站','smile个人小站欢迎你的到来','豫ICP备123456789','/images/about.jpg','一个90后前端爱好者，自大二第一次接触前端后深深爱上这个行业。在大学里自学前端技术，目前仍在不断提高自己ing...','','个人博客,smile个人博客,个人博客模板,smile','smile','/images/wx.png',1);
/*!40000 ALTER TABLE `website` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-26 19:07:00
ALTER table `website` add `csdn` varchar(255) DEFAULT 'https://blog.csdn.net/qq2230550672' COMMENT 'csdn';
ALTER table `website` add `github` varchar(255) DEFAULT 'https://github.com/15515179583' COMMENT 'github';
ALTER table `website` add `qq` varchar(255) DEFAULT '2230550672' COMMENT 'qq';

ALTER table `user` add `link` int DEFAULT '0' COMMENT '用户链接';

ALTER table `links` add `display` int DEFAULT '0' COMMENT '链接是否显示';

ALTER table `website` MODIFY `message` varchar(2047) DEFAULT 'smile个人小站欢迎你的到来' COMMENT '网站播报信息';

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(255)  NOT NULL COMMENT '标题',
  `content` varchar(255) DEFAULT NULL COMMENT '说明',
  `photoUrl` varchar(255) DEFAULT '/images/project_img.jpg' COMMENT '图片地址',
  `linkUrl` varchar(255) DEFAULT 'JavaScript:void(0)' COMMENT '演示地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

ALTER table `artcle` add `vip` int DEFAULT '0' COMMENT '非VIP';
ALTER table `website` add `vipTime` int DEFAULT '60' COMMENT 'VIP文章浏览时间';
ALTER TABLE `user` ADD `vipTimes` INT DEFAULT '0' COMMENT 'vip文章浏览次数';
ALTER TABLE `website` ADD `porfile` VARCHAR(50) DEFAULT 'JavaScript:void(0)' COMMENT '简历地址';