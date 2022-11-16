
USE blog;

-- Change posts table to have a title column
ALTER TABLE posts ADD title VARCHAR(255);

-- Migrate any seed blogData
UPDATE posts SET title = "Hello" WHERE id = 1;
UPDATE posts SET title = "Hello2" WHERE id = 2;
