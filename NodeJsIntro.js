//console.log('hello world');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Box model</title>
  </head>
  <style>
      .container{
          background-color: burlywood;
          border: 3px solid rgb(102, 89, 173);
          padding: 9px;
          /* padding: 23px 33px 22px 30px; padding = top right bottom left */
          /* padding : 23px 33px; padding = top&bottom  left&right */
          margin: 20px 20px;
          border-radius: 24px;
          box-sizing: border-box;
          /* Is property se box width ko adjust kar lega padding ke hisaab se */
      }
  </style>
  <body>
      <div class ="container">
          <h3>Heading for this file</h3>
          <pi id="first">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta voluptates officiis labore ratione accusamus dolores asperiores, corrupti harum rerum, blanditiis eius cumque illo! Doloremque quibusdam minima porro sunt repellendus.</p>
      </div>
  
      <div class ="container">
          <h3>Heading for this file</h3>
          <pi id="second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta voluptates officiis labore ratione accusamus dolores asperiores, corrupti harum rerum, blanditiis eius cumque illo! Doloremque quibusdam minima porro sunt repellendus.</p>
      </div>
  
      <div class ="container">
          <h3>Heading for this file</h3>
          <pi id="third">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta voluptates officiis labore ratione accusamus dolores asperiores, corrupti harum rerum, blanditiis eius cumque illo! Doloremque quibusdam minima porro sunt repellendus.</p>
      </div>
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});