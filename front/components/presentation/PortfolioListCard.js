import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

import Container from '../container/Container';
import CardContainer from '../container/CardContainer';
import PortfolioInfo from '../listItem/PortfolioInfo';

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

const PortfolioListCard = ({mainPortfolios}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Container>
      <CardContainer title={'포트폴리오'}>
        <StyledTabs 
          value={value} 
          onChange={handleChange} 
          style={{border: 'none'}}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example">
          {mainPortfolios.map((portfolio) => 
            <PortfolioInfo key={portfolio.id} portfolio={portfolio} href={"/portfolio/" + portfolio.id} />
          )}
        </StyledTabs>
      </CardContainer>
    </Container>
  );
};

PortfolioListCard.propTypes = {
  mainIndices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    changeRateDay: PropTypes.string.isRequired,
    changeRateTotal: PropTypes.string.isRequired
  }))
}

export default PortfolioListCard;