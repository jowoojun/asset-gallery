import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Container from '../container/Container';
import CardContainer from '../container/CardContainer';
import VerticalInfiniteScrollListItem from '../listItem/VerticalInfiniteScrollListItem';
import { Font } from '../../components/styles/Font'

const VerticalInfiniteScrollList = ({title, dataList}) => {
  return (
    <Container>
      <Box sx={{ width: '100%'}}>
        <Font theme={{fs: '1.5em'}}>{title}</Font>
        <Grid
          container
          spacing={4}
          justify="center"
          style={{paddingTop: '20px'}}
        >
          {dataList.map((data) => (
            <Grid key={data.clickThroughUrl} item xs={12} sm={6} md={6} style={{paddingTop: 0}}>
              <CardContainer>
                <VerticalInfiniteScrollListItem data={data}/>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default VerticalInfiniteScrollList;