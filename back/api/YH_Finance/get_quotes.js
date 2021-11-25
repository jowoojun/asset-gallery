var axios = require("axios").default;

const getQueotes = async (queryObject) => {
  var options = {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes',
    params: {
      region: 'US',
      symbols: queryObject.symbols
    },
    headers: {
      'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY
    }
  };

  try{
    const queotes = await axios(options);
    return queotes.data;
  } catch(error) {
    console.error(error);
  };
}


module.exports = { getQueotes }