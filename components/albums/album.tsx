import Link from 'next/link';
import { FunctionComponent } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAlbum } from 'types/google';

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
          <Link href={`album/${album.id}`}>
            <a title={album.title}>
              {album.title.length > 30
                ? album.title.substring(0, 27) + '...'
                : album.title}
            </a>
          </Link>
        </h3>

        <div style={{ padding: '.5rem', float: 'left' }}>
          <a
            href={album.productUrl}
            title={'Open Google Photos'}
            target="_blank"
            rel="noreferrer"
          >
            <FaGoogle />
          </a>
        </div>

        <div className={styles.count}>
          <small>{album.mediaItemsCount} items</small>
        </div>
      </div>
    </article>
  );
};

export default Album;
