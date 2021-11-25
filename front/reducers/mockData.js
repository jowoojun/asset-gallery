export const DUMMYINDICES = { data: [
  {
    id: 1,
    name: "코스피",
    price: "3019.18",
    timezone: 'Asia/Seoul',
    open: true,
    location: "서울",
    changePrice: "-49.64",
    changeRate: "-1.62",
  },
  {
    id: 2,
    name: "코스닥",
    price: "983.20",
    timezone: 'Asia/Seoul',
    open: true,
    location: "서울",
    changePrice: "-20.07",
    changeRate: "-2.00",
  },
  {
    id: 3,
    name: "코스피200",
    price: "394.79",
    timezone: 'Asia/Seoul',
    open: true,
    location: "서울",
    changePrice: "-6.51",
    changeRate: "-1.62",
  },
  {
    id: 4,
    name: "S&P 500",
    price: "4357.05",
    timezone: 'America/New_York',
    open: false,
    location: "뉴욕",
    changePrice: "+49.51",
    changeRate: "+1.15",
  },
  {
    id: 5,
    name: "나스닥",
    price: "14566.7",
    timezone: 'America/New_York',
    open: false,
    location: "뉴욕",
    changePrice: "+118.1",
    changeRate: "+0.82",
  },
]};

export const DUMMYPORTFOLIOS = { data: [
  {
    id: 1,
    name: "한국주식",
    changeRateDay: "-1.62",
    changeRateTotal: "-3.72",
  },
  {
    id: 2,
    name: "미국주식",
    changeRateDay: "-2.00",
    changeRateTotal: "+8.5",
  },
  {
    id: 3,
    name: "중소코스닥",
    changeRateDay: "-1.62",
    changeRateTotal: "+32.7",
  },
]}

