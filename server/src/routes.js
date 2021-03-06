const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)

  app.get('/songs/:songId',
    SongsController.show)

  app.put('/songs/:songId',
    SongsController.put)

  app.post('/songs',
    SongsController.post)

  app.get('/bookmarks',
    BookmarksController.index)

  app.post('/create-bookmarks/:songId&:userId',
    BookmarksController.post)

  app.delete('/bookmarks/:id',
    BookmarksController.delete)
  app.get('/histories',
    HistoriesController.index)
  app.post('/histories',
    HistoriesController.post)
}
