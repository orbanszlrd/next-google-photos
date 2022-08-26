import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Index.module.scss';

import Layout from '../components/layout';
import { AppDispatch, RootState } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/loader';
import { useEffect } from 'react';
import { fetchGoogleMediaItems } from '../app/features/photoLibrarySlice';
import PhotoList from '../components/photo-list';

const Photos: NextPage = () => {
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
        <title>Photos</title>
        <meta name="description" content="Photos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.container}>
          <PhotoList mediaItems={mediaItems} />
        </section>
      )}
    </Layout>
  );
};

export default Photos;
