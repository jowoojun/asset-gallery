import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

import Container from '../container/Container';
import CardContainer from '../container/CardContainer';
import HorizontalScrollingAvatar from '../listItem/HorizontalScrollingAvatar';

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

const HorizontalScrollingAvatarCard = ({dataList, title, link}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Container>
      <CardContainer title={title}>
        <StyledTabs 
          value={value} 
          onChange={handleChange} 
          style={{border: 'none'}}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example">
          {dataList.map((data) => 
            <HorizontalScrollingAvatar key={data.id} data={data} href={link} />
          )}
        </StyledTabs>
      </CardContainer>
    </Container>
  );
};

HorizontalScrollingAvatarCard.propTypes = {
}

export default HorizontalScrollingAvatarCard;