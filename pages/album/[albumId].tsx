import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoogleAlbumMediaItems } from 'app/features/photoLibrarySlice';
import { AppDispatch, RootState } from 'app/store';
import Layout from 'components/common/layout';
import Loader from 'components/common/loader';
import MediaItemList from 'components/media-items/media-items-list';

import styles from 'styles/Index.module.scss';

const AlbumPage: NextPage = ({
  albumId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const loading = useSelector((state: RootState) => state.photoLibrary.loading);
  const albumPhotos = useSelector(
    (state: RootState) => state.photoLibrary.albumPhotos
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchGoogleAlbumMediaItems(albumId));
    }

    if (!albumPhotos[albumId]) {
      fetchData();
    }
  }, [dispatch, albumId, albumPhotos]);

  return (
    <Layout>
      <Head>
        <title>Album Photos</title>
        <meta name="description" content="Album Photos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.container}>
          <MediaItemList mediaItems={albumPhotos[albumId] || []} />
        </section>
      )}
    </Layout>
  );
};

export default AlbumPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const albumId = context.params?.albumId;

  return {
    props: {
      albumId,
    },
  };
};
