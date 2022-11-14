# php-blog-example

There are three folder in this project:

* Backend for our PHP
* Frontend for our frontend code (JS/React?)
* Database for our SQL code

# Architecture 

This is an example of a decoupled app.  The backend will be written in PHP and the frontend will be written in React.  The backend will serve up data with a JSON REST API, and the frontend will consume that data to display it.

# Future plans

* Add profile pictures to users
* Show author's name when we display a blog post
* Make blog tiles be links to the full blog post
* Basic blog post CRUD (create, read, update, destroy):
  - Enable user to create new blog posts
  - Enable user to update an existing blog post
  - Enable user to delete blog posts
* Basic user CRUD (create, read, update, destroy)
* Add ability to "like" a blog post
* Add ability to comment on a blog post, basic CRUD for comments
* Ability to add "tags" or "topics" to a post (so we can do recommendations)
* [DevOps] Make it easier to onboard new developers: document getting started process and/or create helper scripts for getting started
