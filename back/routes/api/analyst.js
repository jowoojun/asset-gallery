const express = require('express')
const router = express.Router();
const sequelize = require('sequelize');

const { Analyst } = require('../../models');
const { Celebrity } = require('../../models');

const { getQueotes } = require('../../api/YH_Finance/get_quotes')

router.get('/', async (req, res, next) => {
  try{
    const analysts = await Analyst.findAll();
    res.status(200).json(analysts);
  } catch(err) {
    console.error(err)
    next(err);
  }
})

router.get('/:profileId/portfolio', async (req, res, next) => {
  try{
    const analyst = await Analyst.findOne({
      where: { profileId: req.params.profileId },
      include: [{
        model: Celebrity,
      }]
    });

    // 필요한 티커 추출
    var tickers = []
    analyst.Celebrities.map((stock) => {
      tickers.push(stock.dataValues.ticker)
    })

    // 필요한 정보 생성(현재가, 상승가, 상승률)
    const data = await getQueotes({ symbols: tickers.toString() })
    // 필요한 정보 추출(현재가, 상승가, 상승률)
    var dict = {}
    data.quoteResponse.result.map((stock) => {
      dict[stock.symbol] = {
        price: stock.regularMarketPrice, 
        percent: stock.regularMarketChangePercent.toFixed(2), 
        change: stock.regularMarketChange.toFixed(2)
      }
    })

    // 합치기
    analyst.Celebrities.map((stock) => {
      stock.dataValues['current'] = dict[stock.dataValues.ticker]
    })

    res.status(200).json(analyst);
  } catch(err) {
    console.error(err)
    next(err);
  }
})

module.exports = router;