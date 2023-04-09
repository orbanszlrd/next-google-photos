import Image from 'next/image';
import { FunctionComponent, useEffect, useState } from 'react';
import justifyLayout from 'justified-layout';

import { GoogleMediaItem } from 'types/google';
import styles from './media-item-list.module.scss';

export interface MediaItemListProps {
  mediaItems: GoogleMediaItem[];
}

const MediaItemList: FunctionComponent<MediaItemListProps> = ({
  mediaItems,
}) => {
  const photoAspectRatios: number[] = [];

  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    function adjustBoxSizes() {
      setContainerWidth(
        Math.min(
          document.body.clientWidth ? document.body.clientWidth : 0,
          1920
        )
      );
    }

    adjustBoxSizes();
    window.addEventListener('resize', adjustBoxSizes);

    return () => window.removeEventListener('resize', adjustBoxSizes);
  }, []);

  mediaItems.forEach(({ mediaMetadata }) => {
    photoAspectRatios.push(
      Number(mediaMetadata.width) / Number(mediaMetadata.height)
    );
  });

  const layoutGeometry = justifyLayout(photoAspectRatios, {
    containerWidth: containerWidth,
    containerPadding: { top: 0, right: 0, left: 0, bottom: 0 },
    targetRowHeight: 240,
    boxSpacing: {
      horizontal: 4,
      vertical: 4,
    },
    showWidows: false,
  });

  return (
    <div
      className={styles['justify-container']}
      style={{ height: layoutGeometry.containerHeight, width: '100%' }}
    >
      {layoutGeometry.boxes
        .filter((box) => box.width && box.height)
        .map((box, index) => (
          <article
            className={styles['justify-box']}
            key={index}
            style={{
              top: box.top,
              left: box.left,
              width: box.width,
              height: box.height,
            }}
          >
            <Image
              src={mediaItems[index].baseUrl}
              alt={mediaItems[index].filename}
              title={new Date(
                mediaItems[index].mediaMetadata.creationTime
              ).toLocaleString()}
              fill
              unoptimized
            />
          </article>
        ))}
    </div>
  );
};

export default MediaItemList;
