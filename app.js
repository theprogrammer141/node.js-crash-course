// const express = require('express');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const Blog = require('./models/blog');

// //Express app
// const app = express();

// //connect mongodb
// const dbURI = 'mongodb+srv://net_ninja_31:test1234@nodetuts.bgh6um3.mongodb.net/node-tuts';

// mongoose.connect(dbURI)
// .then((result) => app.listen(3000))
// .catch((err) => {console.log(err)});

// //Register view engine
// app.set('view engine', 'ejs');

// //routes
// app.get('/blogs', (request, response) =>
// {
//     Blog.find().sort({createdAt: -1})
//         .then((result) =>
//         {
//             response.render('index', {title: 'All Blogs', blogs: result})
//         })
//         .catch((err) =>
//         {
//             console.log(err);
//         })
// });

// // app.post('/blogs', (request, response) =>
// // {
// //     console.log(request.body);
// // });

// // //mongoose and mongo sandbox routes
// // app.get('/add-blog', (request, response) =>
// // {
// //     const blog = new Blog({
// //         title: 'new blog 2',
// //         snippet: 'about my new blog',
// //         body: 'more about my new blog'
// //     });

// //     blog.save()
// //     .then((result) => {
// //         response.send(result);
// //     })
// //     .catch((err) =>
// //     {
// //         console.log(err);
// //     })
// // });

// // app.get('/all-blogs', (request, response) =>
// // {
// //     Blog.find()
// //         .then((result) =>
// //         {
// //             response.send(result);
// //         })
// //         .catch((err) =>{
// //             console.log(err);
// //         })
// // });

// // app.get('/single-blog', (request, response) =>
// // {
// //     Blog.findById('65ca5ce70be19b1826c87fbf')
// //         .then((result) =>
// //         {
// //             response.send(result);
// //         })
// //         .catch((err) =>
// //         {
// //             console.log(err);
// //         })
// // });


// //Middleware and static files
// app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));
// app.use(morgan('tiny'));
// // app.use((request, response, next) =>
// // {
// //     console.log('new request made');
// //     console.log('host: ', request.hostname);
// //     console.log('path: ', request.path);
// //     console.log('method: ', request.method);
// //     next();
// // });

// // app.use((request, response, next) =>
// // {
// //     console.log('in the next middleware');
// //     next();
// // });

// app.get('/', (request, response) =>
// {
//     // response.send('<p>Home page</p>');
//     // response.sendFile('./views/index.html', {root: __dirnamviews/about.ejse});
//     const blogs = [
//         {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//       ];
//     response.render('index', {title: 'Home', blogs});
// });

// app.get('/about', (request, response) =>
// {
//     // response.send('<p>about page</p>');
//     // response.sendFile('./views/about.html', {root: __dirname});
//     response.render('about' , {title: 'About'});
// });

// app.get('/blogs/create', (request, response) =>
// {
//     response.render('create' , {title: 'Create a new blog'});
// })
// //404 page
// app.use((request, response) =>
// {
//     // response.status(404).sendFile('./views/404.html', {root: __dirname});
//     response.status(404).render('404' , {title: '404'});
// });