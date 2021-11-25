import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import LinesEllipsis from 'react-lines-ellipsis'

import { Font } from '../styles/Font';

const VerticalInfiniteScrollListItem = ({data}) => {
  return (
    <nav aria-label="main mailbox folders">
      <List>
        <ListItem disablePadding style={{width: '100%'}}>
          <a href={data.clickThroughUrl} target="_blank" rel="noreferrer noopener" style={{textDecoration: 'none', padding: 0, margin: 0, width: '100%' }}>
            <ListItemButton style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Grid item xs={5} sm={4} md={3}>
                <ListItemIcon style={{display: 'flex'}}>
                  <img style={{maxHeight: '80px', maxWidth: '100px'}} src={data.thumbnail} />
                </ListItemIcon>
              </Grid>
              <Grid item xs={7} sm={8} md={9}>
                <ListItemText 
                  style={{ display: 'inline-block'}}
                  primary={
                    <div>
                      <div style={{display: 'inline-block', flexDirection: 'row', wordBreak: 'keep-all'}} >
                      <LinesEllipsis
                        text={data.title}
                        maxLine='2'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        style={{color: 'white'}}
                      />
                      </div>
                      <div style={{display: 'flex', flexDirection: 'row', wordBreak: 'keep-all'}} >
                        <Font style={{wordWrap: 'break-word'}}>{data.publishTime.split('T')[0]}</Font>
                      </div>
                    </div>
                  } 
                  />
                </Grid>
            </ListItemButton>
          </a>
        </ListItem>
      </List>
    </nav>
  )
}

export default VerticalInfiniteScrollListItem;