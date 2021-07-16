The web server coded in [hashserver.js](./hashserver.js), listens on port 8787,
and the endpoint /hash returns hash of data of json POSTed to it.

A sample POST has been provided in [here](./req.rest), with a sample return:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 75
ETag: W/"4b-5jqdWwHOicxRQysTkhonS/lsAVU"
Date: Fri, 16 Jul 2021 18:49:58 GMT
Connection: close

{
  "hash": "c22fd6efa6912a8b84715f4e860047b7a3909f8984d9d0b85a7bcf79c7235312"
}
```