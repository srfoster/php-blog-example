
# REST API

All HTTP requests below will fetch a JSON response.  The base path (while the app is in development) will be `http://localhost/php-blog-example/backend/index.php`.  The rest of endpoints maybe reached as follows.

`GET /blogs` will fetch a JSON response will all of the blogs in the database.  Example response:

```
[
  {text: "Hello, Word!", author: "blogger1", creation_date: "2022-11-01", publication_date: null},
  {text: "Hello, World (from Blogger2)!", author: "blogger2", creation_date: "2022-11-02", publication_date: null},
]
```


# Note about CORS

Our REST API returns a header `Access-Control-Allow-Origin: *`.  This allows the React dev environment (by default hosted at `localhost:3000`) to be able to access resources "cross-origin" -- which is normally disabled for security reasons.
