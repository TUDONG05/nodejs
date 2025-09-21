const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')))
// Cấu hình template engine Handlebars
app.engine('hbs', handlebars.engine({extname:'hbs'}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

// HTTP logger
app.use(morgan("combined"));

// Định nghĩa route cho trang chủ
app.get('/', (req, res) => {
    // Hiển thị view "home"
    return res.render('home');
});


app.get('/news', (req, res) => {
    // Hiển thị view "home"
    return res.render('news');
});

// Chạy server
app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
