import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'app/store';
import { fetchGoogleMediaItems } from 'app/features/photoLibrarySlice';
import Layout from 'components/common/layout';
import Loader from 'components/common/loader';
import MediaItemList from 'components/media-items/media-items-list';

import styles from 'styles/Index.module.scss';

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
        <title>Photostream - Digital Nomad Photos</title>
        <meta name="description" content="Photostream - Digital Nomad Photos" />
      </Head>

      <h1 hidden>Photostream</h1>

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
