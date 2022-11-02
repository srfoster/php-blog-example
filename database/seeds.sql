
USE blog;
INSERT INTO users (id, name) VALUES (1, "blogger1");
INSERT INTO users (id, name) VALUES (2, "blogger2");

-- Blogger1's "Hello, World" post:
INSERT INTO posts (creation_date, text, user_id)
       VALUES ('2022-11-01', "Hello, World!", 1);

-- Blogger2's "Hello, World" post:
INSERT INTO posts (creation_date, text, user_id)
      VALUES ('2022-11-02', "Hello, World (from Blogger2)!", 2);
