const express = require('express')
const router = express.Router();
const fs = require('fs');

const { needNotLogin } = require('../middlewares')
const { fetchKoreanHeadline } = require('../../api/news')

router.get('/', async (req, res, next) => {
  try{
    const fetchedNews = await fetchKoreanHeadline({ limit: req.query.paegSize, page: req.query.page })
    const reformedNewsList = fetchedNews.articles.map((item) => {
      return {
        id: item.source.id,
        publishTime: item.publishedAt,
        title: item.title,
        description: item.description,
        thumbnail: item.urlToImage,
        provider: item.author,
        clickThroughUrl: item.url
      }
    });
    res.status(200).json(reformedNewsList);
  } catch(err) {
    console.error(err)
    next(err);
  }
})

module.exports = router;