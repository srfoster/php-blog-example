
DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;
USE blog;


-- Users have many posts
-- Users - id, name
CREATE TABLE users (
	id MEDIUMINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(35) NOT NULL
);

-- Posts - id, creation_date, publication_date, text, user_id (foreign key)
CREATE TABLE IF NOT EXISTS posts (
  id MEDIUMINT PRIMARY KEY AUTO_INCREMENT,
  creation_date DATE NOT NULL,
  publication_date DATE,
  text TEXT,
  user_id MEDIUMINT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
