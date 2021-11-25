import Link from 'next/link';
import Tab from '@mui/material/Tab';

import { Font } from '../styles/Font';
import Avatar from '@mui/material/Avatar';

const HorizontalScrollingAvatar = ({data, href}, props) => {
  const tempImagePath = 'https://pbs.twimg.com/profile_images/3599636117/8468a03db84ec4211c3efeba18ac3925.png'
  return (
    <Tab
      component="a"
      onClick={(event) => { event.preventDefault(); }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maring: 0, padding: 0, marginTop: '5px', paddingBottom: '15px'}} 
      label={
        <Link href={{
              pathname: `${href}[id]`,
              query: { title: data.title }, // array라 문자화
            }}
            as={href + data.profileId} // 주소창의 endpoint
        >
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maring: 0, padding: 0, textDecoration: 'none'}}>
            <Avatar 
              sx={{ 
                minHeight: '60px', maxHeight: '90px', 
                minWidth: '60px', maxWidth: '90px', 
                maring: 0, padding: 0,
                marginTop: '10px', marginBottom: '10px' }} 
                alt={data.name} src={data.url!==undefined? data.url : tempImagePath} 
                />
            <span style={{ wordBreak: 'keep-all', minWidth: '60px', maxWidth: '90px', height: '2em'}}>
              <Font>{data.title}</Font>
            </span> 
          </div>
        </Link>
      }
      {...props}
    />
  );
}

HorizontalScrollingAvatar.propTypes = {
}

export default HorizontalScrollingAvatar;