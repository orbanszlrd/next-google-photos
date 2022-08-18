import { FunctionComponent } from 'react';
import { GoogleAlbum } from '../types/google';
import Album from './album';

import styles from './album-list.module.scss';

export interface AlbumListProps {
  albums: GoogleAlbum[];
}

const AlbumList: FunctionComponent<AlbumListProps> = ({ albums }) => {
  return (
    <div className={styles['grid-container']}>
      {albums.map((album: GoogleAlbum) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumList;
