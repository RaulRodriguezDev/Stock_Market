const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path')
const app = express()

const PORT = process.env.PORT || 5000

// Set Handlebars Middleware

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

// Set static folder

app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT,() => console.log('Server is listenning at PORT ' + PORT))