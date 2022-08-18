import { FunctionComponent } from 'react';
import { GoogleAlbum } from '../types/google';

import styles from './album.module.scss';

export interface AlbumProps {
  album: GoogleAlbum;
}

const Album: FunctionComponent<AlbumProps> = ({ album }) => {
  return (
    <article className={styles.item}>
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(${album.coverPhotoBaseUrl})`,
        }}
      >
        <h3 className={styles.title}>
          <a
            href={album.productUrl}
            title={album.title}
            target="_blank"
            rel="noreferrer"
          >
            {album.title.length > 30
              ? album.title.substring(0, 27) + '...'
              : album.title}
          </a>
        </h3>
        <div className={styles.count}>
          <small>{album.mediaItemsCount} items</small>
        </div>
      </div>
    </article>
  );
};

export default Album;
