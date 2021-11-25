const axios = require('axios')

const fetchVideos = async (queryObject) => {
  const options = {
    method: 'GET',
    url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=${queryObject.limit}&channelId=${queryObject.id}&key=${process.env.YOUTUBE_API_KEY}`
  };
  if(queryObject.nextPageToken){
    options.url += `&pageToken=${queryObject.nextPageToken}`
  }
  const result = await axios(options)
  return result.data
}

module.exports = { fetchVideos }
 