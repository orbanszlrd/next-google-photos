import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GoogleAlbum } from 'types/google';
import { AppDispatch, RootState } from 'app/store';
import {
  setFilter,
  fetchAllGoogleAlbums,
} from 'app/features/photoLibrarySlice';
import styles from 'styles/Albums.module.scss';
import AlbumList from 'components/albums/album-list';
import ElementCounter from 'components/common/element-counter';
import Filter from 'components/common/filter';
import Layout from 'components/common/layout';
import Loader from 'components/common/loader';

const AlbumsPage: NextPage = () => {
  const loading = useSelector((state: RootState) => state.photoLibrary.loading);
  const albums = useSelector((state: RootState) => state.photoLibrary.albums);
  const filter = useSelector((state: RootState) => state.photoLibrary.filter);
  const dispatch: AppDispatch = useDispatch();
  const [filteredAlbums, setFilteredAlbums] = useState(albums);

  const setTitleFilter = (titleFilter: string) => {
    dispatch(setFilter(titleFilter));
  };

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchAllGoogleAlbums());
      setFilteredAlbums(albums);
    }

    if (albums.length == 0) {
      fetchData();
    }
  }, [dispatch, albums]);

  useEffect(() => {
    setFilteredAlbums(
      albums.filter((album: GoogleAlbum) =>
        album.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [albums, filter]);

  return (
    <Layout>
      <Head>
        <title>Albums - Digital Nomad Photos</title>
        <meta name="description" content="Albums - Digital Nomad Photos" />
      </Head>

      <h1 hidden>Albums</h1>

      {loading ? (
        <Loader />
      ) : (
        <section className={styles.container}>
          <Filter
            placeholder="Search"
            filter={filter}
            setFilter={setTitleFilter}
          />
          <ElementCounter
            count={filteredAlbums.length}
            text={{ singular: 'Album', plural: 'Albums' }}
          />
          <AlbumList albums={filteredAlbums} />
        </section>
      )}
    </Layout>
  );
};

export default AlbumsPage;
