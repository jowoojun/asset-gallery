import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import NewsCardTickerInfo from './NewsCardTickerInfo';

import { DefaultFontColor } from '../styles/Color';

const StyledTabs = styled((props) => {
  return (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
)})({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '0',
  },
});

const NewsInfo = ({news}) => {  
  return (
    <Card sx={{ backgroundColor: 'transparent' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={news.content.thumbnail.resolutions[0].url}
      />
      <CardContent>
        <Typography variant="body2" color={DefaultFontColor}>
          {news.content.title}
        </Typography>
      </CardContent>
      {/* <CardActions>
        {news.content.finance.stockTickers? 
          <StyledTabs 
            value={0} 
            style={{border: 'none', margin: 0, padding: 0}}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable auto tabs example">
            {news.content.finance.stockTickers.map((ticker) => (
              <NewsCardTickerInfo key={news.id.concat(ticker.symbol)} ticker={ticker} />
            ))}
          </StyledTabs>
        : <div style={{ height: '48px'}}/>}
      </CardActions> */}
    </Card>
  )
}

export default NewsInfo;