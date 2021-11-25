const express = require('express')
const router = express.Router();
const sequelize = require('sequelize');

const { Creator } = require('../../models');

const { needNotLogin } = require('../middlewares')
const {fetchVideos} = require('../../api/youtube')

router.get('/', async (req, res, next) => {
  try{
    const creators = await Creator.findAll({
      order: [
        [ sequelize.cast(sequelize.col('subscriberCount'), 'INTEGER') , 'DESC' ]
      ],
    })
    res.status(200).json(creators);
  } catch(err) {
    console.error(err)
    next(err);
  }
})

router.get('/:channelId', async (req, res, next) => {
  try{
    const creator = await Creator.find({
      where: req.params.channelId
    })    
    res.status(200).json(creator);
  } catch(err){
    console.error(err);
    next(err);
  }
})

router.get('/:channelId/videos', async (req, res, next) => {
  try{
    const fetchedVideos = await fetchVideos({ id: req.params.channelId, limit: req.query.limit, nextPageToken: req.query.pageToken })
    const reformedVideoList = fetchedVideos.items.map((item) => {
      return {
        id: item.id.videoId,
        publishTime: item.snippet.publishTime,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        provider: item.snippet.channelTitle,
        clickThroughUrl: 'https://www.youtube.com/watch?v=' + item.id.videoId
      }
    });
    const videoList = {
      pageToken: fetchedVideos.nextPageToken,
      items: reformedVideoList,
    }
    res.status(200).json(videoList);
  } catch(err){
    console.error(err);
    next(err);
  }
})

module.exports = router;