const { Bookmark, Song } = require('../models')
const _ = require('lodash')
module.exports = {

  async index (req, res) {
    try {
      const {
        songId,
        userId
      } = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [{
          model: Song
        }]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured at the time of fetching songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const songId = req.params.songId
      const userId = req.params.userId
      console.log('THIS IS SOND ID', songId)
      console.log('THIS IS USER ID', userId)
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      console.log('bookmark', bookmark)
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have bookmarked this song once'
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: req.params.songId,
        UserId: req.params.userId
      })
      console.log('newBookmark isssss', newBookmark)
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured at the time of creating the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const BookmarkId = req.params.id
      console.log('THIS IS ID:', req.params.id)
      const bookmark = await Bookmark.findById(BookmarkId)
      // console.log('This is the book mark id at the server side', bookmark)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      console.log('THIS IS ERROR:', err)
      res.status(500).send({
        error: 'An error has occured at the time of deleting the bookmark songs.'
      })
    }
  }

}
