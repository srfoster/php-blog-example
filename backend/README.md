
# REST API

All HTTP requests below will fetch a JSON response.  The base path (while the app is in development) will be `http://localhost/php-blog-example/backend`.  The rest of endpoints maybe reached as follows.

`GET /blogs` will fetch a JSON response will all of the blogs in the database.  Example response:

```
[
  {text: "Hello, Word!", author: "blogger1", creation_date: "2022-11-01", publication_date: null},
  {text: "Hello, World (from Blogger2)!", author: "blogger2", creation_date: "2022-11-02", publication_date: null},
]
```


