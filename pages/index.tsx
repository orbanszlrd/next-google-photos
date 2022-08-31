import type { NextPage } from 'next';
import Head from 'next/head';
import styles from 'styles/Index.module.scss';

import Layout from 'components/common/layout';
import { AppDispatch, RootState } from 'app/store';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/common/loader';
import { useEffect } from 'react';
import { fetchGoogleMediaItems } from 'app/features/photoLibrarySlice';
import MediaItemList from 'components/media-items/media-items-list';

const PhotostreamPage: NextPage = () => {
  const loading = useSelector((state: RootState) => state.photoLibrary.loading);
  const mediaItems = useSelector(
    (state: RootState) => state.photoLibrary.mediaItems
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchGoogleMediaItems());
    }

    if (mediaItems.length == 0) {
      fetchData();
    }
  }, [dispatch, mediaItems]);

  return (
    <Layout>
      <Head>
        <title>Photostream</title>
        <meta name="description" content="Photostream" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.container}>
          <MediaItemList mediaItems={mediaItems} />
        </section>
      )}
    </Layout>
  );
};

export default PhotostreamPage;