export const DUMMYNEWS = { data : [
  {
    id: "2b091596-c0d0-3fef-83e6-70ca814bf03c",
    title: "Cathie Wood just dumped $270 million in Tesla — 3 cheap EV stocks to buy instead",
    pubDate: "2021-10-05T21:33:00Z",
    thumbnail: "https://s.yimg.com/uu/api/res/1.2/Dp8nUyVA5Nk350h7.8O2DA--~B/aD00MDA7dz03Mjg7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/cfADlrHX6mo.OTmadPDWeg--~B/aD00MDA7dz03Mjg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/moneywise_327/bb2a5ac980df2aa2f43df5d02e6c6d31",
    url: "https://finance.yahoo.com/news/cathie-wood-just-dumped-270-210700949.html",
    provider: "MoneyWise",
    stockTickers: [
      {
        symbol: "ARKK",
        changeRate: '-2.00'
      },
      {
        symbol: "BLNK",
        changeRate: '+2.00'
      },
      {
        symbol: "NIO",
        changeRate: '-2.00'
      },
      {
        symbol: "ARKW",
        changeRate: '+2.00'
      },
      {
        symbol: "XPEV",
        changeRate: '-2.00'
      },
      {
        symbol: "ARKQ",
        changeRate: '+2.00'
      },
      {
        symbol: "LI",
        changeRate: '-2.00'
      },
      {
        symbol: "STLA",
        changeRate: '+2.00'
      },
      {
        symbol: "TSLA",
        changeRate: '-2.00'
      },
      {
        symbol: "F",
        changeRate: '-2.00'
      },
      {
        symbol: "GM",
        changeRate: '-2.00'
      },
    ]
  },
  {
    id: "600acf79-2de5-3014-b59f-cc5dfbe001e3",
    title: "Asia Stocks, U.S. Futures Dip as Bond Yields Climb: Markets Wrap",
    pubDate: "2021-10-06T04:30:49Z",
    thumbnail: "https://s.yimg.com/uu/api/res/1.2/JIGru4NfbBotErJ9Th569g--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/1vZfMnD0FrazZRJn81Fp8w--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_markets_842/3476546fe0f39ec066646ebbe7ed0ef8",
    url:"https://finance.yahoo.com/news/asia-stocks-track-u-rebound-214928647.html",
    provider: "Bloomberg",
    stockTickers: null
    
  },
  {
    id: "0f06df2f-4343-3e01-8f15-ae65ea76c9ce",
    title: "Blackstone’s Jon Gray Says It’s a Good Time to Sell Assets",
    pubDate: "2021-10-05T16:16:56Z",
    thumbnail: "https://s.yimg.com/uu/api/res/1.2/YRZl6YdaC11bbxb_MbiKVw--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/uSf7c5F_5OzlOTzkizsbMA--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_markets_842/80e6fd582087c36abd9f147192167c1d",
    url: "https://finance.yahoo.com/news/blackstone-jon-gray-says-good-161656006.html",
    provider: "Bloomberg",
    stockTickers: null,
  },
  {
    id: "2b091596-c0d0-3fef-83e6-70ca814bf03casdf",
    title: "Cathie Wood just dumped $270 million in Tesla — 3 cheap EV stocks to buy instead",
    pubDate: "2021-10-05T21:33:00Z",
    thumbnail: "https://s.yimg.com/uu/api/res/1.2/Dp8nUyVA5Nk350h7.8O2DA--~B/aD00MDA7dz03Mjg7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/cfADlrHX6mo.OTmadPDWeg--~B/aD00MDA7dz03Mjg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/moneywise_327/bb2a5ac980df2aa2f43df5d02e6c6d31",
    url: "https://finance.yahoo.com/news/cathie-wood-just-dumped-270-210700949.html",
    provider: "MoneyWise",
    stockTickers: [
      {
        symbol: "ARKK",
        changeRate: '-2.00'
      },
      {
        symbol: "BLNK",
        changeRate: '+2.00'
      },
      {
        symbol: "NIO",
        changeRate: '-2.00'
      },
      {
        symbol: "ARKW",
        changeRate: '+2.00'
      },
      {
        symbol: "XPEV",
        changeRate: '-2.00'
      },
      {
        symbol: "ARKQ",
        changeRate: '+2.00'
      },
      {
        symbol: "LI",
        changeRate: '-2.00'
      },
      {
        symbol: "STLA",
        changeRate: '+2.00'
      },
      {
        symbol: "TSLA",
        changeRate: '-2.00'
      },
      {
        symbol: "F",
        changeRate: '-2.00'
      },
      {
        symbol: "GM",
        changeRate: '-2.00'
      },
    ]
  },
  {
    id: "600acf79-2de5-3014-b59f-cc5dfbe001e3asdf",
    title: "Asia Stocks, U.S. Futures Dip as Bond Yields Climb: Markets Wrap",
    pubDate: "2021-10-06T04:30:49Z",
    thumbnail: "https://s.yimg.com/uu/api/res/1.2/JIGru4NfbBotErJ9Th569g--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/1vZfMnD0FrazZRJn81Fp8w--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_markets_842/3476546fe0f39ec066646ebbe7ed0ef8",
    url:"https://finance.yahoo.com/news/asia-stocks-track-u-rebound-214928647.html",
    provider: "Bloomberg",
    stockTickers: null
    
  },
  {
    id: "0f06df2f-4343-3e01-8f15-ae65ea76c9ceasdf",
    title: "Blackstone’s Jon Gray Says It’s a Good Time to Sell Assets",
    pubDate: "2021-10-05T16:16:56Z",
    thumbnail: "https://s.yimg.com/uu/api/res/1.2/YRZl6YdaC11bbxb_MbiKVw--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/uSf7c5F_5OzlOTzkizsbMA--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_markets_842/80e6fd582087c36abd9f147192167c1d",
    url: "https://finance.yahoo.com/news/blackstone-jon-gray-says-good-161656006.html",
    provider: "Bloomberg",
    stockTickers: null,
  },
]}