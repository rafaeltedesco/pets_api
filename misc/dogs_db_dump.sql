CREATE DATABASE IF NOT EXISTS `dogs_db`;
USE `dogs_db`;
DROP TABLE IF EXISTS `owners`;
CREATE TABLE `owners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `owners` VALUES (1,'John Smith','john.smith@example.com'),(2,'Samantha Lee','samantha.lee@example.com'),(3,'Mike Johnson','mike.johnson@example.com'),(4,'Emily Chen','emily.chen@example.com'),(5,'David Brown','david.brown@example.com'),(6,'Amy Wilson','amy.wilson@example.com'),(7,'Erica Davis','erica.davis@example.com'),(8,'Brian Lee','brian.lee@example.com'),(9,'Julia Kim','julia.kim@example.com'),(10,'Daniel Park','daniel.park@example.com');

DROP TABLE IF EXISTS `dogs`;
CREATE TABLE `dogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `breed` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `weight` decimal(5,2) DEFAULT NULL,
  `owner_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `dogs_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `dogs` VALUES (1,'Buddy','Golden Retriever',4,65.50,1),(2,'Luna','Labrador Retriever',2,50.20,2),(3,'Max','German Shepherd',6,75.30,3),(4,'Rocky','Bulldog',3,45.60,4),(5,'Molly','Shih Tzu',1,10.10,5),(6,'Daisy','Beagle',5,25.40,6),(7,'Toby','Poodle',4,15.80,7),(8,'Charlie','Siberian Husky',2,50.00,8),(9,'Bella','Dachshund',7,12.30,9),(10,'Cooper','Chihuahua',1,5.50,10);
