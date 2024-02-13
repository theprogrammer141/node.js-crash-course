const http = require('http');
const fs = require('fs');
const { resolve } = require('path');
const _ = require('lodash');

const server = http.createServer((request, response) =>
{
    
    // const num = _.random(0,20);
    // console.log(num);

    // const greet = _.once(() =>
    // {
    //     console.log("hello");
    // });

    // greet();
    // greet();
    //Set Header Content Type
    // response.setHeader('Content-Type', 'text/plain');
    // response.setHeader('Content-Type', 'text/html');
    // response.write('<p>hello, ninjas</p>');
    // response.write('<p>hello again, ninjas</p>');
    // response.end();

    let path = './views/';
    switch(request.url)
    {
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        case '/about-us':
            response.statusCode = 301;
            response.setHeader('Location', '/about');
            response.end();
            break;
        default:
            path += '404.html';
            response.statusCode = 404;
            break;
    }
   fs.readFile(path, (err,data) =>
   {
    if(err)
    {
        console.log(err);
        response.end();
    }
    else
    {
        // response.write(data);
        response.end(data);
    }
   }) 
});

server.listen(3000, 'localhost', () =>
{
    console.log('listening for requests on portnumber 3000');
});