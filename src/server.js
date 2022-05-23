const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// Set default view engine default view directory /views
app.set('view engine', 'ejs');
// kelias iki views direktorijos nuo root
app.set('views', 'src/views');

// static directory
const staticDir = path.join(__dirname, 'assets');
app.use(express.static(staticDir));

const mainInfo = {
  title: 'SSR',
  date: '2022'
}

app.get('/', function (req, res) {
  // get info from db
  const tech = ['Html', 'Css', 'Js']
  const data = {
    tech,
    title: 'Home page'
  }
  res.render('index', data);
});

app.get('/about', (req, res) => {
  const data = {
    title: 'About Us'
  }
  res.render('about', data);
});

app.get('/contact', (req, res) => {
  const locals = {
    title: 'Contact Us'
  }
  res.render('contact', locals)
})

// GET /users - grazins users.ejs psl kuris atvaizduos useriu korteliu pavidalus
// sukuri user.ejs
// exportuoti importuoti users masyva
// paduoti users masyva i user.ejs psl
// user.ejs psl generuoti korteles is masyvo duomenu 


app.listen(PORT, () => console.log('listening on port', PORT));
