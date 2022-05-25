const showHomePage = (req, res) => {
  // get info from db
  const tech = ['Html', 'Css', 'Js'];
  const data = {
    tech,
    title: 'Welcome',
    currentPage: 'home',
  };
  res.render('index', data);
}

const showAboutPage = (req, res) => {
  const data = {
    title: 'About Us',
    currentPage: 'about',
  };
  res.render('about', data);
}

module.exports = {
  showHomePage, 
  showAboutPage
}