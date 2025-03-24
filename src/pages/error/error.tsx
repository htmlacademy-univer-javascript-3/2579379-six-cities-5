import { Link } from 'react-router-dom';
import errorcat from './image/errorcat.png';

export const Error = () =>
  (
    <div style={{display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'sans-serif'}}
    >
      <h1 style={{padding: '15px 15px',
        borderRadius: '30px'}}
      >
        404 This page dosen&apos;t exist :c
      </h1>
      <div style={{backgroundColor: 'skyblue',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        position: 'absolute',
        marginTop: '103px',
        marginLeft: '-155px'}}
      >
      </div>
      <Link to='/' style={{textDecoration: 'underline',
        position: 'relative',
        fontSize: '16px'}}
      >
        Return to the main page
      </Link>
      <img src={errorcat} style={{width: '463px', alignSelf: 'flex-start'}}/>
    </div>
  );

