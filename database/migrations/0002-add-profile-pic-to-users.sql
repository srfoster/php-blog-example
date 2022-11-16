
USE blog;

-- Change users table to have a profile_pic_url column
ALTER TABLE users ADD profile_pic_url TEXT;

-- Migrate any seed blogData
UPDATE users SET profile_pic_url = "https://mui.com/static/images/avatar/1.jpg" WHERE id = 1;
UPDATE users SET profile_pic_url = "https://mui.com/static/images/avatar/3.jpg" WHERE id = 2;
