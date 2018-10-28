const { History, Song } = require('../models')
const _ = require('lodash')
module.exports = {

  async index (req, res) {
    try {
      const { userId } = req.query
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      })
        .map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history))
      res.send(histories)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured at the time of fetching History'
      })
    }
  },
  async post (req, res) {
    try {
      const histories = await History.create({
        SongId: req.params.songId,
        UserId: req.params.userId
      })
      // console.log('newBookmark isssss', newBookmark)
      res.send(histories)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured at the time of creating the history object'
      })
    }
  }

}
