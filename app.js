/*1. add http module */
const http = require("http");

const hostname = '127.0.0.1';
const port = 5000;

/*createServer =  http method, create a new HTTP server and server를 return.*/
const server = http.createServer((req, res) => {

  /*요청에 대한 응답 코드로 200을 세팅한다. 
   200은 성공적 응답을 뜻한다. 
  */
  res.statusCode = 200;
  /*
  content-type header 세팅하기 
  */
  res.setHeader("content-type", "text/plain");
  /*close the respone. augument로 content를 넣어보낼 수 있다. */
  res.end("hello world");
});

/*server port, hostname을 세팅해주어야 함.  
  server가 준비되면 > callback function 이 실행됨. 
*/
server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});

/*
127.0.0.1 로 reqeset가 들어오면 
request 이벤트가 실행된다. > providing request, response 

-request : http.IncomingMessage object
-response : http.ServerResponse object

이 2개의 객체는ㄴ http call을 핸들링하는데 필요한 필수 요소이다. 
*/