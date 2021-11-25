const axios = require('axios')

const fetchKoreanHeadline = async (queryObject) => {
  const options = {
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?country=kr&category=business&pageSize=${queryObject.limit}&page=${queryObject.page}&apiKey=${process.env.NEWSAPI_KEY}`
  }
  const result = await axios(options)
  return result.data
}

module.exports = { fetchKoreanHeadline }

// [
  // {
  //   -"source": {
  //   "id": null,
  //   "name": "Fnnews.com"
  //   },
  //   "author": "파이낸셜뉴스",
  //   "title": "[뉴시스Pic] 2년 만에 만원관중… '황희찬 결승골' 축구대표팀, UAE에 1-0 승리 - 파이낸셜뉴스",
  //   "description": "[서울=뉴시스] 류현주 기자 = 남자축구대표팀이 11일 경기 고양운동종합운동장에서 열린 2022 FIFA 카타르 월드컵 아시아 지역 최종예선에서 아랍에미리트(UAE)를 상대로 1-0으로 승리했다. 전반 36분 황희찬이 성공시킨 페널티킥이 결승골로 이어졌다.   3승(2무 승점 11)째를 신고한 한국은 이란(4승1무 승점 13)에 이어..",
  //   "url": "https://www.fnnews.com/news/202111120850430164",
  //   "urlToImage": "https://image.fnnews.com/resource/media/image/2021/11/12/202111120849421505_l.jpg",
  //   "publishedAt": "2021-11-11T23:50:00Z",
  //   "content": "Copyright . All rights reserved."
  // },
// ]