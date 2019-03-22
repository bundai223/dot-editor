var page = require('webpage').create()
page.open('http://www.google.com', () => {
  setTimeout(() => {
    page.render('google.png')
    phantom.exit()
  }, 200)
})
